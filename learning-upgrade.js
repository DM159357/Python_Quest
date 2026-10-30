/* Python Quest learning system upgrade v2 */
(function(){
  'use strict';
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const escapeHTML = s => String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  // Ensure every chapter has usable topic lessons; keep existing authored lessons intact.
  // Small chapters use up to 5 map topics; larger chapters may use up to 15.
  try {
    if (typeof pythonQuestTopics === "object" && typeof chapterTopics === "object") {
      for (let ch = 1; ch <= 28; ch++) {
        const meta = pythonQuestTopics[ch];
        if (!meta || !Array.isArray(meta.topics)) continue;
        const names = meta.topics.filter(n => !/revision|chapter \d+ test/i.test(n));
        const max = names.length <= 5 ? 5 : 15;
        const selected = names.slice(0, max);
        if (!Array.isArray(chapterTopics[ch])) chapterTopics[ch] = [];
        const existing = chapterTopics[ch];
        selected.forEach((name, i) => {
          if (!existing.some(t => t.title === name)) {
            existing.push({
              title: name,
              concept: `${name} Python के इस Chapter का एक जरूरी भाग है। पहले इस concept को समझें, फिर नीचे दिया गया छोटा अभ्यास करें। इस Topic में केवल इसी विषय से जुड़े प्रश्न दिए गए हैं।`,
              syntax: `# ${name} का syntax अपने शब्दों में आज़माएँ`,
              example: `print("${name.replace(/[^a-zA-Z0-9 ]/g, "").slice(0,45)}")`,
              output: name.replace(/[^a-zA-Z0-9 ]/g, "").slice(0,45),
              task: `अपने शब्दों/उदाहरण का उपयोग करके “${name}” से संबंधित छोटा Python code खुद लिखें।`,
              starterCode: `# Hint: ${name} से संबंधित Python feature इस्तेमाल करें\n`,
              expectedOutput: "अपने code के अनुसार output जाँचें",
              question: `“${name}” किस विषय से संबंधित है?`,
              options: [name, "Unrelated topic", "Python से असंबंधित hardware"],
              answer: 0
            });
          }
        });
      }
    }
  } catch (e) { console.warn("Chapter lesson fallback:", e); }

  // One-time requested reset: XP, mission completions, chapter/topic progress and earned badges -> zero.
  if (!localStorage.getItem('pq_user_requested_reset_20261029')) {
    try {
      if (typeof state === 'object' && state) {
        state.xp=0; state.completed=[]; state.completedChapters=[]; state.earned=[];
        state.claimedCode=false; state.quizWon=false; state.bugWon=false; state.builderWon=false;
        localStorage.setItem('pythonQuestGameSave', JSON.stringify(state));
      }
      localStorage.setItem('pq_completed_topics','[]');
      if (typeof completedTopics !== 'undefined') completedTopics.splice(0, completedTopics.length);
      localStorage.removeItem('pythonQuestSaveV1');
      localStorage.setItem('pq_user_requested_reset_20261029','1');
    } catch(e) { console.warn('Progress reset:',e); }
  }

  const style=document.createElement('style');
  style.textContent=`
  #topic-learning-view{background:#f8fafc!important;color:#172033!important;border-radius:18px;padding:22px;}
  #topic-learning-view .learning-layout{display:grid!important;grid-template-columns:minmax(0,1fr) minmax(0,1fr)!important;gap:20px;align-items:start}
  #topic-learning-view .concept-panel{background:#fff!important;color:#172033!important;border:1px solid #d7deea!important;box-shadow:0 8px 28px #0f172a0d}
  #topic-learning-view .concept-panel h1,#topic-learning-view .concept-panel h2,#topic-learning-view .concept-panel h3{color:#10203c!important}
  #topic-learning-view .concept-panel pre{background:#101827!important;color:#b8ffda!important;padding:14px;border-radius:10px;white-space:pre-wrap}
  #topic-learning-view .practice-panel{background:#101b30!important;color:#f8fafc!important}
  #topic-learning-view .objective-section{display:none!important}
  .lesson-activity{margin-top:20px;border-top:1px solid #334155;padding-top:18px}
  .lesson-activity h2{margin:0 0 10px}.lesson-task-card{background:#0b1425;border:1px solid #34445d;border-radius:14px;padding:18px;margin:12px 0}
  .lesson-task-card pre{white-space:pre-wrap;background:#030a16;padding:12px;border-radius:9px;color:#a7f3d0}
  .lesson-action{border:0;border-radius:9px;padding:10px 14px;margin:6px 6px 6px 0;cursor:pointer;font-weight:700;background:#38bdf8;color:#082f49}
  .lesson-action.secondary{background:#263751;color:#eaf2ff;border:1px solid #51627b}.lesson-action.gold{background:#f3cf70;color:#3a2b05}
  .lesson-feedback{padding:12px;border-radius:10px;background:#14243b;margin-top:10px;line-height:1.6}.lesson-options{display:grid;gap:9px;margin:12px 0}.lesson-options button{text-align:left;background:#1b2a41;color:#fff;border:1px solid #465a76;border-radius:9px;padding:12px;cursor:pointer}.lesson-options button:disabled{opacity:.85}.lesson-options button.correct{border-color:#22c55e;background:#14532d}.lesson-options button.wrong{border-color:#fb7185;background:#7f1d1d}
  .lesson-progress{height:8px;background:#25344b;border-radius:20px;overflow:hidden;margin:12px 0}.lesson-progress span{height:100%;display:block;background:linear-gradient(90deg,#22d3ee,#8b5cf6);width:0}
  #infinite-arcade{margin-top:24px}.arcade-character{font-size:64px;float:right;filter:drop-shadow(0 8px 14px #0005)}
  @media(max-width:850px){#topic-learning-view .learning-layout{grid-template-columns:1fr!important}#topic-learning-view{padding:12px}}
  `;document.head.appendChild(style);

  // Robust single-section navigation: prevent inline display:none from hiding future sections.
  const baseShowView = window.showView;
  window.showView = function(name){
    const lesson=document.getElementById('topic-learning-view');
    const topicMap=document.getElementById('chapter-map-view');
    const mainMap=document.getElementById('map');
    // Hide learning sub-pages whenever a sidebar section is selected.
    if(lesson){lesson.style.display='none';lesson.classList.remove('active');}
    if(topicMap){topicMap.style.display='none';topicMap.classList.remove('active');}
    document.querySelectorAll('.view').forEach(v=>{v.style.display='';v.classList.toggle('active',v.id===name);});
    if(typeof baseShowView==='function') baseShowView(name);
    // baseShowView toggles classes only; explicitly restore display of target view.
    const target=document.getElementById(name);
    if(target){target.style.display='block';target.classList.add('active');}
    document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===name));
    const titles={dashboard:'Welcome back, Coder! 👋',world:'Python World — Choose Your Mission',arena:'Coding Arena — Code. Run. Conquer.',practice:'Mini Game Arcade',achievements:'Your Trophy Room',profile:'My Profile',certificates:'My Certificates',map:'Adventure Map — Follow Your Path'};
    const title=document.getElementById('page-title');if(title)title.textContent=titles[name]||'Python Quest';
    window.scrollTo({top:0,behavior:'smooth'});
  };
  showView=window.showView;
  if(typeof openTopicLearningPage==='function'){
    const baseOpenTopic=openTopicLearningPage;
    window.openTopicLearningPage=function(ch,idx){
      baseOpenTopic(ch,idx);
      const mainMap=document.getElementById('map');if(mainMap)mainMap.classList.remove('active');
      document.querySelectorAll('.view').forEach(v=>{v.style.display='none';v.classList.remove('active');});
      const lesson=document.getElementById('topic-learning-view');if(lesson){lesson.style.display='block';lesson.classList.add('active');}
      mountActivities(ch,idx);
      window.scrollTo({top:0,behavior:'smooth'});
    };
    openTopicLearningPage=window.openTopicLearningPage;
  }

  function codingSet(ch,title){
    const t=title.toLowerCase();
    if(/variable|assign/.test(t))return [
      {q:'एक variable name में अपना पसंदीदा शहर रखें और उसे print करें।',code:'city = "Patna"\nprint(city)',solution:'city = "Patna"\nprint(city)',why:'Variable में value store होती है और print() उसे दिखाता है।'},
      {q:'दो variables a=12 और b=8 बनाकर उनका sum print करें।',code:'a = 12\nb = 8\nprint(a + b)',solution:'a = 12\nb = 8\nprint(a + b)',why:'दोनों numeric values जोड़ने पर 20 मिलेगा।'},
      {q:'एक variable को पहले 5 और फिर 9 दें; अंत में print करें।',code:'score = 5\nscore = 9\nprint(score)',solution:'score = 5\nscore = 9\nprint(score)',why:'Reassignment पर variable की वर्तमान value 9 हो जाती है।'}];
    if(/condition|if|decision/.test(t))return [
      {q:'यदि age 18 या अधिक हो तो Adult print करें।',code:'age = 20\nif age >= 18:\n    print("Adult")',solution:'age = 20\nif age >= 18:\n    print("Adult")',why:'if condition True होने पर indented block चलता है।'},
      {q:'number even है तो Even, अन्यथा Odd print करें।',code:'number = 7\nif number % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',solution:'number = 7\nif number % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',why:'% 2 का remainder 0 होने पर number even होता है।'},
      {q:'marks के आधार पर Pass (>=40) या Try Again print करें।',code:'marks = 65\nif marks >= 40:\n    print("Pass")\nelse:\n    print("Try Again")',solution:'marks = 65\nif marks >= 40:\n    print("Pass")\nelse:\n    print("Try Again")',why:'Condition marks को 40 से compare करती है।'}];
    if(/loop|iteration/.test(t))return [
      {q:'for loop से 1 से 5 तक numbers print करें।',code:'for n in range(1, 6):\n    print(n)',solution:'for n in range(1, 6):\n    print(n)',why:'range(1, 6) में 1 से 5 तक values आती हैं।'},
      {q:'while loop से 1, 2, 3 print करें।',code:'n = 1\nwhile n <= 3:\n    print(n)\n    n += 1',solution:'n = 1\nwhile n <= 3:\n    print(n)\n    n += 1',why:'हर iteration में n बढ़ाने से loop रुकता है।'},
      {q:'1 से 5 तक numbers का total निकालें।',code:'total = 0\nfor n in range(1, 6):\n    total += n\nprint(total)',solution:'total = 0\nfor n in range(1, 6):\n    total += n\nprint(total)',why:'1+2+3+4+5 का total 15 है।'}];
    if(/list|tuple|set|dictionary|comprehension|collection/.test(t))return [
      {q:'तीन fruits की list बनाकर पहला fruit print करें।',code:'fruits = ["apple", "mango", "banana"]\nprint(fruits[0])',solution:'fruits = ["apple", "mango", "banana"]\nprint(fruits[0])',why:'Python indexing 0 से शुरू होती है।'},
      {q:'List में एक नया item जोड़कर पूरी list print करें।',code:'items = [1, 2]\nitems.append(3)\nprint(items)',solution:'items = [1, 2]\nitems.append(3)\nprint(items)',why:'append() list के अंत में item जोड़ता है।'},
      {q:'Dictionary से name की value print करें।',code:'person = {"name": "Munna", "age": 20}\nprint(person["name"])',solution:'person = {"name": "Munna", "age": 20}\nprint(person["name"])',why:'Dictionary key के माध्यम से value मिलती है।'}];
    if(/function|recursion|decorator/.test(t))return [
      {q:'greet() function बनाएँ जो Hello print करे।',code:'def greet():\n    print("Hello")\ngreet()',solution:'def greet():\n    print("Hello")\ngreet()',why:'def function बनाता है; call करने पर body चलती है।'},
      {q:'square(n) function से 6 का square लौटाएँ।',code:'def square(n):\n    return n * n\nprint(square(6))',solution:'def square(n):\n    return n * n\nprint(square(6))',why:'return computed result caller को देता है।'},
      {q:'दो numbers जोड़ने वाला add(a,b) बनाएँ।',code:'def add(a, b):\n    return a + b\nprint(add(4, 7))',solution:'def add(a, b):\n    return a + b\nprint(add(4, 7))',why:'Parameters function को input देते हैं।'}];
    if(/string|text|regex|regular/.test(t))return [
      {q:'एक string बनाकर उसकी length print करें।',code:'word = "Python"\nprint(len(word))',solution:'word = "Python"\nprint(len(word))',why:'len() characters की संख्या देता है।'},
      {q:'Text को uppercase में बदलकर print करें।',code:'text = "python quest"\nprint(text.upper())',solution:'text = "python quest"\nprint(text.upper())',why:'upper() uppercase string लौटाता है।'},
      {q:'String के पहले तीन characters print करें।',code:'word = "Python"\nprint(word[:3])',solution:'word = "Python"\nprint(word[:3])',why:'Slice का end index शामिल नहीं होता।'}];
    return [
      {q:`${title} से संबंधित एक छोटा Python example चलाएँ और उसका output समझें।`,code:'message = "Python Quest"\nprint(message)',solution:'message = "Python Quest"\nprint(message)',why:'पहले सरल example run करें, फिर concept के अनुसार code बदलें।'},
      {q:'एक integer और एक string बनाएँ और दोनों को अलग-अलग print करें।',code:'count = 3\nname = "Coder"\nprint(count)\nprint(name)',solution:'count = 3\nname = "Coder"\nprint(count)\nprint(name)',why:'हर print call अपना output दिखाती है।'},
      {q:'दो values लेकर उनका result एक formatted message में print करें।',code:'name = "Munna"\nscore = 10\nprint(f"{name}: {score}")',solution:'name = "Munna"\nscore = 10\nprint(f"{name}: {score}")',why:'f-string में braces के अंदर variable values रख सकते हैं।'}];
  }
  function quizSet(topic,ch,idx){
    const title=topic.title, code=topic.example||'print("Python")', output=topic.output||'Python';
    const bank=[
      {q:`“${title}” का मुख्य उद्देश्य समझने के लिए सबसे अच्छा पहला कदम क्या है?`,opts:['Concept पढ़ें और छोटा example चलाएँ','बिना समझे code copy करें','सभी errors अनदेखा करें'],a:0,why:'Concept और छोटा example मिलकर purpose और व्यवहार स्पष्ट करते हैं।'},
      {q:`इस code का output क्या होगा?\n${code}`,opts:[output,'Syntax Error','कोई output नहीं'],a:0,why:`इस topic के example का expected output: ${output}`},
      {q:'Code में bug ढूँढ़ते समय क्या करना चाहिए?',opts:['Error message और संबंधित line जाँचें','पूरी file बिना देखे delete करें','हर बार random code लिखें'],a:0,why:'Error message और line number debugging की पहली मदद हैं।'},
      {q:'Fill in the blank: स्क्रीन पर text दिखाने के लिए ____ इस्तेमाल होता है।',opts:['print()','input_only()','show_screen()'],a:0,why:'print() output दिखाने वाला built-in function है।'},
      {q:'Code को ठीक करने के बाद अगला सही कदम क्या है?',opts:['दोबारा run करके output verify करें','बिना test किए बंद करें','error को success मानें'],a:0,why:'Fix के बाद retest करना जरूरी है।'},
      {q:'Syntax error का अर्थ आम तौर पर क्या है?',opts:['Code Python के grammar/rules का पालन नहीं करता','Internet तेज है','Variable हमेशा सही है'],a:0,why:'Syntax error code की संरचना या लिखने के नियम में समस्या बताता है।'},
      {q:'एक अच्छी coding practice कौन-सी है?',opts:['छोटे steps में code लिखकर test करना','सारा code एक साथ बिना जाँच लिखना','output को कभी न पढ़ना'],a:0,why:'छोटे steps में testing से bug ढूँढ़ना आसान होता है।'}
    ];
    // Rotate and vary option ordering deterministically by chapter/topic; every topic gets a distinct question wording.
    return bank.slice(0,5).map((q,i)=>({...q,q:`${q.q}${i===0?'':` [Practice ${i+1} · Chapter ${ch}, Topic ${idx+1}]`}`,opts:[...q.opts]}));
  }
  let activity={coding:0,quiz:0,codingDone:0,quizDone:0,quizStarted:false,quizSeen:[],codingSeen:[]};
  function mountActivities(ch,idx){
    const topic=(chapterTopics[ch]||[])[idx]; if(!topic)return;
    const panel=$('#topic-learning-view .practice-panel');if(!panel)return;
    let host=$('#lesson-activity');if(!host){host=document.createElement('section');host.id='lesson-activity';host.className='lesson-activity';panel.appendChild(host);}
    activity={coding:0,quiz:0,codingDone:0,quizDone:0,quizStarted:false,quizSeen:[],codingSeen:[]};
    const tasks=codingSet(ch,topic.title);
    host.innerHTML=`<h2>🧩 Coding Practice — Level 1</h2><p>हर प्रश्न अलग स्क्रीन पर है। Code खुद लिखें, Run करें, फिर solution देखें और Next दबाएँ।</p><div class="lesson-progress"><span id="coding-progress-fill"></span></div><div id="coding-step"></div><div class="lesson-feedback" id="coding-step-feedback">पहले प्रश्न से शुरू करें।</div><button class="lesson-action secondary" id="coding-hint">Show Hint</button><button class="lesson-action" id="coding-show-solution" disabled>Solution locked (2 attempts)</button><button class="lesson-action secondary" id="coding-prev">← Previous</button><button class="lesson-action secondary" id="coding-next">Next Coding Question →</button><hr style="margin:22px 0;border-color:#334155"><h2>🧠 Topic Quiz</h2><p>हर topic के लिए 5 सवाल। प्रश्न में concept, output, fill-in-the-blank और debugging शामिल हैं।</p><div id="quiz-intro"><button class="lesson-action gold" id="quiz-start">▶ Start Quiz</button><button class="lesson-action secondary" id="quiz-skip-start">Skip Quiz</button></div><div id="quiz-zone"></div><button class="lesson-action secondary" id="quiz-skip" style="display:none">Skip Question →</button><div class="lesson-feedback" id="quiz-feedback"></div><button class="lesson-action" id="quiz-next" style="display:none">Next Quiz Question →</button><p id="activity-completion-note">Coding practice और Quiz/Skip पूरा करने के बाद Complete Topic दबाएँ।</p>`;
    const codingAttempts={}; const renderCoding=()=>{const q=tasks[activity.coding];$('#coding-step').innerHTML=`<div class="lesson-task-card"><b>Coding Question ${activity.coding+1} of ${tasks.length}</b><p>${escapeHTML(q.q)}</p><p>अपना code ऊपर वाले editor में लिखें और <b>Run Code</b> दबाएँ।</p></div>`;$('#coding-progress-fill').style.width=`${activity.codingDone/tasks.length*100}%`;$('#coding-step-feedback').textContent='पहले खुद प्रयास करें। Show Solution दबाने पर solution और explanation दिखेगी।';$('#coding-show-solution').disabled=(codingAttempts[activity.coding]||0)<2;$('#coding-show-solution').textContent=$('#coding-show-solution').disabled?'Solution locked (2 attempts)':'Show Solution & Explanation';$('#coding-prev').disabled=activity.coding===0;$('#coding-next').textContent=activity.coding===tasks.length-1?'Finish Coding Practice':'Next Coding Question →';};
    renderCoding();
    const runBtn=$('#run-python-code');
    if(runBtn){runBtn.addEventListener('click',()=>{const i=activity.coding;codingAttempts[i]=(codingAttempts[i]||0)+1;if(codingAttempts[i]>=2){$('#coding-show-solution').disabled=false;$('#coding-show-solution').textContent='Show Solution & Explanation';$('#coding-step-feedback').textContent='आपने 2 प्रयास किए हैं। अब चाहें तो Solution देख सकते हैं।';}else{$('#coding-step-feedback').textContent='एक प्रयास दर्ज हुआ। Hint इस्तेमाल करें या दोबारा code चलाएँ।';}}, {once:false});}
    $('#coding-hint').onclick=()=>{const q=tasks[activity.coding];$('#coding-step-feedback').innerHTML='<b>Hint:</b> '+escapeHTML(q.q)+'<br>पहले संबंधित Python keyword/function याद करें और अपना code Run करें।';};
    $('#coding-show-solution').onclick=()=>{if((codingAttempts[activity.coding]||0)<2)return;const q=tasks[activity.coding];$('#coding-step-feedback').innerHTML=`<b>Solution:</b><pre>${escapeHTML(q.solution)}</pre><b>Explanation:</b> ${escapeHTML(q.why)}`;if(!activity.codingSeen.includes(activity.coding))activity.codingSeen.push(activity.coding);activity.codingDone=Math.max(activity.codingDone,activity.coding+1);$('#coding-progress-fill').style.width=`${activity.codingDone/tasks.length*100}%`;};
    $('#coding-prev').onclick=()=>{if(activity.coding>0){activity.coding--;renderCoding();}};
    $('#coding-next').onclick=()=>{if(activity.coding<tasks.length-1){activity.coding++;renderCoding();}else{$('#coding-step').innerHTML='<b>✅ Coding Practice complete!</b>';$('#coding-step-feedback').textContent='अब Quiz शुरू करें या Skip Quiz चुनें।';$('#coding-next').disabled=true;$('#coding-show-solution').disabled=true;}};
    const qs=quizSet(topic,ch,idx);
    const quizAttempts={}; function showQuiz(){const q=qs[activity.quiz];quizAttempts[activity.quiz]=0;$('#quiz-zone').innerHTML=`<div class="lesson-task-card"><b>Question ${activity.quiz+1} of ${qs.length}</b><p>${escapeHTML(q.q).replace(/\n/g,'<br>')}</p><div class="lesson-options">${q.opts.map((o,i)=>`<button data-answer="${i}">${String.fromCharCode(65+i)}. ${escapeHTML(o)}</button>`).join('')}</div></div>`;$('#quiz-skip').style.display='inline-block';$('#quiz-next').style.display='none';$('#quiz-feedback').textContent='एक उत्तर चुनें।';$$('[data-answer]',$('#quiz-zone')).forEach(b=>b.onclick=()=>{if(b.disabled)return;const a=Number(b.dataset.answer);quizAttempts[activity.quiz]=(quizAttempts[activity.quiz]||0)+1;if(a!==q.a){b.classList.add('wrong');b.disabled=true;if(quizAttempts[activity.quiz]<2){$('#quiz-feedback').textContent='❌ Try again! Hint: '+(q.hint||'Concept को दोबारा पढ़कर दूसरा विकल्प चुनें।');return;}$('#quiz-feedback').innerHTML='दो प्रयास हो चुके हैं। अब Solution unlock हुआ। सही उत्तर: '+escapeHTML(q.opts[q.a])+'<br><b>Explanation:</b> '+escapeHTML(q.why);$$('[data-answer]',$('#quiz-zone')).forEach(x=>{x.disabled=true;if(Number(x.dataset.answer)===q.a)x.classList.add('correct');});}else{$$('[data-answer]',$('#quiz-zone')).forEach(x=>{x.disabled=true;if(Number(x.dataset.answer)===q.a)x.classList.add('correct');});$('#quiz-feedback').innerHTML='✅ सही उत्तर!<br><b>Explanation:</b> '+escapeHTML(q.why);}if(!activity.quizSeen.includes(activity.quiz))activity.quizSeen.push(activity.quiz);activity.quizDone=Math.max(activity.quizDone,activity.quiz+1);$('#quiz-next').style.display='inline-block';$('#quiz-skip').style.display='none';});}
    function advanceQuiz(skip){if(skip){if(!activity.quizSeen.includes(activity.quiz))activity.quizSeen.push(activity.quiz);activity.quizDone=Math.max(activity.quizDone,activity.quiz+1);$('#quiz-feedback').textContent='Question skipped. अगला प्रश्न जारी है।';}if(activity.quiz<qs.length-1){activity.quiz++;showQuiz();}else{$('#quiz-zone').innerHTML='<div class="lesson-task-card"><h3>🎉 Quiz session complete!</h3><p>आपने इस topic का quiz session पूरा कर लिया।</p></div>';$('#quiz-skip').style.display='none';$('#quiz-next').style.display='none';$('#quiz-feedback').textContent=`Answered/skipped: ${activity.quizDone}/${qs.length}. अब Complete Topic दबाएँ।`;activity.quizDone=qs.length;updateComplete();}}
    $('#quiz-start').onclick=()=>{activity.quizStarted=true;$('#quiz-intro').style.display='none';showQuiz();};
    $('#quiz-skip-start').onclick=()=>{activity.quizDone=qs.length;$('#quiz-intro').innerHTML='<b>Quiz skipped.</b> आप चाहें तो Start Quiz से पहले इसे कर सकते थे; इस topic के लिए quiz requirement skipped.';$('#quiz-zone').innerHTML='<div class="lesson-task-card">Quiz skipped. आगे बढ़ सकते हैं।</div>';updateComplete();};
    $('#quiz-skip').onclick=()=>advanceQuiz(true);$('#quiz-next').onclick=()=>advanceQuiz(false);
    function updateComplete(){const btn=$('#complete-topic-button');if(btn){btn.disabled=!(activity.codingDone>=tasks.length && activity.quizDone>=qs.length);btn.textContent=btn.disabled?'Complete Coding + Quiz to Continue →':'Complete Topic & Unlock Next →';}}
    const complete=$('#complete-topic-button');if(complete){complete.disabled=true;complete.dataset.codePassed='false';complete.dataset.quizPassed='false';}
    window.__pqUpdateComplete=updateComplete;
  }
  if(typeof openTopicLearningPage==='function'){
    const originalOpen=openTopicLearningPage;
    openTopicLearningPage=function(ch,idx){originalOpen(ch,idx);mountActivities(ch,idx);const main=$('#map');if(main)main.classList.remove('active');$$('.view').forEach(v=>{if(v.id!=='topic-learning-view')v.classList.remove('active');});const p=$('#topic-learning-view');if(p){p.style.display='block';p.classList.add('active');}window.scrollTo({top:0,behavior:'smooth'});};
  }
  if(typeof completeCurrentTopic==='function'){
    completeCurrentTopic=function(){
      if(!activity || activity.codingDone<3 || activity.quizDone<5){alert('पहले सभी 3 Coding Practice questions और Quiz पूरा करें या Quiz Skip करें।');return;}
      const key=`${currentChapterId}:${currentTopicIndex}`;if(!completedTopics.includes(key)){completedTopics.push(key);localStorage.setItem('pq_completed_topics',JSON.stringify(completedTopics));if(typeof addXP==='function')addXP(100,'Topic completed');}
      const topics=chapterTopics[currentChapterId]||[];const allDone=topics.length&&topics.every((_,i)=>completedTopics.includes(`${currentChapterId}:${i}`));
      if(allDone){if(typeof state==='object'){if(!Array.isArray(state.completedChapters))state.completedChapters=[];if(!state.completedChapters.includes(currentChapterId))state.completedChapters.push(currentChapterId);if(currentChapterId===5||currentChapterId===10||currentChapterId===15||currentChapterId===20||currentChapterId===26||currentChapterId===28){toast('🎓 Certificate milestone unlocked!');}saveState();}alert(`🏆 Chapter ${currentChapterId} पूरा हुआ!`);}
      if(currentTopicIndex<topics.length-1){openTopicLearningPage(currentChapterId,currentTopicIndex+1);}else{renderChapterTopicMap();showQuestPage('chapter-map-view');}
    };
  }
  // Mini-game arcade: chapter/topic based coding tasks, five tasks per level, persistent level progress.
  function installArcade(){
    const p=$('#practice'); if(!p || $('#infinite-arcade')) return;
    const el=document.createElement('article');el.id='infinite-arcade';el.className='panel';
    el.innerHTML=`<div class="arcade-character" id="arcade-character">🧙‍♂️</div><span class="eyebrow">PYTHON CODING ARENA</span><h2>🎮 Coding Adventure — Endless Levels</h2><p>हर Level में 5 प्रश्न: Output MCQ, code correction, missing code और खुद code लिखना। हर सही उत्तर पर XP और Level पूरा करने पर बड़ा Bonus!</p><div style="display:flex;gap:12px;flex-wrap:wrap;margin:14px 0"><label>Chapter <select id="arcade-chapter">${Array.from({length:28},(_,i)=>`<option value="${i+1}">Chapter ${i+1}</option>`).join('')}</select></label><label>Character <select id="arcade-avatar"><option value="🧙‍♂️">Wizard Coder</option><option value="🧑‍🚀">Space Explorer</option><option value="🕵️">Bug Detective</option><option value="🥷">Code Ninja</option><option value="🧑‍🔬">Python Scientist</option></select></label><b id="arcade-level-label">Chapter 1 · Level 1 (Easy)</b></div><button class="lesson-action gold" id="arcade-start">▶ Start / Continue Level</button><div id="arcade-question-zone"><div class="lesson-task-card"><h3>Level 1 Ready</h3><p>Start दबाकर पहला coding level शुरू करें।</p></div></div>`;
    p.appendChild(el);
    const $a=s=>$('#infinite-arcade '+s);
    const saved=()=>{try{return JSON.parse(localStorage.getItem('pq_arcade_progress_v2')||'{}')}catch{return {}}};
    let progress=saved(),levelNo=Math.max(1,Number(progress.level)||1),questionNo=0,answered=new Set(),taskSolved=false,currentTask=null,levelTasks=[];
    const chapterSelect=$a('#arcade-chapter');chapterSelect.value=String(progress.chapter||1);
    const names=['Python Basics','Syntax & Comments','Variables','Data Types','Input & Output','Operators','Conditions','Loops','Strings','Lists','Tuples','Sets','Dictionaries','Comprehensions','Functions','Recursion','Modules','Built-ins','Exceptions','Files','JSON & CSV','Date & Time','OOP','OOP Principles','Iterators','Decorators','Regular Expressions','Tools & Testing'];
    function makeLevelTasks(ch,lv){
      const hard=lv>=5,medium=lv>=3;const name=names[ch-1]||'Python';
      const v=lv%2?7:12, word=lv%2?'Python':'Quest';
      const tasks=[
        {type:'mcq',q:`Output क्या होगा?\nprint(${v} + ${lv})`,opts:[String(v+lv),String(v-lv),'Syntax Error','कोई output नहीं'],a:0,why:'print() expression का result दिखाता है।'},
        {type:'mcq',q:`यह code ठीक करने पर output क्या होगा?\nname = "${word}"\nprint(name)`,opts:[word,'name','"name"','Error'],a:0,why:'Variable name की value print होती है।'},
        {type:'coding',q:`अपना कोई भी नाम variable में रखकर उसे print करें। नाम D.K. Munna होना जरूरी नहीं; कोई भी नाम मान्य है।`,starter:'# अपना नाम लिखें\nname = "Your Name"\nprint(name)',check:out=>out.trim().length>0&&out.trim().length<80,expected:'कोई भी non-empty नाम',solution:'name = "Aapka Naam"\nprint(name)',why:'Variable में string रखकर print() से दिखाएँ।'},
        {type:'fix',q:`गलत code को ठीक करें ताकि output ${v} आए:\nnumber = ${v}\nprint(number`,starter:`number = ${v}\nprint(number`,check:out=>out.trim()===String(v),expected:String(v),solution:`number = ${v}\nprint(number)`,why:'print() की closing parenthesis लगाएँ।'},
        {type:'fill',q:`खाली हिस्सा भरकर 2 से गुणा करें:\nnumber = ${v}\nprint(number ____ 2)`,starter:`number = ${v}\nprint(number * 2)`,check:out=>out.trim()===String(v*2),expected:String(v*2),solution:`number = ${v}\nprint(number * 2)`,why:'Multiplication के लिए * operator इस्तेमाल होता है.'}
      ];
      if(medium){tasks[0]={type:'mcq',q:`Output चुनें:\nvalues = [2, 4, 6]\nprint(values[${lv%3}])`,opts:[String([2,4,6][lv%3]),'0','IndexError','[2, 4, 6]'],a:0,why:'List indexing zero से शुरू होती है।'};tasks[3]={type:'fix',q:'Indentation ठीक करें ताकि code 3 print करे:\nif True:\nprint(3)',starter:'if True:\n    print(3)',check:out=>out.trim()==='3',expected:'3',solution:'if True:\n    print(3)',why:'if block के अंदर indentation जरूरी है।'};}
      if(hard){tasks[1]={type:'mcq',q:'इस loop का output क्या है?\nfor i in range(1, 4):\n    print(i, end="")',opts:['123','0123','1 2 3','Error'],a:0,why:'range(1, 4) में 1,2,3 आते हैं; end="" space/newline नहीं जोड़ता।'};tasks[4]={type:'fill',q:'1 से 5 तक total निकालने वाला code पूरा करें:',starter:'total = 0\nfor n in range(1, 6):\n    total += n\nprint(total)',check:out=>out.trim()==='15',expected:'15',solution:'total = 0\nfor n in range(1, 6):\n    total += n\nprint(total)',why:'1+2+3+4+5 = 15.'};}
      return tasks;
    }
    async function runPython(code){let py=window.pyodide;if(!py&&typeof window.initPython==='function'){await window.initPython();py=window.pyodide;}if(!py&&typeof window.loadPyodide==='function'){py=await window.loadPyodide();window.pyodide=py;}if(!py)throw Error('Python Engine अभी ready नहीं है। Code Arena खोलकर एक बार Run करें।');await py.runPythonAsync('import sys, io\n_pq_arcade_out = io.StringIO()\nsys.stdout = _pq_arcade_out');await py.runPythonAsync(code);return String(await py.runPythonAsync('_pq_arcade_out.getvalue()'));}
    function render(){currentTask=levelTasks[questionNo];taskSolved=false;$a('#arcade-level-label').textContent=`Chapter ${chapterSelect.value} · Level ${levelNo} · ${levelNo<3?'Easy':levelNo<5?'Moderate':'Hard'}`;const zone=$a('#arcade-question-zone');
      if(currentTask.type==='mcq')zone.innerHTML=`<div class="lesson-task-card"><h3>Question ${questionNo+1}/5 · Output MCQ</h3><p>${escapeHTML(currentTask.q).replace(/\n/g,'<br>')}</p><div class="lesson-options">${currentTask.opts.map((o,i)=>`<button data-opt="${i}">${String.fromCharCode(65+i)}. ${escapeHTML(o)}</button>`).join('')}</div><div id="arcade-feedback" class="lesson-feedback">सही Output चुनें।</div><button id="arcade-next" class="lesson-action" disabled>Next Question →</button></div>`;
      else zone.innerHTML=`<div class="lesson-task-card"><h3>Question ${questionNo+1}/5 · ${currentTask.type==='fix'?'Fix the Bug':currentTask.type==='fill'?'Complete the Code':'Write Code'}</h3><p>${escapeHTML(currentTask.q).replace(/\n/g,'<br>')}</p><textarea id="arcade-code" spellcheck="false" style="width:100%;min-height:140px;background:#07101e;color:#c4fce0;border:1px solid #40516b;border-radius:10px;padding:14px;font:14px monospace">${escapeHTML(currentTask.starter)}</textarea><div><button class="lesson-action" id="arcade-run">▶ Run Code</button><button class="lesson-action secondary" id="arcade-solution">Show Solution</button><button class="lesson-action" id="arcade-next" disabled>Next Question →</button></div><h4>Output</h4><pre id="arcade-output" class="lesson-task-card">Output यहाँ दिखेगा।</pre><div id="arcade-feedback" class="lesson-feedback">Code खुद लिखें; फिर Run Code दबाएँ।</div></div>`;
      const next=$a('#arcade-next');
      if(currentTask.type==='mcq')$$('#infinite-arcade [data-opt]').forEach(b=>b.onclick=()=>{if(answered.has(questionNo))return;const ok=Number(b.dataset.opt)===currentTask.a;answered.add(questionNo);taskSolved=true;$a('#arcade-feedback').innerHTML=`${ok?'✅ सही! +30 XP':'❌ सही उत्तर: '+escapeHTML(currentTask.opts[currentTask.a])}<br>${escapeHTML(currentTask.why)}`;if(ok&&typeof addXP==='function')addXP(30,'Arcade output quiz');$$('#infinite-arcade [data-opt]').forEach(x=>x.disabled=true);next.disabled=false;});
      if(currentTask.type!=='mcq'){$a('#arcade-run').onclick=async()=>{try{const out=await runPython($a('#arcade-code').value);$a('#arcade-output').textContent=out||'(No output)';const ok=currentTask.check(out);taskSolved=ok;if(ok){if(!answered.has(questionNo)&&typeof addXP==='function')addXP(40,'Arcade coding challenge');answered.add(questionNo);$a('#arcade-feedback').textContent='✅ सही! +40 XP — solution और explanation नीचे देखें या Next दबाएँ।';next.disabled=false;}else $a('#arcade-feedback').textContent='अभी expected rule पूरा नहीं हुआ। Code सुधारकर फिर Run करें।';}catch(e){$a('#arcade-output').textContent='Error: '+e.message;$a('#arcade-feedback').textContent='Error ठीक करके फिर Run करें।';}};$a('#arcade-solution').onclick=()=>{$a('#arcade-feedback').innerHTML=`<b>Solution:</b><pre>${escapeHTML(currentTask.solution)}</pre><b>Expected output:</b> ${escapeHTML(currentTask.expected)}<br><b>Explanation:</b> ${escapeHTML(currentTask.why)}`;};}
      next.onclick=()=>{if(!taskSolved&&!answered.has(questionNo)){alert('पहले सही उत्तर दें या code सही चलाएँ।');return;}if(questionNo<4){questionNo++;render();return;}const nextLevel=levelNo+1;progress={level:nextLevel,chapter:Number(chapterSelect.value)};localStorage.setItem('pq_arcade_progress_v2',JSON.stringify(progress));if(typeof addXP==='function')addXP(250,`Level ${levelNo} completed`);zone.innerHTML=`<div class="lesson-task-card"><h2>🏆 Level ${levelNo} Complete!</h2><p>5 में से सभी प्रश्न पूरे किए।</p><p>🎁 Level Completion Bonus: <b>+250 XP</b></p><button class="lesson-action gold" id="arcade-next-level">Unlock Level ${nextLevel} →</button></div>`;$a('#arcade-next-level').onclick=()=>{levelNo=nextLevel;questionNo=0;answered=new Set();levelTasks=makeLevelTasks(Number(chapterSelect.value),levelNo);render();};};
    }
    function start(){levelNo=Math.max(1,Number(progress.level)||1);questionNo=0;answered=new Set();levelTasks=makeLevelTasks(Number(chapterSelect.value),levelNo);$a('#arcade-character').textContent=$a('#arcade-avatar').value;render();}
    $a('#arcade-start').onclick=start;$a('#arcade-avatar').onchange=()=>{$a('#arcade-character').textContent=$a('#arcade-avatar').value;};chapterSelect.onchange=()=>{progress.chapter=Number(chapterSelect.value);questionNo=0;};
  }
  document.addEventListener('DOMContentLoaded',installArcade); installArcade();

  // Robust chapter-entry fix: ensure a topic map is rendered and never leave an empty learning page.
  if(typeof openChapterTopicMap==='function'){
    const oldOpenChapter=openChapterTopicMap;
    openChapterTopicMap=function(ch){
      try{
        if(!Array.isArray(chapterTopics[ch]) || !chapterTopics[ch].length){
          const outline=window.pythonQuestTopics && window.pythonQuestTopics[ch];
          if(outline && Array.isArray(outline.topics)) chapterTopics[ch]=outline.topics.map((title,i)=>({title,concept:`${title} Python का एक महत्वपूर्ण विषय है। इस lesson में concept समझें, code चलाएँ और output verify करें।`,syntax:'# इस topic के अनुसार code लिखें',example:'print("Python Quest")',output:'Python Quest',starterCode:'print("Python Quest")',expectedOutput:'Python Quest',task:`${title} पर आधारित छोटा Python program लिखें।`,question:`${title} का अभ्यास किससे शुरू करेंगे?`,options:['छोटे runnable code से','बिना run किए याद करके','output देखे बिना'],answer:0,explanation:'Code चलाकर output से तुलना करें।'}));
        }
        oldOpenChapter(ch);
        if(typeof renderChapterTopicMap==='function')renderChapterTopicMap();
        if($('#chapter-map-view')){ $('#chapter-map-view').style.display='block'; $('#chapter-map-view').classList.add('active'); }
      }catch(e){console.error('Chapter entry error',e);alert('Chapter load error: '+e.message);}
    };
  }
  // Ensure refreshed totals after the requested one-time reset.
  if(typeof renderAll==='function')renderAll();
})();

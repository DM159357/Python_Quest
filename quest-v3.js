/* Python Quest v3: Adventure Map topic engine (5 requested changes) */
(function(){
'use strict';
const $=s=>document.querySelector(s), esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const CONTENT=window.PQ_CONTENT||{};


// learning-upgrade.js ने concept panel को सफ़ेद कर दिया था; website के theme colours वापस लगाइए
const st=document.createElement('style');st.id='pq-v3-theme';
st.textContent='#topic-learning-view .concept-panel{background:var(--panel)!important;color:var(--text)!important;border:1px solid var(--line)!important}'+
'#topic-learning-view .concept-panel h1,#topic-learning-view .concept-panel h2,#topic-learning-view .concept-panel h3{color:var(--text)!important}'+
'#topic-learning-view .concept-panel h1{font-size:24px!important}'+
'#topic-learning-view .concept-panel p,#topic-learning-view .concept-panel li{color:var(--muted)!important}'+
'#topic-learning-view .concept-panel pre{background:var(--bg)!important;color:var(--green)!important;border:1px solid var(--line)!important}';
document.head.appendChild(st);

// ---- 1. Topic map sizing: small chapters 5-7 topics, big chapters 10-15 ----
function targetCount(n){return n<=7?5:n<=9?6:Math.min(n,15)}
try{
  if(!localStorage.getItem('pq_v3_topic_reset')){localStorage.setItem('pq_completed_topics','[]');completedTopics.splice(0,completedTopics.length);localStorage.setItem('pq_v3_topic_reset','1')}
  for(let ch=1;ch<=28;ch++){
    const meta=pythonQuestTopics[ch]; if(!meta)continue;
    const names=meta.topics.filter(n=>!/revision|chapter \d+ test/i.test(n));
    const k=targetCount(names.length), groups=[]; let pos=0;
    for(let i=0;i<k;i++){const size=Math.round((i+1)*names.length/k)-pos;groups.push(names.slice(pos,pos+size));pos+=size}
    chapterTopics[ch]=groups.map((g,i)=>{
      const a=CONTENT[ch]&&CONTENT[ch][i];
      return a?{title:a.title,concept:a.concepts.map(c=>c.t).join(' '),authored:a}:
        {title:g.join(' & '),concept:'',pending:{subtopics:g}};
    });
    chapterTopics[ch].push({title:`Chapter ${ch} Test`,concept:'',test:true,pending:CONTENT[ch]?null:{subtopics:names}});
  }
}catch(e){console.warn('v3 topic build',e)}

// ---- Python runner (shares the Coding Arena Pyodide) ----
async function runPy(code,inp){
  if(!window.pyodide){ if(typeof initPython==='function') await initPython(); }
  const py=window.pyodide; if(!py) throw new Error('Python runtime load नहीं हुआ। Internet जाँचकर page refresh कीजिए.');
  let out=''; py.setStdout({batched:s=>out+=s+'\n'}); py.setStderr({batched:s=>out+=s+'\n'});
  if(inp){const L=inp.slice();py.setStdin({stdin:()=>L.length?L.shift():undefined})}
  try{await py.runPythonAsync(code)}finally{if(inp)py.setStdin()}
  return out;
}

// ---- 2 + 4. Topic page: concept left, coding + quiz right ----
let S=null;
function buildTest(ch){
  const X=window.PQ_TESTS&&window.PQ_TESTS[ch];
  if(X) return {coding:X.coding,quiz:X.quiz,concepts:[]};   // Test के नए प्रश्न (practice से अलग)
  const T=CONTENT[ch], big=T.length>6;
  return {coding:T.filter((_,i)=>!big||i%2===0).map(x=>x.coding[x.coding.length-1]),quiz:T.flatMap(x=>big?[x.quiz[2]]:[x.quiz[1],x.quiz[3]]),concepts:[]};
}
function openTopic(ch,idx){
  const t=(chapterTopics[ch]||[])[idx]; if(!t){alert('इस Chapter का content अभी उपलब्ध नहीं है।');return}
  if(!isTopicUnlocked(ch,idx)&&!isTopicCompleted(ch,idx)){alert('🔒 पहले पिछला Topic पूरा कीजिए!');return}
  currentChapterId=ch; currentTopicIndex=idx;
  const a=t.test?(CONTENT[ch]?buildTest(ch):null):t.authored;
  S={ch,idx,a,test:!!t.test,ci:0,solved:{},shown:{},tries:{},qi:0,qa:{},quiz:a?'intro':'done'};
  const view=$('#topic-learning-view');
  const left=view.querySelector('.concept-panel'), right=view.querySelector('.practice-panel');
  $('#learning-breadcrumb').textContent=t.test?`Chapter ${ch} / Final Test`:`Chapter ${ch} / Topic ${idx+1}`;
  if(a&&t.test){
    const n=a.coding.length+a.quiz.length;
    left.innerHTML=`<h1 id="learning-topic-title">🏆 Chapter ${ch} Test</h1><h2>Test के नियम</h2><p>इस Test में पूरे Chapter के concepts से ${a.coding.length} coding प्रश्न और ${a.quiz.length} MCQ हैं। ये प्रश्न practice वाले प्रश्नों से अलग हैं।</p><p>Pass होने के लिए कुल ${n} में से कम से कम ${Math.ceil(n*0.6)} अंक चाहिए (60%)। Solution देखने पर उस coding प्रश्न का अंक नहीं मिलता।</p><p>Pass होने पर Chapter complete होगा और अगला Level खुलेगा। Fail होने पर आप Test दोबारा दे सकते हैं।</p><h2>इस Chapter के Topics</h2><ul>${chapterTopics[ch].filter(x=>!x.test).map(x=>`<li>${esc(x.title)}</li>`).join('')}</ul>`;
    right.innerHTML=`<h2>💻 Coding Section</h2><div id="v3-code"></div><h2>🧠 MCQ Section</h2><div id="v3-quiz"></div><button id="complete-topic-button" disabled></button>`;
    codeView(); quizView();
  }else if(a){
    left.innerHTML=`<h1 id="learning-topic-title">${esc(t.title)}</h1>`+a.concepts.map(c=>`<h2>${esc(c.h)}</h2><p>${esc(c.t)}</p>${c.englishDefinition?`<h3>English Definition</h3><p>${esc(c.englishDefinition)}</p>`:''}`+(c.c?`<h3>Coding Example</h3><pre>${esc(c.c)}</pre><h3>Expected Output</h3><pre>${esc(c.o||'')}</pre>`:'')).join('');
    right.innerHTML=`<h2>💻 Coding Practice</h2><div id="v3-code"></div><h2>🧠 Quiz</h2><div id="v3-quiz"></div><button id="complete-topic-button" disabled></button>`;
    codeView(); quizView();
  }else{
    left.innerHTML=`<h1 id="learning-topic-title">${esc(t.title)}</h1><h2>इसमें ये sub-topics हैं</h2><ul>${t.pending.subtopics.map(s=>`<li>${esc(s)}</li>`).join('')}</ul>`;
    right.innerHTML=`<h2>🛠️ Content तैयार हो रहा है</h2><p>इस ${t.test?'Test':'topic'} का content अगले update में जोड़ा जाएगा। तब तक आप आगे बढ़ सकते हैं।</p><button id="complete-topic-button"></button>`;
  }
  $('#complete-topic-button').onclick=complete; refresh();
  document.querySelectorAll('.view').forEach(v=>{v.style.display='none';v.classList.remove('active')});
  view.style.display='block'; view.classList.add('active'); window.scrollTo({top:0,behavior:'smooth'});
}
function codeDone(){return S.a?S.a.coding.filter((_,i)=>S.solved[i]||S.shown[i]).length:0}
function score(){const a=S.a;return Object.keys(S.solved).filter(k=>S.solved[k]).length+Object.keys(S.qa).filter(k=>S.qa[k]===a.quiz[k].a).length}
function passed(){const n=S.a.coding.length+S.a.quiz.length;return score()>=Math.ceil(n*0.6)}
function refresh(){
  const cb=$('#complete-topic-button'); if(!cb)return;
  const nc=S.a?S.a.coding.length:0, ok=!S.a||(codeDone()===nc&&S.quiz==='done');
  if(S.test&&S.a){
    const n=nc+S.a.quiz.length;
    cb.disabled=!ok;
    cb.textContent=!ok?`पहले सभी प्रश्न पूरे कीजिए (Coding ${codeDone()}/${nc})`:passed()?`🎉 Test पास! (${score()}/${n}) Chapter पूरा कीजिए →`:`Score ${score()}/${n}। Pass के लिए ${Math.ceil(n*0.6)} चाहिए — Test दोबारा दीजिए ↻`;
    return}
  cb.disabled=!ok&&!isTopicCompleted(S.ch,S.idx);
  cb.textContent=isTopicCompleted(S.ch,S.idx)?'Topic पूरा हो चुका है ✓':ok?'Complete Topic & Next →':`पहले Coding (${codeDone()}/${nc}) और Quiz पूरा कीजिए`;
}
function codeView(){
  const a=S.a.coding, q=a[S.ci], i=S.ci, host=$('#v3-code'), done=S.solved[i]||S.shown[i];
  host.innerHTML=`<p id="coding-question"><b>प्रश्न ${i+1} / ${a.length}</b> ${S.solved[i]?'✅':S.shown[i]?'👀':''}<br>${esc(q.q)}</p>
  <textarea id="python-code-editor" spellcheck="false"></textarea>
  <div class="editor-buttons"><button id="run-python-code">▶ Run Code</button><button id="v3-hint">💡 Hint</button><button id="v3-sol" ${done?'':'disabled'}>${done?'🔓 Solution':'🔒 Solution'}</button></div>
  <h3>Output</h3><pre id="python-code-output">आपका output यहाँ दिखाई देगा।</pre><div id="coding-feedback"></div>
  <div class="editor-buttons"><button id="v3-prev" ${i===0?'disabled':''}>← Previous</button><button id="v3-next" ${i===a.length-1?'disabled':''}>Next →</button></div>`;
  const ed=$('#python-code-editor'), fb=$('#coding-feedback'); ed.value=q.st||'# यहाँ अपना code लिखिए\n';
  const unlock=()=>{$('#v3-sol').disabled=false;$('#v3-sol').textContent='🔓 Solution'};
  $('#v3-hint').onclick=()=>fb.innerHTML=`<b>Hint:</b> ${esc(q.hint)}`;
  $('#v3-sol').onclick=()=>{fb.innerHTML=`<b>Detailed Solution:</b><p>${esc(q.detail||'पहले code को ऊपर से नीचे पढ़ें, syntax और data types जाँचें, फिर run करके expected output से मिलाएँ।')}</p><h4>Correct Code</h4><pre>${esc(q.sol)}</pre><h4>Expected Output</h4><pre>${esc(q.exp||'')}</pre>`;S.shown[i]=true;refresh()};
  $('#v3-prev').onclick=()=>{S.ci--;codeView()}; $('#v3-next').onclick=()=>{S.ci++;codeView()};
  $('#run-python-code').onclick=async()=>{
    const out=$('#python-code-output'); out.textContent='Running...';
    let res='',err=null; try{res=await runPy(ed.value,q.inp)}catch(e){err=String(e.message||e).split('\n').slice(-2).join('\n')}
    out.textContent=err?err:(res.trimEnd()||'(कोई output नहीं)');
    if(!err&&res.trim()===q.exp.trim()){S.solved[i]=true;fb.innerHTML=`<b>🎉 बिल्कुल सही!</b><br>Solution:<pre>${esc(q.sol)}</pre>`;unlock();refresh();return}
    S.tries[i]=(S.tries[i]||0)+1;
    if(S.tries[i]===1) fb.textContent='❌ Output सही नहीं है। Try again! (चाहें तो Hint देखिए)';
    else {fb.textContent='❌ इस बार भी सही नहीं हुआ। Solution unlock हो गया है।';unlock()}
  };
}
function quizView(){
  const host=$('#v3-quiz'), qs=S.a.quiz, nav=h=>`<div class="editor-buttons">${h}</div>`;
  if(S.quiz==='intro'){host.innerHTML=`<p>इस topic के concept से ${qs.length} MCQ प्रश्न हैं।</p>`+nav('<button id="v3-qs">Start Quiz</button>'+(S.test?'':'<button id="v3-qk">Skip Quiz</button>'));
    $('#v3-qs').onclick=()=>{S.quiz='run';quizView()}; if($('#v3-qk'))$('#v3-qk').onclick=()=>{S.quiz='done';quizView()};return}
  if(S.quiz==='done'){const n=Object.keys(S.qa).length,sc=Object.keys(S.qa).filter(k=>S.qa[k]===qs[k].a).length;
    host.innerHTML=n?`<p><b>Quiz पूरा हुआ! Score: ${sc} / ${qs.length}</b></p>`+nav('<button id="v3-qr">Review / दोबारा देखिए</button>'):'<p>Quiz skip किया गया।</p>'+nav('<button id="v3-qr">Quiz शुरू कीजिए</button>');
    $('#v3-qr').onclick=()=>{S.qi=0;S.quiz='run';quizView()};refresh();return}
  const q=qs[S.qi], ans=S.qa[S.qi], last=S.qi===qs.length-1;
  host.innerHTML=`<p id="objective-question"><b>प्रश्न ${S.qi+1} / ${qs.length}</b><br>${esc(q.q)}</p><div id="objective-options">${q.o.map((o,k)=>`<button class="objective-option ${ans!==undefined?(k===q.a?'correct':k===ans?'wrong':''):''}" data-k="${k}" ${ans!==undefined?'disabled':''}>${String.fromCharCode(65+k)}. ${esc(o)}</button>`).join('')}</div>
  <p id="objective-feedback">${ans===undefined?'':(ans===q.a?'✅ सही! ':'❌ गलत। ')+esc(q.w)}</p>`+nav(`<button id="v3-qp" ${S.qi===0?'disabled':''}>← Previous</button><button id="v3-qn">${last?'Finish ✔':'Next →'}</button>${S.test?'':'<button id="v3-qk2">Skip Quiz</button>'}`);
  host.querySelectorAll('[data-k]').forEach(b=>b.onclick=()=>{S.qa[S.qi]=Number(b.dataset.k);quizView()});
  $('#v3-qp').onclick=()=>{S.qi--;quizView()};
  $('#v3-qn').onclick=()=>{if(last){S.quiz='done'}else S.qi++;quizView()};
  if($('#v3-qk2'))$('#v3-qk2').onclick=()=>{S.quiz='done';quizView()};
}

// ---- 5. Level only rises when a chapter is completed ----
function complete(){
  const cb=$('#complete-topic-button'); if(cb.disabled)return;
  if(S.test&&S.a&&!passed()){openTopic(S.ch,S.idx);return}
  const key=`${S.ch}:${S.idx}`, first=!completedTopics.includes(key);
  if(first){completedTopics.push(key);localStorage.setItem('pq_completed_topics',JSON.stringify(completedTopics))}
  const topics=chapterTopics[S.ch], all=topics.every((_,i)=>completedTopics.includes(`${S.ch}:${i}`));
  if(first) state.xp+=20;               // topic XP: XP badhta hai, Level nahi
  if(all&&!chapterDone(S.ch)){state.completedChapters.push(S.ch);state.xp+=100;toast(`🏆 Chapter ${S.ch} पूरा हुआ! अब आप Level ${level()} पर हैं।`)}
  saveState();
  if(S.idx<topics.length-1&&!all){openTopic(S.ch,S.idx+1)}else{renderChapterTopicMap();showQuestPage('chapter-map-view')}
}
window.level=function(){return (state.completedChapters||[]).length+1};
level=window.level;
// Mini Games ka apna level: sirf mini-game XP se
function miniXP(){return (state.quizWon?10:0)+(state.bugWon?10:0)+(state.builderWon?10:0)+(state.arcadeXP||0)}
const baseRenderAll=renderAll;
renderAll=function(){baseRenderAll();
  const lt=$('#level-title'); if(lt)lt.textContent=`Mini Game Level ${Math.floor(miniXP()/100)+1}`;
  const ax=$('#arcade-xp'); if(ax)ax.textContent=miniXP();
};

// ---- Chapters 2-28 ab Adventure Map se khulte hain ----
const baseMap=renderChapterTopicMap;
renderChapterTopicMap=function(){baseMap();
  const cards=document.querySelectorAll('#topic-adventure-map .topic-card'),c=cards[cards.length-1]; if(!c)return;
  c.querySelector('h3').textContent=`🏆 Chapter ${currentChapterId} Test`;
  const b=c.querySelector('button'); if(b&&!b.disabled)b.textContent=isTopicCompleted(currentChapterId,chapterTopics[currentChapterId].length-1)?'Test दोबारा देखिए':'Start Test →';
  const p=c.querySelector('p'); if(p&&!/Completed/.test(p.textContent))p.textContent=b&&b.disabled?'सभी Topics पूरे करने पर Test खुलेगा':'पूरे Chapter का Test · पास होने पर Chapter complete';
};
showChapterPreview=function(id){
  currentChapterId=id; openChapterTopicMap(id);
  document.querySelectorAll('.view').forEach(v=>{v.style.display='none';v.classList.remove('active')});
  const m=$('#chapter-map-view'); m.style.display='block'; m.classList.add('active');
};
window.openTopicLearningPage=openTopic; openTopicLearningPage=openTopic;
completeCurrentTopic=complete;
renderAll();
})();

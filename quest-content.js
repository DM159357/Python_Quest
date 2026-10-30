/* Python Quest - authored topic content (Hindi + English). Format per topic:
   {title, concepts:[{h,t,c,o}], coding:[{q,hint,sol,exp,st?}], quiz:[{q,o,a,w}]} ; st = starter code (bug-fix) */
window.PQ_CONTENT = {
1: [
{title:"What is Python?",
 concepts:[
  {h:"Python क्या है?",t:"Python एक high-level, interpreted और पढ़ने में आसान programming language है। इसे Guido van Rossum ने बनाया और यह 1991 में release हुई।"},
  {h:"Python कहाँ इस्तेमाल होता है?",t:"Web Development, Data Science, AI/Machine Learning, Automation और Games बनाने में Python का इस्तेमाल होता है।"},
  {h:"print() का पहला परिचय",t:"print() screen पर output दिखाता है। Text को quotes के अंदर लिखते हैं और number को बिना quotes के।",c:'print("Hello Python")\nprint(1991)',o:"Hello Python\n1991"}],
 coding:[
  {q:"Screen पर Hello Python print कीजिए।",hint:"print() के अंदर text को quotes में लिखिए।",sol:'print("Hello Python")',exp:"Hello Python"},
  {q:"I am learning Python print कीजिए।",hint:"पूरा sentence एक ही quotes के अंदर रखिए।",sol:'print("I am learning Python")',exp:"I am learning Python"},
  {q:"दो अलग lines में पहले Python और फिर Guido print कीजिए।",hint:"दो print() statements चाहिए।",sol:'print("Python")\nprint("Guido")',exp:"Python\nGuido"},
  {q:"Number 1991 print कीजिए (quotes के बिना)।",hint:"Number को quotes की ज़रूरत नहीं होती।",sol:"print(1991)",exp:"1991"},
  {q:"Web Development print कीजिए।",hint:"यह text है, इसलिए quotes लगाइए।",sol:'print("Web Development")',exp:"Web Development"}],
 quiz:[
  {q:"Python को किसने बनाया?",o:["Guido van Rossum","Elon Musk","Bill Gates","Dennis Ritchie"],a:0,w:"Python के creator Guido van Rossum हैं।"},
  {q:"Python किस प्रकार की language है?",o:["सिर्फ़ hardware language","High-level interpreted language","सिर्फ़ database language","Image editing tool"],a:1,w:"Python एक high-level और interpreted language है।"},
  {q:"नीचे में से किस काम में Python इस्तेमाल होता है?",o:["Data Science","Automation","Web Development","ऊपर के सभी"],a:3,w:"Python एक general-purpose language है और इन सभी कामों में इस्तेमाल होती है।"},
  {q:"Screen पर text दिखाने के लिए कौन-सा function इस्तेमाल होता है?",o:["show()","print()","write()","echo()"],a:1,w:"Python में output दिखाने के लिए print() इस्तेमाल होता है।"},
  {q:"Python कब release हुई थी?",o:["1975","1991","2010","2020"],a:1,w:"Python 1991 में release हुई थी।"}]},
{title:"Python Interpreter & Interactive Shell",
 concepts:[
  {h:"Interpreter क्या करता है?",t:"Interpreter आपके Python code को line-by-line पढ़कर मशीन के समझने लायक instruction में बदलता है और तुरंत चलाता है।"},
  {h:"Interactive Shell",t:"Shell में prompt >>> दिखता है। यहाँ एक line लिखकर Enter दबाते ही result मिल जाता है। सीखने और code test करने के लिए यह बहुत उपयोगी है।"},
  {h:"print() में calculation",t:"print() के अंदर calculation लिखने पर Python पहले result निकालता है, फिर उसे दिखाता है।",c:"print(10 + 5)\nprint(6 * 2)",o:"15\n12"}],
 coding:[
  {q:"10 + 5 का result print कीजिए।",hint:"print() के अंदर सीधे 10 + 5 लिखिए (quotes के बिना)।",sol:"print(10 + 5)",exp:"15"},
  {q:"7 * 3 का result print कीजिए।",hint:"Multiplication के लिए * इस्तेमाल होता है।",sol:"print(7 * 3)",exp:"21"},
  {q:"20 - 8 का result print कीजिए।",hint:"Subtraction के लिए - चिह्न इस्तेमाल कीजिए।",sol:"print(20 - 8)",exp:"12"},
  {q:"Interpreter शब्द print कीजिए।",hint:"यह text है, इसलिए quotes ज़रूरी हैं।",sol:'print("Interpreter")',exp:"Interpreter"},
  {q:"Line 1 और Line 2 को दो अलग lines में print कीजिए।",hint:"दो print() statements लिखिए।",sol:'print("Line 1")\nprint("Line 2")',exp:"Line 1\nLine 2"}],
 quiz:[
  {q:"Interpreter code को कैसे चलाता है?",o:["Line-by-line","सब एक साथ random तरीके से","सिर्फ़ compile करके file बनाता है","कभी नहीं चलाता"],a:0,w:"Interpreter code को line-by-line execute करता है।"},
  {q:"Python Interactive Shell का prompt क्या होता है?",o:[">>>","###","$$$","<<<"],a:0,w:"Python shell में prompt >>> होता है।"},
  {q:"print(4 + 3) का output क्या होगा?",o:["4 + 3","7","43","Error"],a:1,w:"Python पहले 4 + 3 = 7 निकालता है, फिर print करता है।"},
  {q:"Shell का सबसे बड़ा फ़ायदा क्या है?",o:["Code तुरंत test हो जाता है","Code save नहीं होता","सिर्फ़ games के लिए है","Internet ज़रूरी है"],a:0,w:"Shell में code का result तुरंत मिल जाता है।"},
  {q:"print(5 * 2) का output क्या होगा?",o:["52","10","5 * 2","7"],a:1,w:"5 * 2 = 10।"}]},
{title:"Your First Python Program",
 concepts:[
  {h:"Hello, World!",t:"हर programmer का पहला program Hello, World! print करना होता है।",c:'print("Hello, World!")',o:"Hello, World!"},
  {h:"Quotes और Case-sensitivity",t:"Text के लिए single quotes और double quotes दोनों चलते हैं। Python case-sensitive है, यानी print सही है और Print गलत।"},
  {h:"Comma से कई values",t:"print() में comma लगाने पर values के बीच अपने-आप एक space आ जाता है।",c:'print("Python", "is", "fun")',o:"Python is fun"}],
 coding:[
  {q:"Hello, World! print कीजिए (comma और exclamation के साथ)।",hint:'Text है: "Hello, World!"',sol:'print("Hello, World!")',exp:"Hello, World!"},
  {q:"Single quotes इस्तेमाल करके Welcome to Python Quest print कीजिए।",hint:"print('...') भी सही तरीका है।",sol:"print('Welcome to Python Quest')",exp:"Welcome to Python Quest"},
  {q:"अपना नाम Deepak print कीजिए।",hint:"नाम text है, इसलिए quotes लगाइए।",sol:'print("Deepak")',exp:"Deepak"},
  {q:"Comma इस्तेमाल करके Python is fun print कीजिए (तीन अलग values)।",hint:'print("Python", "is", "fun") के जैसा सोचिए।',sol:'print("Python", "is", "fun")',exp:"Python is fun"},
  {q:"तीन lines print कीजिए: One, Two, Three।",hint:"तीन print() statements चाहिए।",sol:'print("One")\nprint("Two")\nprint("Three")',exp:"One\nTwo\nThree"}],
 quiz:[
  {q:"नीचे में से सही print statement कौन-सा है?",o:['Print("Hi")','print("Hi")','PRINT("Hi")','print Hi'],a:1,w:"Python case-sensitive है, इसलिए छोटे अक्षरों वाला print सही है।"},
  {q:'print("A", "B") का output क्या होगा?',o:["AB","A B","A,B","Error"],a:1,w:"Comma के कारण values के बीच space आता है।"},
  {q:"Text को किसके अंदर लिखा जाता है?",o:["Quotes","Brackets []","Hash #","किसी के नहीं"],a:0,w:"Text हमेशा quotes के अंदर लिखा जाता है।"},
  {q:"Hello, World! program किसलिए प्रसिद्ध है?",o:["पहला program","आखिरी program","Virus","Game"],a:0,w:"यह हर beginner का पहला program होता है।"},
  {q:"Python file का extension क्या होता है?",o:[".py",".pt",".java",".txt"],a:0,w:"Python files .py extension से save होती हैं।"}]},
{title:"How Python Code Executes",
 concepts:[
  {h:"ऊपर से नीचे",t:"Python code को ऊपर से नीचे, एक-एक line करके चलाता है। जो line पहले लिखी है, वह पहले चलेगी।"},
  {h:"Error आने पर",t:"अगर किसी line में गलती (जैसे SyntaxError) हो, तो Python वहीं रुककर error message दिखाता है।"},
  {h:"Output का क्रम",t:"Output का क्रम code के क्रम जैसा ही होता है।",c:'print("Start")\nprint("End")',o:"Start\nEnd"},
  {h:"Text और calculation साथ में",t:"Comma की मदद से text और calculation एक ही print में दिखा सकते हैं।",c:'print("Total:", 4 + 6)',o:"Total: 10"}],
 coding:[
  {q:"Start, Middle, End तीन lines में print कीजिए।",hint:"क्रम वही रखिए जो लिखा है।",sol:'print("Start")\nprint("Middle")\nprint("End")',exp:"Start\nMiddle\nEnd"},
  {q:"Numbers 1, 2, 3 अलग-अलग lines में print कीजिए।",hint:"तीन print() लिखिए, number बिना quotes के।",sol:"print(1)\nprint(2)\nprint(3)",exp:"1\n2\n3"},
  {q:"पहले A, फिर 5 + 5 का result, फिर B print कीजिए।",hint:"बीच वाली line में calculation है।",sol:'print("A")\nprint(5 + 5)\nprint("B")',exp:"A\n10\nB"},
  {q:"4 + 6 की calculation से Total: 10 print कीजिए।",hint:'print("Total:", 4 + 6)',sol:'print("Total:", 4 + 6)',exp:"Total: 10"},
  {q:"Step 1: Write code और Step 2: Run code दो lines में print कीजिए।",hint:"दो print() चाहिए।",sol:'print("Step 1: Write code")\nprint("Step 2: Run code")',exp:"Step 1: Write code\nStep 2: Run code"}],
 quiz:[
  {q:"Python code किस क्रम में चलता है?",o:["ऊपर से नीचे","नीचे से ऊपर","Random","सिर्फ़ आखिरी line"],a:0,w:"Python ऊपर से नीचे, line-by-line चलता है।"},
  {q:'इस code का output क्या होगा? print("X")\nprint("Y")',o:["X और Y अलग lines में","Y और X","XY एक line में","Error"],a:0,w:"दोनों print() अलग lines में output देते हैं।"},
  {q:"Code में गलती हो तो Python क्या करता है?",o:["Error message दिखाता है","गलती छिपा देता है","Computer बंद कर देता है","कुछ नहीं करता"],a:0,w:"Python error message दिखाकर रुक जाता है।"},
  {q:'print("Sum:", 2 + 3) का output क्या होगा?',o:["Sum: 5","Sum: 2 + 3","Sum:5","5"],a:0,w:"Calculation के बाद value, text के साथ space देकर दिखती है।"},
  {q:"SyntaxError का मतलब क्या है?",o:["लिखने के नियम में गलती","Computer खराब है","Internet बंद है","Python install नहीं है"],a:0,w:"SyntaxError code लिखने के नियम टूटने पर आता है।"}]},
{title:"Program Structure & Comments",
 concepts:[
  {h:"Comments (#)",t:"# से शुरू होने वाली line comment होती है। Python उसे चलाता नहीं; वह इंसानों के समझने के लिए होती है।",c:'# यह comment है\nprint("Hi")',o:"Hi"},
  {h:"Program की बनावट",t:"छोटे program में statements एक के नीचे एक लिखते हैं। हर statement अपनी line में होता है और comments code को समझाने में मदद करते हैं।"},
  {h:"Quotes के अंदर #",t:"अगर # quotes के अंदर हो, तो वह text का हिस्सा है, comment नहीं।",c:'print("# comment का चिह्न है")',o:"# comment का चिह्न है"}],
 coding:[
  {q:"एक comment लिखिए और उसके नीचे Python Structure print कीजिए।",hint:"Comment # से शुरू होता है।",sol:'# print करते हैं\nprint("Python Structure")',exp:"Python Structure"},
  {q:"Comment के साथ Hello print कीजिए; comment output में नहीं दिखना चाहिए।",hint:"# वाली line को Python ignore करता है।",sol:'# greeting\nprint("Hello")',exp:"Hello"},
  {q:"तीन print lines लिखिए (Plan, Code, Run), बीच में comments के साथ।",hint:"हर print के बीच # comment रख सकते हैं।",sol:'# step 1\nprint("Plan")\n# step 2\nprint("Code")\n# step 3\nprint("Run")',exp:"Plan\nCode\nRun"},
  {q:"# comment का चिह्न है print कीजिए (# output में दिखना चाहिए)।",hint:"# को quotes के अंदर लिखिए।",sol:'print("# comment का चिह्न है")',exp:"# comment का चिह्न है"},
  {q:"Comment लिखकर print(2 + 3) चलाइए।",hint:"Comment अलग line में और print उसके नीचे।",sol:"# जोड़\nprint(2 + 3)",exp:"5"}],
 quiz:[
  {q:"Python में comment किससे शुरू होता है?",o:["#","//","<!--","**"],a:0,w:"Python में comment # से शुरू होता है।"},
  {q:"Comment का काम क्या है?",o:["Code को समझाना","Code को चलाना","Error लाना","Internet जोड़ना"],a:0,w:"Comment सिर्फ़ code समझाने के लिए होता है।"},
  {q:'print("# hi") का output क्या होगा?',o:["# hi","hi","कुछ नहीं","Error"],a:0,w:"Quotes के अंदर # text है, इसलिए वह print होता है।"},
  {q:"क्या Python comment वाली line को चलाता है?",o:["नहीं","हाँ","कभी-कभी","सिर्फ़ shell में"],a:0,w:"Comment को Python ignore करता है।"},
  {q:"कौन-सा program comment सही तरीके से इस्तेमाल करता है?",o:['# hi\nprint("A")','// hi\nprint("A")','** hi\nprint("A")','hi #\nprint A'],a:0,w:"सही comment # से शुरू होता है।"}]}
],
2: [
{title:"Syntax Rules, Statements & Expressions",
 concepts:[
  {h:"Syntax क्या है?",t:"Syntax का मतलब है code लिखने के नियम। नियम टूटने पर Python SyntaxError देता है। Python case-sensitive है, यानी print और Print अलग माने जाते हैं।"},
  {h:"Statement",t:"Statement एक पूरा instruction होता है, जैसे print(\"Hi\") या x = 5। Python हर statement को चलाता है।"},
  {h:"Expression",t:"Expression ऐसा हिस्सा है जिससे एक value बनती है, जैसे 2 + 3। Brackets से calculation का क्रम बदल सकते हैं।",c:"print(2 + 3 * 4)\nprint((2 + 3) * 4)",o:"14\n20"}],
 coding:[
  {q:"2 + 3 * 4 का result print कीजिए।",hint:"Multiplication पहले होता है, फिर addition।",sol:"print(2 + 3 * 4)",exp:"14"},
  {q:"x = 5 statement लिखकर print(x * 2) कीजिए।",hint:"पहले x = 5 लिखिए, फिर नीचे print।",sol:"x = 5\nprint(x * 2)",exp:"10"},
  {q:"10 - 4 का result print कीजिए।",hint:"print() के अंदर expression लिखिए।",sol:"print(10 - 4)",exp:"6"},
  {q:"Syntax शब्द print कीजिए।",hint:"Text को quotes में रखिए।",sol:'print("Syntax")',exp:"Syntax"},
  {q:"Brackets इस्तेमाल करके (2 + 3) * 4 का result print कीजिए।",hint:"पहले bracket के अंदर की calculation होती है।",sol:"print((2 + 3) * 4)",exp:"20"}],
 quiz:[
  {q:"Syntax का क्या मतलब है?",o:["Code लिखने के नियम","Computer का हिस्सा","Python का version","Output का रंग"],a:0,w:"Syntax code लिखने के नियमों को कहते हैं।"},
  {q:"Python में print और Print क्या हैं?",o:["दोनों एक ही","अलग-अलग","दोनों गलत","दोनों सही"],a:1,w:"Python case-sensitive है, इसलिए print और Print अलग हैं।"},
  {q:"इनमें से कौन-सा statement है?",o:["x = 5","सिर्फ़ 5","सिर्फ़ +","सिर्फ़ )"],a:0,w:"x = 5 एक पूरा instruction है, इसलिए वह statement है।"},
  {q:"print(2 + 3 * 4) का output क्या होगा?",o:["20","14","24","9"],a:1,w:"पहले 3 * 4 = 12 होता है, फिर 2 + 12 = 14।"},
  {q:"Calculation का क्रम बदलने के लिए क्या इस्तेमाल करते हैं?",o:["Brackets ()","Comment #","Quotes","कुछ नहीं"],a:0,w:"Brackets के अंदर की calculation पहले होती है।"}]},
{title:"Indentation",
 concepts:[
  {h:"Indentation क्या है?",t:"Line के शुरू में छोड़ी गई खाली जगह को indentation कहते हैं। Python में यह code के block को बताती है, जैसे if के अंदर क्या चलेगा। सामान्यतः 4 spaces इस्तेमाल होते हैं।"},
  {h:"if के साथ उदाहरण",t:"if की शर्त सही हो तो उसके अंदर indent किया हुआ code चलता है। if की line के अंत में colon (:) लगता है।",c:'if 5 > 3:\n    print("Yes")',o:"Yes"},
  {h:"Indentation की गलती",t:"Block के अंदर की line indent न हो तो IndentationError आता है।"}],
 coding:[
  {q:'if True: लिखकर उसके अंदर print("Indent") कीजिए।',hint:"print वाली line के आगे 4 spaces छोड़िए।",sol:'if True:\n    print("Indent")',exp:"Indent"},
  {q:'अगर 5 > 3 हो तो Yes print कीजिए।',hint:"if 5 > 3: के बाद अगली line indent कीजिए।",sol:'if 5 > 3:\n    print("Yes")',exp:"Yes"},
  {q:"नीचे के code की indentation ठीक कीजिए ताकि OK print हो।",hint:"print वाली line के आगे 4 spaces लगाइए।",st:'if True:\nprint("OK")',sol:'if True:\n    print("OK")',exp:"OK"},
  {q:'if 2 < 1: के अंदर A print कीजिए और block के बाहर B print कीजिए। सिर्फ़ B दिखना चाहिए।',hint:"B वाली print line indent नहीं होगी।",sol:'if 2 < 1:\n    print("A")\nprint("B")',exp:"B"},
  {q:"if 3 == 3: के अंदर दो lines X और Y print कीजिए।",hint:"दोनों print lines के आगे बराबर spaces होने चाहिए।",sol:'if 3 == 3:\n    print("X")\n    print("Y")',exp:"X\nY"}],
 quiz:[
  {q:"Python में block बताने के लिए क्या इस्तेमाल होता है?",o:["Indentation","Semicolon","Comment","Quotes"],a:0,w:"Python में indentation से block पहचाना जाता है।"},
  {q:"सामान्यतः indentation के लिए कितने spaces लिए जाते हैं?",o:["1","4","10","0"],a:1,w:"Python की सामान्य शैली में 4 spaces लिए जाते हैं।"},
  {q:"if की line के अंत में क्या लगता है?",o:["Colon (:)","Comma (,)","Hash (#)","कुछ नहीं"],a:0,w:"if की शर्त के बाद colon (:) लगाना ज़रूरी है।"},
  {q:"Indent न करने पर कौन-सा error आता है?",o:["IndentationError","NameError","ZeroDivisionError","FileError"],a:0,w:"Block के अंदर indent न हो तो IndentationError आता है।"},
  {q:'अगर 2 < 1 गलत हो, तो if के अंदर वाला print क्या करेगा?',o:["चलेगा","नहीं चलेगा","Error देगा","दो बार चलेगा"],a:1,w:"शर्त गलत होने पर if के अंदर का code नहीं चलता।"}]},
{title:"Comments & Documentation",
 concepts:[
  {h:"Single-line comment",t:"# से शुरू होने वाली line या line का बचा हुआ हिस्सा comment होता है। Code के साथ भी comment लिख सकते हैं।",c:'print("Done")  # यह comment है',o:"Done"},
  {h:"Multi-line documentation",t:"कई lines की जानकारी लिखने के लिए triple quotes (\"\"\" ... \"\"\") इस्तेमाल होते हैं। अकेले लिखे जाने पर इन्हें Python output में नहीं दिखाता।",c:'"""\nयह program का परिचय है\n"""\nprint("Doc")',o:"Doc"},
  {h:"Code को बंद करना",t:"किसी line के आगे # लगाने पर वह line चलना बंद हो जाती है।"}],
 coding:[
  {q:"Comment लिखकर Comment ignore होता है print कीजिए।",hint:"Comment # से शुरू होता है, उसे print नहीं करना है।",sol:'# यह ignore होगा\nprint("Comment ignore होता है")',exp:"Comment ignore होता है"},
  {q:"तीन lines के # comments लिखकर print(7) कीजिए।",hint:"हर comment line # से शुरू होगी।",sol:'# line 1\n# line 2\n# line 3\nprint(7)',exp:"7"},
  {q:'Triple quotes में documentation लिखकर print("Doc") कीजिए।',hint:'"""  और """ के बीच कुछ भी लिख सकते हैं।',sol:'"""\nडॉक्यूमेंटेशन\n"""\nprint("Doc")',exp:"Doc"},
  {q:'print("Done") के साथ उसी line में comment लिखिए।',hint:"print के बाद # लगाकर comment लिखिए।",sol:'print("Done")  # finished',exp:"Done"},
  {q:'print("Hidden") को comment करके print("Visible") चलाइए।',hint:"Hidden वाली line के आगे # लगाइए।",sol:'# print("Hidden")\nprint("Visible")',exp:"Visible"}],
 quiz:[
  {q:"Single-line comment किससे शुरू होता है?",o:["#",'"""',"//","--"],a:0,w:"Single-line comment # से शुरू होता है।"},
  {q:"Multi-line documentation के लिए क्या इस्तेमाल होता है?",o:["Triple quotes","सिर्फ़ #","Brackets","Colon"],a:0,w:'Triple quotes (""" """) से कई lines की जानकारी लिखी जाती है।'},
  {q:"किसी line के आगे # लगाने से क्या होता है?",o:["वह line नहीं चलती","वह दो बार चलती है","Error आता है","Output बदल जाता है"],a:0,w:"# के बाद का हिस्सा Python ignore करता है।"},
  {q:'print("Hi")  # hello का output क्या होगा?',o:["Hi","hello","Hi hello","Error"],a:0,w:"Comment output में नहीं आता।"},
  {q:"Documentation का मुख्य उद्देश्य क्या है?",o:["Code को समझाना","Code तेज़ करना","Error बनाना","File delete करना"],a:0,w:"Documentation code को दूसरों के लिए समझने योग्य बनाता है।"}]},
{title:"Syntax Errors",
 concepts:[
  {h:"Syntax Error क्या है?",t:"Code लिखने के नियम टूटने पर Python चलने से पहले ही SyntaxError दिखा देता है। Program तब तक नहीं चलता जब तक गलती ठीक न हो।"},
  {h:"आम गलतियाँ",t:"Bracket या quote बंद न करना, print को Print लिखना, if के बाद colon भूल जाना, और print को बिना bracket के लिखना सबसे आम syntax errors हैं।",c:'print("Hello")',o:"Hello"},
  {h:"Error ठीक करना",t:"गलत code में पहले error वाली line खोजिए, फिर सही syntax से उसे बदलिए।"}],
 coding:[
  {q:"Code ठीक कीजिए ताकि Hello print हो।",hint:"Bracket बंद नहीं है।",st:'print("Hello"',sol:'print("Hello")',exp:"Hello"},
  {q:"Code ठीक कीजिए ताकि Hi print हो।",hint:"Quote बंद नहीं है।",st:'print("Hi)',sol:'print("Hi")',exp:"Hi"},
  {q:"Code ठीक कीजिए ताकि Python print हो।",hint:"Python case-sensitive है।",st:'Print("Python")',sol:'print("Python")',exp:"Python"},
  {q:"Code ठीक कीजिए ताकि Yes print हो।",hint:"if की line के अंत में colon लगाइए।",st:'if 4 > 2\n    print("Yes")',sol:'if 4 > 2:\n    print("Yes")',exp:"Yes"},
  {q:"Code ठीक कीजिए ताकि Hello print हो।",hint:"print में brackets चाहिए।",st:'print "Hello"',sol:'print("Hello")',exp:"Hello"}],
 quiz:[
  {q:'print("Hi" में क्या गलती है?',o:["Bracket बंद नहीं है","Quote गलत है","print गलत है","कोई गलती नहीं"],a:0,w:"Closing bracket ) छूटा हुआ है।"},
  {q:"SyntaxError कब आता है?",o:["लिखने के नियम टूटने पर","Internet बंद होने पर","Computer restart पर","Output सही आने पर"],a:0,w:"Syntax के नियम टूटने पर SyntaxError आता है।"},
  {q:"if 3 > 2 के बाद क्या छूटा है?",o:["Colon (:)","Comma","Quote","Hash"],a:0,w:"if की शर्त के अंत में colon ज़रूरी है।"},
  {q:"Print(\"A\") क्यों गलत है?",o:["Python case-sensitive है","Quotes गलत हैं","A गलत है","Bracket गलत है"],a:0,w:"सही function print है, Print नहीं।"},
  {q:"SyntaxError होने पर program का क्या होता है?",o:["चलता नहीं है","पूरा चलता है","आधा चलता है","Automatic ठीक हो जाता है"],a:0,w:"Syntax ठीक होने तक program नहीं चलता।"}]},
{title:"Reading Error Messages",
 concepts:[
  {h:"Error message के हिस्से",t:"Python का error message बताता है कि गलती किस line में है और किस प्रकार की है। सबसे नीचे वाली line में error का नाम और कारण लिखा होता है।"},
  {h:"आम Errors",t:"NameError: जो नाम बना ही नहीं उसे इस्तेमाल करना। TypeError: text और number को + से जोड़ना। ZeroDivisionError: किसी number को 0 से भाग देना। IndentationError: indentation गलत होना।"},
  {h:"Division",t:"/ चिह्न से भाग देने पर result decimal (float) में आता है।",c:"print(10 / 5)",o:"2.0"}],
 coding:[
  {q:"NameError ठीक कीजिए: score को 90 देकर print कीजिए।",hint:"print से पहले score = 90 लिखिए।",st:'print(score)',sol:'score = 90\nprint(score)',exp:"90"},
  {q:"ZeroDivisionError ठीक कीजिए ताकि 10 / 5 का result print हो।",hint:"0 की जगह 5 से भाग दीजिए।",st:'print(10 / 0)',sol:'print(10 / 5)',exp:"2.0"},
  {q:"TypeError ठीक कीजिए ताकि Age: 20 print हो।",hint:"+ की जगह comma इस्तेमाल कीजिए।",st:'print("Age: " + 20)',sol:'print("Age:", 20)',exp:"Age: 20"},
  {q:"IndentationError ठीक कीजिए ताकि ok print हो।",hint:"print वाली line indent कीजिए।",st:'if True:\nprint("ok")',sol:'if True:\n    print("ok")',exp:"ok"},
  {q:"NameError ठीक कीजिए ताकि शब्द hello print हो।",hint:"Text को quotes में लिखिए।",st:'print(hello)',sol:'print("hello")',exp:"hello"}],
 quiz:[
  {q:"Error का नाम error message में कहाँ लिखा होता है?",o:["सबसे नीचे वाली line में","सबसे ऊपर","कहीं नहीं","सिर्फ़ file में"],a:0,w:"Error का नाम और कारण सबसे नीचे वाली line में मिलता है।"},
  {q:"print(score) बिना score बनाए चलाने पर कौन-सा error आता है?",o:["NameError","TypeError","SyntaxError","ValueError"],a:0,w:"जो नाम बना ही नहीं, उसे इस्तेमाल करने पर NameError आता है।"},
  {q:"10 / 0 करने पर कौन-सा error आता है?",o:["ZeroDivisionError","NameError","IndentationError","TypeError"],a:0,w:"0 से भाग देने पर ZeroDivisionError आता है।"},
  {q:'"Age: " + 20 में कौन-सा error आता है?',o:["TypeError","NameError","ZeroDivisionError","कोई नहीं"],a:0,w:"Text और number को सीधे + से नहीं जोड़ सकते, इसलिए TypeError आता है।"},
  {q:"print(10 / 5) का output क्या होगा?",o:["2","2.0","5","10"],a:1,w:"/ चिह्न का result float में आता है, यानी 2.0।"}]}
],
3: [
{title:"What is a Variable?",
 concepts:[
  {h:"Variable क्या है?",t:"Variable एक नाम है जो memory में रखी value को याद रखता है। इसे डिब्बे पर लगे label की तरह समझ सकते हैं।"},
  {h:"Variable बनाना",t:"Variable बनाने के लिए नाम, बराबर का चिह्न (=) और value लिखते हैं। Variable को print() में बिना quotes के लिखते हैं।",c:'age = 20\nname = "Deepak"\nprint(age)\nprint("Name:", name)',o:"20\nName: Deepak"}],
 coding:[
  {q:"age नाम का variable बनाकर उसमें 20 रखिए और print कीजिए।",hint:"age = 20 लिखकर print(age) कीजिए।",sol:"age = 20\nprint(age)",exp:"20"},
  {q:'name नाम के variable में "Python" रखकर print कीजिए।',hint:"Text के लिए quotes ज़रूरी हैं।",sol:'name = "Python"\nprint(name)',exp:"Python"},
  {q:"x = 5 और y = 7 बनाकर उनका जोड़ print कीजिए।",hint:"print(x + y) लिखिए।",sol:"x = 5\ny = 7\nprint(x + y)",exp:"12"},
  {q:'city = "Patna" बनाकर City: Patna print कीजिए।',hint:'print("City:", city)',sol:'city = "Patna"\nprint("City:", city)',exp:"City: Patna"},
  {q:"price = 50 और qty = 3 से कुल क़ीमत print कीजिए।",hint:"दोनों variables को गुणा कीजिए।",sol:"price = 50\nqty = 3\nprint(price * qty)",exp:"150"}],
 quiz:[
  {q:"Variable क्या होता है?",o:["Value को याद रखने वाला नाम","एक error","एक comment","एक file"],a:0,w:"Variable एक नाम है जो value को store करके रखता है।"},
  {q:"Variable में value डालने के लिए कौन-सा चिह्न इस्तेमाल होता है?",o:["=","#","?","@"],a:0,w:"बराबर का चिह्न (=) value assign करता है।"},
  {q:'name = "Ravi" के बाद print(name) का output क्या होगा?',o:["name","Ravi","\"Ravi\"","Error"],a:1,w:"print(name) variable के अंदर की value दिखाता है।"},
  {q:"x = 4 और y = 6 के बाद print(x + y) का output क्या होगा?",o:["46","10","x + y","Error"],a:1,w:"x + y = 4 + 6 = 10।"},
  {q:"Variable को print करते समय quotes लगाने से क्या होता है?",o:["Variable का नाम text की तरह दिखता है","Value दिखती है","Error आता है","कुछ नहीं होता"],a:0,w:'print("name") में name सिर्फ़ text है, variable की value नहीं।'}]},
{title:"Assigning & Reassigning Values",
 concepts:[
  {h:"Value बदलना",t:"Variable में नई value डालने पर पुरानी value हट जाती है और नई value रह जाती है।",c:"score = 10\nscore = 25\nprint(score)",o:"25"},
  {h:"पुरानी value से नई value",t:"Variable की पुरानी value इस्तेमाल करके उसे update कर सकते हैं।",c:"count = 1\ncount = count + 1\nprint(count)",o:"2"}],
 coding:[
  {q:"score = 10 लिखिए, फिर उसे 25 कीजिए और print कीजिए।",hint:"दूसरी बार वही नाम लिखकर नई value दीजिए।",sol:"score = 10\nscore = 25\nprint(score)",exp:"25"},
  {q:"count = 1 से शुरू करके उसमें 1 जोड़िए और print कीजिए।",hint:"count = count + 1",sol:"count = 1\ncount = count + 1\nprint(count)",exp:"2"},
  {q:"a = 5 को दोगुना कीजिए और print कीजिए।",hint:"a = a * 2",sol:"a = 5\na = a * 2\nprint(a)",exp:"10"},
  {q:"x = 3 print कीजिए, फिर x = 9 करके दोबारा print कीजिए।",hint:"दो print() चाहिए, दोनों के बीच value बदलिए।",sol:"x = 3\nprint(x)\nx = 9\nprint(x)",exp:"3\n9"},
  {q:"total = 100 में से 30 घटाकर print कीजिए।",hint:"total = total - 30",sol:"total = 100\ntotal = total - 30\nprint(total)",exp:"70"}],
 quiz:[
  {q:"x = 5 के बाद x = 8 लिखने पर x में क्या रहेगा?",o:["5","8","13","Error"],a:1,w:"नई value पुरानी value को बदल देती है।"},
  {q:"count = 1 के बाद count = count + 1 से count कितना होगा?",o:["1","2","11","Error"],a:1,w:"पुरानी value 1 में 1 जुड़कर 2 बनता है।"},
  {q:"a = 4 के बाद a = a * 3 से a कितना होगा?",o:["7","12","43","1"],a:1,w:"4 * 3 = 12।"},
  {q:"Variable की value बदलना क्या कहलाता है?",o:["Reassignment","Deleting","Printing","Commenting"],a:0,w:"Variable में नई value डालना reassignment कहलाता है।"},
  {q:"x = 3, print(x), x = 9, print(x) का output क्या होगा?",o:["3 और 9 अलग lines में","9 और 3","सिर्फ़ 9","Error"],a:0,w:"पहले print के समय x = 3 था और दूसरे के समय 9।"}]},
{title:"Variable Naming Rules",
 concepts:[
  {h:"नाम के नियम",t:"Variable का नाम अक्षर या underscore (_) से शुरू होना चाहिए। उसमें अक्षर, अंक और underscore हो सकते हैं। नाम अंक से शुरू नहीं हो सकता, उसमें space नहीं हो सकता, और Python के keywords (जैसे if, for, while) variable का नाम नहीं बन सकते।"},
  {h:"Case-sensitive",t:"Age और age दो अलग variables हैं।",c:"Age = 1\nage = 2\nprint(Age, age)",o:"1 2"},
  {h:"अच्छे नाम",t:"नाम पढ़ने में स्पष्ट होना चाहिए। कई शब्दों के लिए underscore इस्तेमाल करते हैं, जैसे student_name।"}],
 coding:[
  {q:'student_name में "Amit" रखकर print कीजिए।',hint:"नाम में space की जगह underscore है।",sol:'student_name = "Amit"\nprint(student_name)',exp:"Amit"},
  {q:"_count नाम का variable बनाकर उसमें 4 रखिए और print कीजिए।",hint:"नाम underscore से भी शुरू हो सकता है।",sol:"_count = 4\nprint(_count)",exp:"4"},
  {q:"Age = 1 और age = 2 बनाकर दोनों एक print में दिखाइए।",hint:"print(Age, age)",sol:"Age = 1\nage = 2\nprint(Age, age)",exp:"1 2"},
  {q:'first_name = "Ravi" और last_name = "Kumar" बनाकर दोनों print कीजिए।',hint:"एक print में comma से दोनों लिखिए।",sol:'first_name = "Ravi"\nlast_name = "Kumar"\nprint(first_name, last_name)',exp:"Ravi Kumar"},
  {q:"Variable का नाम ठीक कीजिए ताकि Raj print हो।",hint:"नाम अंक से शुरू नहीं हो सकता; name2 जैसा नाम इस्तेमाल कीजिए।",st:'2name = "Raj"\nprint(2name)',sol:'name2 = "Raj"\nprint(name2)',exp:"Raj"}],
 quiz:[
  {q:"इनमें से कौन-सा variable नाम सही है?",o:["student_name","2name","my name","for"],a:0,w:"नाम अंक से शुरू नहीं हो सकता, space नहीं हो सकता और keyword भी नहीं हो सकता।"},
  {q:"Age और age के बारे में क्या सही है?",o:["दोनों एक ही हैं","दोनों अलग हैं","दोनों गलत हैं","Error आएगा"],a:1,w:"Python case-sensitive है।"},
  {q:"Variable नाम में space हो सकता है?",o:["हाँ","नहीं","सिर्फ़ शुरू में","सिर्फ़ अंत में"],a:1,w:"Space की जगह underscore इस्तेमाल करते हैं।"},
  {q:"कई शब्दों वाले नाम के लिए क्या इस्तेमाल करना अच्छा है?",o:["Underscore (_)","Space","Hash (#)","Quotes"],a:0,w:"जैसे student_name।"},
  {q:"कौन-सा नाम अंक से शुरू होता है और इसलिए गलत है?",o:["total1","1total","_total","Total"],a:1,w:"Variable नाम अंक से शुरू नहीं हो सकता।"}]},
{title:"Multiple Assignment",
 concepts:[
  {h:"एक साथ कई variables",t:"एक ही line में कई variables को एक साथ values दे सकते हैं।",c:"a, b, c = 1, 2, 3\nprint(a, b, c)",o:"1 2 3"},
  {h:"एक value, कई variables",t:"एक ही value को कई variables में रखने के लिए x = y = 7 लिखते हैं।",c:"x = y = 7\nprint(x, y)",o:"7 7"},
  {h:"Values की अदला-बदली (swap)",t:"Python में a, b = b, a लिखकर दो variables की values बदल सकते हैं।",c:"a = 1\nb = 2\na, b = b, a\nprint(a, b)",o:"2 1"}],
 coding:[
  {q:"a, b = 4, 6 लिखकर उनका जोड़ print कीजिए।",hint:"print(a + b)",sol:"a, b = 4, 6\nprint(a + b)",exp:"10"},
  {q:"x = y = 7 लिखकर दोनों print कीजिए।",hint:"print(x, y)",sol:"x = y = 7\nprint(x, y)",exp:"7 7"},
  {q:"a, b, c = 1, 2, 3 लिखकर तीनों एक print में दिखाइए।",hint:"print(a, b, c)",sol:"a, b, c = 1, 2, 3\nprint(a, b, c)",exp:"1 2 3"},
  {q:"a = 1 और b = 2 की values swap करके print कीजिए।",hint:"a, b = b, a",sol:"a = 1\nb = 2\na, b = b, a\nprint(a, b)",exp:"2 1"},
  {q:'name, age = "Neha", 21 लिखकर दोनों print कीजिए।',hint:"print(name, age)",sol:'name, age = "Neha", 21\nprint(name, age)',exp:"Neha 21"}],
 quiz:[
  {q:"a, b = 3, 5 के बाद b की value क्या है?",o:["3","5","8","Error"],a:1,w:"पहली value a को और दूसरी value b को मिलती है।"},
  {q:"x = y = 0 से क्या होता है?",o:["दोनों में 0 रखा जाता है","सिर्फ़ x में 0","Error आता है","y में 1 आता है"],a:0,w:"एक ही value दोनों variables में रखी जाती है।"},
  {q:"a = 1, b = 2 के बाद a, b = b, a से a क्या होगा?",o:["1","2","3","Error"],a:1,w:"Swap से a में b वाली value आ जाती है।"},
  {q:"a, b, c = 1, 2 चलाने पर क्या होगा?",o:["Error आएगा","सब सही चलेगा","c में 0 आएगा","c खाली रहेगा"],a:0,w:"Variables और values की संख्या बराबर होनी चाहिए।"},
  {q:"swap करने का सही तरीका कौन-सा है?",o:["a, b = b, a","a = b = a","swap a b","a == b"],a:0,w:"Python में a, b = b, a से values बदल जाती हैं।"}]},
{title:"Variable Scope Introduction",
 concepts:[
  {h:"Scope क्या है?",t:"Scope का मतलब है कि variable program के किस हिस्से में इस्तेमाल हो सकता है। Program की मुख्य जगह पर बना variable global scope में होता है और बाद की सभी lines में दिखता है।"},
  {h:"पहले बनाइए, फिर इस्तेमाल कीजिए",t:"Variable बनाने से पहले उसे इस्तेमाल करने पर NameError आता है। Python code को ऊपर से नीचे चलाता है।",c:'msg = "Hi"\nprint(msg)',o:"Hi"},
  {h:"आगे का विषय",t:"Function के अंदर बने variables सिर्फ़ उसी function में दिखते हैं (local scope)। यह हम Functions के chapter में विस्तार से पढ़ेंगे।"}],
 coding:[
  {q:"क्रम ठीक कीजिए ताकि Hi print हो।",hint:"Variable पहले बनाइए, फिर print कीजिए।",st:'print(msg)\nmsg = "Hi"',sol:'msg = "Hi"\nprint(msg)',exp:"Hi"},
  {q:"x = 10 बनाकर x और x + 5 दोनों print कीजिए।",hint:"दो अलग print lines लिखिए।",sol:"x = 10\nprint(x)\nprint(x + 5)",exp:"10\n15"},
  {q:'language = "Python" बनाकर I love Python print कीजिए।',hint:'print("I love", language)',sol:'language = "Python"\nprint("I love", language)',exp:"I love Python"},
  {q:"a = 2 बनाकर b = a * 3 बनाइए और b print कीजिए।",hint:"एक variable की value दूसरे में इस्तेमाल कीजिए।",sol:"a = 2\nb = a * 3\nprint(b)",exp:"6"},
  {q:"value = 1 में 1 जोड़कर Value: 2 print कीजिए।",hint:'print("Value:", value)',sol:'value = 1\nvalue = value + 1\nprint("Value:", value)',exp:"Value: 2"}],
 quiz:[
  {q:"Scope का मतलब क्या है?",o:["Variable किस हिस्से में इस्तेमाल हो सकता है","Variable का रंग","Variable की लंबाई","Variable का version"],a:0,w:"Scope बताता है कि variable कहाँ-कहाँ दिखता है।"},
  {q:"print(a) के बाद a = 5 लिखने पर क्या होगा?",o:["NameError","5 print होगा","0 print होगा","कुछ नहीं होगा"],a:0,w:"a बनने से पहले इस्तेमाल हुआ, इसलिए NameError आता है।"},
  {q:"Program की मुख्य जगह पर बना variable किस scope में होता है?",o:["Global","Local","Hidden","Broken"],a:0,w:"मुख्य जगह पर बना variable global scope में होता है।"},
  {q:"Python code को किस क्रम में चलाता है?",o:["ऊपर से नीचे","नीचे से ऊपर","Random","बीच से"],a:0,w:"इसलिए variable पहले बनाना ज़रूरी है।"},
  {q:"Function के अंदर बने variable का scope क्या कहलाता है?",o:["Local scope","Global scope","Main scope","Free scope"],a:0,w:"Function के अंदर बना variable local scope में होता है।"}]}
],
4: [
{title:"What is a Data Type?",
 concepts:[
  {h:"Data Type क्या है?",t:"Data type बताता है कि value किस प्रकार की है, जैसे पूरी संख्या, दशमलव वाली संख्या, text या True/False। Python value के प्रकार के अनुसार उस पर काम करता है।"},
  {h:"चार मुख्य Data Types",t:"int: पूरी संख्या (10)। float: दशमलव वाली संख्या (3.5)। str: text (\"Python\")। bool: True या False।",c:'print(10)\nprint(3.5)\nprint("Python")\nprint(True)',o:"10\n3.5\nPython\nTrue"}],
 coding:[
  {q:"पूरी संख्या 10 print कीजिए।",hint:"पूरी संख्या को quotes की ज़रूरत नहीं होती।",sol:"print(10)",exp:"10"},
  {q:"दशमलव वाली संख्या 3.5 print कीजिए।",hint:"3.5 एक float है।",sol:"print(3.5)",exp:"3.5"},
  {q:"Text Python print कीजिए।",hint:"Text को quotes में लिखिए।",sol:'print("Python")',exp:"Python"},
  {q:"Boolean value True print कीजिए।",hint:"True का पहला अक्षर बड़ा (capital) होता है।",sol:"print(True)",exp:"True"},
  {q:"एक ही print में 10, 3.5, A और True दिखाइए।",hint:"चारों values को comma से अलग कीजिए।",sol:'print(10, 3.5, "A", True)',exp:"10 3.5 A True"}],
 quiz:[
  {q:"Data type क्या बताता है?",o:["Value का प्रकार","Value का रंग","Value की जगह","Value का नाम"],a:0,w:"Data type value के प्रकार को बताता है।"},
  {q:"10 किस data type की value है?",o:["int","float","str","bool"],a:0,w:"10 पूरी संख्या है, इसलिए int है।"},
  {q:"3.5 किस data type की value है?",o:["int","float","str","bool"],a:1,w:"दशमलव वाली संख्या float होती है।"},
  {q:"\"Python\" किस data type की value है?",o:["int","float","str","bool"],a:2,w:"Quotes में लिखा text str होता है।"},
  {q:"bool में कौन-सी values होती हैं?",o:["True और False","0 से 9","a से z","कोई नहीं"],a:0,w:"bool की सिर्फ़ दो values होती हैं: True और False।"}]},
{title:"Integer, Float, String & Boolean",
 concepts:[
  {h:"int और float पर calculation",t:"int और float पर जोड़, घटाना और गुणा किया जा सकता है। Float के साथ calculation का result float आता है।",c:"print(7 + 2.5)\nprint(5 * 2.0)",o:"9.5\n10.0"},
  {h:"String जोड़ना",t:"+ चिह्न से दो strings आपस में जुड़ जाती हैं। \"5\" + \"5\" का result 55 होता है, 10 नहीं, क्योंकि ये text हैं।",c:'print("Py" + "thon")\nprint("5" + "5")',o:"Python\n55"},
  {h:"Boolean",t:"तुलना (comparison) का result True या False होता है।",c:"print(3 > 2)",o:"True"}],
 coding:[
  {q:"a = 7 और b = 2.5 बनाकर उनका जोड़ print कीजिए।",hint:"print(a + b)",sol:"a = 7\nb = 2.5\nprint(a + b)",exp:"9.5"},
  {q:"5 * 2.0 का result print कीजिए।",hint:"Float के साथ गुणा का result भी float होता है।",sol:"print(5 * 2.0)",exp:"10.0"},
  {q:'s = "Py" + "thon" बनाकर print कीजिए।',hint:"Strings को + से जोड़िए।",sol:'s = "Py" + "thon"\nprint(s)',exp:"Python"},
  {q:"3 > 2 का result print कीजिए।",hint:"Comparison का result bool होता है।",sol:"print(3 > 2)",exp:"True"},
  {q:'"5" + "5" का result print कीजिए।',hint:"ये दोनों text हैं, number नहीं।",sol:'print("5" + "5")',exp:"55"}],
 quiz:[
  {q:"7 + 2.5 का result क्या होगा?",o:["9","9.5","10","Error"],a:1,w:"7 + 2.5 = 9.5 (float)।"},
  {q:'"5" + "5" का result क्या होगा?',o:["10","55","\"10\"","Error"],a:1,w:"Strings आपस में जुड़ती हैं, इसलिए 55 आता है।"},
  {q:"5 > 9 का result क्या होगा?",o:["True","False","5","Error"],a:1,w:"5 > 9 गलत है, इसलिए False।"},
  {q:"Strings को जोड़ने के लिए कौन-सा चिह्न इस्तेमाल होता है?",o:["+","-","*","#"],a:0,w:"+ चिह्न strings को जोड़ता है।"},
  {q:"5 * 2.0 का result क्या होगा?",o:["10","10.0","52","Error"],a:1,w:"Float के साथ calculation का result float होता है।"}]},
{title:"Checking Types with type()",
 concepts:[
  {h:"type() function",t:"type() बताता है कि कोई value या variable किस data type का है। Result class के रूप में दिखता है।",c:'print(type(10))\nprint(type("Hi"))',o:"<class 'int'>\n<class 'str'>"},
  {h:"Variable का type",t:"Variable में रखी value का जो type होता है, वही उस variable का type माना जाता है।",c:"x = 7\nprint(type(x))",o:"<class 'int'>"}],
 coding:[
  {q:"10 का type print कीजिए।",hint:"print(type(...))",sol:"print(type(10))",exp:"<class 'int'>"},
  {q:"3.5 का type print कीजिए।",hint:"3.5 float है।",sol:"print(type(3.5))",exp:"<class 'float'>"},
  {q:'"Hi" का type print कीजिए।',hint:"Text का type str होता है।",sol:'print(type("Hi"))',exp:"<class 'str'>"},
  {q:"True का type print कीजिए।",hint:"True bool है।",sol:"print(type(True))",exp:"<class 'bool'>"},
  {q:"x = 7 बनाकर x का type print कीजिए।",hint:"print(type(x))",sol:"x = 7\nprint(type(x))",exp:"<class 'int'>"}],
 quiz:[
  {q:"Data type जाँचने के लिए कौन-सा function इस्तेमाल होता है?",o:["type()","kind()","check()","datatype()"],a:0,w:"type() value का data type बताता है।"},
  {q:"type(3.5) का result क्या होगा?",o:["<class 'int'>","<class 'float'>","<class 'str'>","<class 'bool'>"],a:1,w:"3.5 float है।"},
  {q:"type(\"10\") का result क्या होगा?",o:["<class 'int'>","<class 'float'>","<class 'str'>","<class 'bool'>"],a:2,w:"Quotes में लिखा 10 text है, इसलिए str है।"},
  {q:"type(False) का result क्या होगा?",o:["<class 'int'>","<class 'str'>","<class 'bool'>","<class 'float'>"],a:2,w:"False bool value है।"},
  {q:"x = 8 के बाद type(x) क्या देगा?",o:["<class 'int'>","<class 'str'>","<class 'x'>","Error"],a:0,w:"x में 8 है, जो int है।"}]},
{title:"Implicit Type Conversion",
 concepts:[
  {h:"Implicit conversion क्या है?",t:"जब Python अपने-आप एक type को दूसरे type में बदल देता है, तो उसे implicit type conversion कहते हैं। जैसे int + float का result float होता है।",c:"print(5 + 2.0)\nprint(type(5 + 2.0))",o:"7.0\n<class 'float'>"},
  {h:"True और False की संख्या",t:"Calculation में True को 1 और False को 0 माना जाता है।",c:"print(True + 1)",o:"2"},
  {h:"भाग (/)",t:"/ से भाग देने पर result हमेशा float आता है।",c:"print(10 / 2)",o:"5.0"}],
 coding:[
  {q:"5 + 2.0 का result print कीजिए।",hint:"int और float जुड़ने पर float मिलता है।",sol:"print(5 + 2.0)",exp:"7.0"},
  {q:"1 + 1.5 का type print कीजिए।",hint:"print(type(1 + 1.5))",sol:"print(type(1 + 1.5))",exp:"<class 'float'>"},
  {q:"True + 1 का result print कीजिए।",hint:"True की value 1 मानी जाती है।",sol:"print(True + 1)",exp:"2"},
  {q:"10 / 2 का result print कीजिए।",hint:"/ का result float होता है।",sol:"print(10 / 2)",exp:"5.0"},
  {q:"10 / 2 का type print कीजिए।",hint:"print(type(10 / 2))",sol:"print(type(10 / 2))",exp:"<class 'float'>"}],
 quiz:[
  {q:"Implicit conversion कौन करता है?",o:["Python अपने-आप","Programmer हाथ से","Computer user","कोई नहीं"],a:0,w:"Implicit conversion Python अपने-आप करता है।"},
  {q:"5 + 2.0 का result क्या होगा?",o:["7","7.0","52","Error"],a:1,w:"int को float में बदलकर जोड़ा जाता है।"},
  {q:"True + 1 का result क्या होगा?",o:["1","2","True1","Error"],a:1,w:"True को 1 माना जाता है।"},
  {q:"10 / 2 का type क्या होगा?",o:["int","float","str","bool"],a:1,w:"/ का result हमेशा float होता है।"},
  {q:"False + 5 का result क्या होगा?",o:["5","False5","6","Error"],a:0,w:"False को 0 माना जाता है, इसलिए 0 + 5 = 5।"}]},
{title:"Explicit Type Casting",
 concepts:[
  {h:"Explicit casting क्या है?",t:"जब programmer खुद एक type को दूसरे type में बदलता है, तो उसे explicit type casting कहते हैं। इसके लिए int(), float(), str() और bool() इस्तेमाल होते हैं।"},
  {h:"उदाहरण",t:"int(\"25\") text को पूरी संख्या बनाता है। float(3) का result 3.0 होता है। int(3.9) दशमलव हटाकर 3 देता है (round नहीं करता)। str(10) संख्या को text बनाता है। bool(0) का result False होता है।",c:'print(int("25") + 5)\nprint(float(3))\nprint(int(3.9))',o:"30\n3.0\n3"}],
 coding:[
  {q:'int("25") + 5 का result print कीजिए।',hint:"पहले text को int में बदलिए।",sol:'print(int("25") + 5)',exp:"30"},
  {q:"float(3) print कीजिए।",hint:"print(float(3))",sol:"print(float(3))",exp:"3.0"},
  {q:"int(3.9) print कीजिए।",hint:"int() दशमलव हिस्सा हटा देता है।",sol:"print(int(3.9))",exp:"3"},
  {q:'str(10) + "5" print कीजिए।',hint:"str(10) text \"10\" बना देता है।",sol:'print(str(10) + "5")',exp:"105"},
  {q:"bool(0) print कीजिए।",hint:"0 का bool False होता है।",sol:"print(bool(0))",exp:"False"}],
 quiz:[
  {q:"Text को पूरी संख्या में बदलने के लिए क्या इस्तेमाल होता है?",o:["int()","str()","type()","text()"],a:0,w:"int() text को int में बदलता है।"},
  {q:"int(3.9) का result क्या होगा?",o:["4","3","3.9","Error"],a:1,w:"int() दशमलव हिस्सा हटा देता है।"},
  {q:"float(3) का result क्या होगा?",o:["3","3.0","30","Error"],a:1,w:"float(3) = 3.0।"},
  {q:"str(10) + \"5\" का result क्या होगा?",o:["15","105","10 5","Error"],a:1,w:"str(10) text \"10\" बनाता है और \"5\" जुड़कर 105 बनता है।"},
  {q:"bool(0) का result क्या होगा?",o:["True","False","0","Error"],a:1,w:"0 का bool False होता है।"}]},
{title:"Common Type Errors",
 concepts:[
  {h:"TypeError",t:"अलग-अलग types को गलत तरीके से जोड़ने पर TypeError आता है, जैसे \"5\" + 5। इसे ठीक करने के लिए type बदलिए।"},
  {h:"ValueError",t:"जब value का रूप सही न हो तो ValueError आता है, जैसे int(\"abc\")। int() सिर्फ़ संख्या वाले text को बदल सकता है।",c:'print(int("5") + 5)',o:"10"}],
 coding:[
  {q:"TypeError ठीक कीजिए ताकि 10 print हो।",hint:"\"5\" को int(\"5\") से बदलिए।",st:'print("5" + 5)',sol:'print(int("5") + 5)',exp:"10"},
  {q:"ValueError ठीक कीजिए ताकि 12 print हो।",hint:"int() में संख्या वाला text दीजिए।",st:'print(int("abc"))',sol:'print(int("12"))',exp:"12"},
  {q:"TypeError ठीक कीजिए ताकि Total: 15 print हो।",hint:"15 को str(15) बनाइए।",st:'print("Total: " + 15)',sol:'print("Total: " + str(15))',exp:"Total: 15"},
  {q:"Code ठीक कीजिए ताकि 15 print हो।",hint:"x को int में बदलकर इस्तेमाल कीजिए।",st:'x = "10"\nprint(x + 5)',sol:'x = "10"\nprint(int(x) + 5)',exp:"15"},
  {q:"ValueError ठीक कीजिए ताकि 3.5 print हो।",hint:"float() में सही संख्या वाला text दीजिए।",st:'print(float("3.5a"))',sol:'print(float("3.5"))',exp:"3.5"}],
 quiz:[
  {q:'"5" + 5 में कौन-सा error आएगा?',o:["TypeError","NameError","ValueError","SyntaxError"],a:0,w:"Text और number को सीधे + से नहीं जोड़ सकते।"},
  {q:'int("abc") में कौन-सा error आएगा?',o:["ValueError","TypeError","NameError","कोई नहीं"],a:0,w:"\"abc\" संख्या नहीं है, इसलिए ValueError आता है।"},
  {q:"TypeError ठीक करने का आम तरीका क्या है?",o:["Type बदलना","Code delete करना","Computer restart","Comment लगाना"],a:0,w:"int(), str() जैसे functions से type बदला जाता है।"},
  {q:'print("Age: " + str(20)) का output क्या होगा?',o:["Age: 20","Age: str(20)","Error","20"],a:0,w:"str(20) से number text बन जाता है।"},
  {q:'int("12") + 1 का result क्या होगा?',o:["13","121","Error","12"],a:0,w:"int(\"12\") = 12 और 12 + 1 = 13।"}]}
],
6: [
{title:"Arithmetic Operators",
 concepts:[
  {h:"Arithmetic operators",t:"+ जोड़, - घटाना, * गुणा, / भाग (float), // पूरा भाग (दशमलव हटाकर), % शेषफल (remainder), ** घात (power)।",c:"print(7 // 2)\nprint(7 % 2)\nprint(2 ** 3)",o:"3\n1\n8"}],
 coding:[
  {q:"15 + 4 print कीजिए।",hint:"+ से जोड़िए।",sol:"print(15 + 4)",exp:"19"},
  {q:"7 // 2 print कीजिए।",hint:"// पूरा भाग देता है।",sol:"print(7 // 2)",exp:"3"},
  {q:"7 % 2 print कीजिए।",hint:"% शेषफल देता है।",sol:"print(7 % 2)",exp:"1"},
  {q:"2 की घात 4 print कीजिए।",hint:"** से घात निकलती है।",sol:"print(2 ** 4)",exp:"16"},
  {q:"7 / 2 print कीजिए।",hint:"/ का result float होता है।",sol:"print(7 / 2)",exp:"3.5"}],
 quiz:[
  {q:"7 // 2 का result क्या है?",o:["3","3.5","4","1"],a:0,w:"// पूरा भाग देता है, इसलिए 3।"},
  {q:"7 % 2 का result क्या है?",o:["3","1","0","3.5"],a:1,w:"7 को 2 से भाग देने पर शेषफल 1 बचता है।"},
  {q:"2 ** 3 का result क्या है?",o:["6","8","5","9"],a:1,w:"2 की घात 3 = 8।"},
  {q:"/ का result किस type का होता है?",o:["float","int","str","bool"],a:0,w:"/ का result हमेशा float होता है।"},
  {q:"शेषफल निकालने के लिए कौन-सा operator है?",o:["%","//","**","/"],a:0,w:"% operator शेषफल देता है।"}]},
{title:"Comparison & Assignment Operators",
 concepts:[
  {h:"Comparison operators",t:"== बराबर, != बराबर नहीं, > बड़ा, < छोटा, >= बड़ा या बराबर, <= छोटा या बराबर। इनका result True या False होता है।",c:"print(5 == 5)\nprint(7 >= 9)",o:"True\nFalse"},
  {h:"Assignment operators",t:"+=, -=, *= जैसे operators variable की value को update करते हैं। x += 5 का मतलब x = x + 5।",c:"x = 10\nx += 5\nprint(x)",o:"15"}],
 coding:[
  {q:"5 == 5 का result print कीजिए।",hint:"बराबर की जाँच के लिए == इस्तेमाल होता है।",sol:"print(5 == 5)",exp:"True"},
  {q:"4 != 4 का result print कीजिए।",hint:"!= का मतलब बराबर नहीं।",sol:"print(4 != 4)",exp:"False"},
  {q:"7 >= 9 का result print कीजिए।",hint:">= बड़ा या बराबर जाँचता है।",sol:"print(7 >= 9)",exp:"False"},
  {q:"x = 10 में += से 5 जोड़कर print कीजिए।",hint:"x += 5",sol:"x = 10\nx += 5\nprint(x)",exp:"15"},
  {q:"x = 6 को *= से 3 गुना करके print कीजिए।",hint:"x *= 3",sol:"x = 6\nx *= 3\nprint(x)",exp:"18"}],
 quiz:[
  {q:"बराबर की जाँच के लिए कौन-सा operator है?",o:["==","=","!=","=>"],a:0,w:"== बराबर की जाँच करता है, जबकि = value assign करता है।"},
  {q:"3 != 3 का result क्या है?",o:["True","False","3","Error"],a:1,w:"3 और 3 बराबर हैं, इसलिए != का result False है।"},
  {q:"x = 4 के बाद x += 2 से x क्या होगा?",o:["2","4","6","8"],a:2,w:"x = x + 2 = 6।"},
  {q:"Comparison का result किस type का होता है?",o:["bool","int","str","float"],a:0,w:"Comparison का result True या False होता है।"},
  {q:"x = 5 के बाद x *= 2 से x क्या होगा?",o:["7","10","25","3"],a:1,w:"x = x * 2 = 10।"}]},
{title:"Logical Operators",
 concepts:[
  {h:"and, or, not",t:"and: दोनों शर्तें सही हों तो True। or: कोई एक भी सही हो तो True। not: result को उलट देता है।",c:"print(3 > 2 and 5 > 4)\nprint(1 > 2 or 4 > 3)\nprint(not True)",o:"True\nTrue\nFalse"}],
 coding:[
  {q:"True and False का result print कीजिए।",hint:"and में दोनों True होने चाहिए।",sol:"print(True and False)",exp:"False"},
  {q:"3 > 2 and 5 > 4 का result print कीजिए।",hint:"दोनों शर्तें सही हैं।",sol:"print(3 > 2 and 5 > 4)",exp:"True"},
  {q:"1 > 2 or 4 > 3 का result print कीजिए।",hint:"or में एक शर्त सही हो तो काफ़ी है।",sol:"print(1 > 2 or 4 > 3)",exp:"True"},
  {q:"not True print कीजिए।",hint:"not उलट देता है।",sol:"print(not True)",exp:"False"},
  {q:"age = 20 बनाकर जाँचिए कि age 18 से बड़ी और 60 से छोटी है।",hint:"print(age > 18 and age < 60)",sol:"age = 20\nprint(age > 18 and age < 60)",exp:"True"}],
 quiz:[
  {q:"True and True का result क्या है?",o:["True","False","None","Error"],a:0,w:"दोनों True हैं।"},
  {q:"False or True का result क्या है?",o:["True","False","None","Error"],a:0,w:"or में एक भी True हो तो result True होता है।"},
  {q:"not False का result क्या है?",o:["True","False","0","Error"],a:0,w:"not False = True।"},
  {q:"and operator कब True देता है?",o:["जब दोनों शर्तें सही हों","जब एक शर्त सही हो","कभी नहीं","हमेशा"],a:0,w:"and के लिए दोनों शर्तें सही होना ज़रूरी है।"},
  {q:"2 > 5 or 3 > 1 का result क्या है?",o:["True","False","Error","None"],a:0,w:"दूसरी शर्त सही है, इसलिए or का result True है।"}]},
{title:"Identity & Membership Operators",
 concepts:[
  {h:"Membership: in और not in",t:"in जाँचता है कि कोई चीज़ किसी text में मौजूद है या नहीं। not in उसका उल्टा है।",c:'print("a" in "apple")\nprint("z" not in "apple")',o:"True\nTrue"},
  {h:"Identity: is और is not",t:"is जाँचता है कि दोनों तरफ़ एक ही object है या नहीं। None की जाँच के लिए is और is not इस्तेमाल करते हैं। None का मतलब है \"कोई value नहीं\"।",c:"x = None\nprint(x is None)",o:"True"}],
 coding:[
  {q:'"a" in "apple" का result print कीजिए।',hint:"in से मौजूदगी की जाँच होती है।",sol:'print("a" in "apple")',exp:"True"},
  {q:'"z" in "apple" का result print कीजिए।',hint:"apple में z नहीं है।",sol:'print("z" in "apple")',exp:"False"},
  {q:'"z" not in "apple" का result print कीजिए।',hint:"not in उल्टा जाँचता है।",sol:'print("z" not in "apple")',exp:"True"},
  {q:"x = None बनाकर जाँचिए कि x is None है।",hint:"print(x is None)",sol:"x = None\nprint(x is None)",exp:"True"},
  {q:"x = 5 बनाकर जाँचिए कि x is not None है।",hint:"print(x is not None)",sol:"x = 5\nprint(x is not None)",exp:"True"}],
 quiz:[
  {q:'"p" in "apple" का result क्या है?',o:["True","False","Error","None"],a:0,w:"apple में p मौजूद है।"},
  {q:'"x" not in "apple" का result क्या है?',o:["True","False","Error","None"],a:0,w:"apple में x नहीं है, इसलिए not in का result True है।"},
  {q:"None की जाँच के लिए कौन-सा operator इस्तेमाल करते हैं?",o:["is","in","and","+"],a:0,w:"None की जाँच is या is not से की जाती है।"},
  {q:"in operator क्या करता है?",o:["मौजूदगी जाँचता है","जोड़ता है","घटाता है","print करता है"],a:0,w:"in बताता है कि कोई चीज़ मौजूद है या नहीं।"},
  {q:"x = None के बाद x is not None का result क्या है?",o:["False","True","None","Error"],a:0,w:"x None ही है, इसलिए is not None गलत है।"}]},
{title:"Operator Precedence",
 concepts:[
  {h:"Precedence क्या है?",t:"जब एक expression में कई operators हों, तो Python उन्हें एक तय क्रम में चलाता है: पहले Brackets (), फिर **, फिर *, /, //, %, फिर +, -, फिर comparison, और उसके बाद not, and, or।",c:"print(10 - 3 * 2)\nprint((10 - 3) * 2)",o:"4\n14"},
  {h:"Brackets का फ़ायदा",t:"Brackets लगाकर आप क्रम खुद तय कर सकते हैं और code पढ़ने में भी आसान होता है।"}],
 coding:[
  {q:"10 - 3 * 2 print कीजिए।",hint:"गुणा पहले होता है।",sol:"print(10 - 3 * 2)",exp:"4"},
  {q:"Brackets से (10 - 3) * 2 print कीजिए।",hint:"Bracket पहले चलता है।",sol:"print((10 - 3) * 2)",exp:"14"},
  {q:"2 + 3 ** 2 print कीजिए।",hint:"घात पहले होती है।",sol:"print(2 + 3 ** 2)",exp:"11"},
  {q:"2 * 3 + 4 * 5 print कीजिए।",hint:"दोनों गुणा पहले होंगे।",sol:"print(2 * 3 + 4 * 5)",exp:"26"},
  {q:"not 1 > 2 print कीजिए।",hint:"पहले comparison, फिर not।",sol:"print(not 1 > 2)",exp:"True"}],
 quiz:[
  {q:"सबसे पहले कौन-सा हिस्सा चलता है?",o:["Brackets ()","+","-","and"],a:0,w:"Brackets की precedence सबसे ऊँची होती है।"},
  {q:"10 - 3 * 2 का result क्या है?",o:["14","4","8","Error"],a:1,w:"पहले 3 * 2 = 6, फिर 10 - 6 = 4।"},
  {q:"2 + 3 ** 2 का result क्या है?",o:["25","11","10","Error"],a:1,w:"पहले 3 ** 2 = 9, फिर 2 + 9 = 11।"},
  {q:"(10 - 3) * 2 का result क्या है?",o:["4","14","7","Error"],a:1,w:"Bracket के अंदर 7 बनता है, फिर 7 * 2 = 14।"},
  {q:"Precedence का मतलब क्या है?",o:["Operators के चलने का क्रम","Operators की संख्या","Operators का रंग","Operators की भाषा"],a:0,w:"Precedence operators के चलने का क्रम बताती है।"}]},
{title:"Expressions & Evaluation",
 concepts:[
  {h:"Expression की evaluation",t:"Expression में values, variables और operators मिलकर एक result बनाते हैं। Python उसे precedence के क्रम में एक-एक कदम में हल करता है।",c:"a = 4\nb = 3\nprint(a * b + 2)",o:"14"},
  {h:"काम की जाँचें",t:"x % 2 == 0 से जाँच सकते हैं कि संख्या सम (even) है या नहीं।",c:"x = 8\nprint(x % 2 == 0)",o:"True"}],
 coding:[
  {q:"a = 4 और b = 3 से a * b + 2 print कीजिए।",hint:"पहले गुणा, फिर जोड़।",sol:"a = 4\nb = 3\nprint(a * b + 2)",exp:"14"},
  {q:"area = 5 * 4 बनाकर Area: 20 print कीजिए।",hint:'print("Area:", area)',sol:'area = 5 * 4\nprint("Area:", area)',exp:"Area: 20"},
  {q:"10 % 3 == 1 का result print कीजिए।",hint:"10 को 3 से भाग देने पर शेषफल 1 बचता है।",sol:"print(10 % 3 == 1)",exp:"True"},
  {q:"x = 7 के लिए जाँचिए कि वह सम (even) है या नहीं।",hint:"print(x % 2 == 0)",sol:"x = 7\nprint(x % 2 == 0)",exp:"False"},
  {q:"a = 2 और b = 3 के लिए (a + b) ** 2 print कीजिए।",hint:"पहले bracket, फिर घात।",sol:"a = 2\nb = 3\nprint((a + b) ** 2)",exp:"25"}],
 quiz:[
  {q:"Expression का result क्या कहलाता है?",o:["Value","Comment","Error","File"],a:0,w:"Expression हल होने पर एक value बनती है।"},
  {q:"x = 8 के लिए x % 2 == 0 का result क्या है?",o:["True","False","8","Error"],a:0,w:"8 सम संख्या है, इसलिए शेषफल 0 आता है।"},
  {q:"a = 2, b = 3 के लिए a * b + 1 का result क्या है?",o:["7","8","6","Error"],a:0,w:"2 * 3 = 6, फिर 6 + 1 = 7।"},
  {q:"(2 + 3) ** 2 का result क्या है?",o:["25","11","13","Error"],a:0,w:"Bracket से 5 बनता है और 5 ** 2 = 25।"},
  {q:"Expression हल करते समय Python किस क्रम का पालन करता है?",o:["Precedence","Alphabet","Random","Colour"],a:0,w:"Python operator precedence के क्रम से हल करता है।"}]}
],
5: [
{title:"Using print()",
 concepts:[
  {h:"print() का काम",t:"print() text, numbers और variables screen पर दिखाता है। खाली print() एक blank line बना देता है।",c:'name = "Neha"\nprint(name)\nprint()\nprint(8 * 8)',o:"Neha\n\n64"}],
 coding:[
  {q:"Python Quest print कीजिए।",hint:"Text को quotes में लिखिए।",sol:'print("Python Quest")',exp:"Python Quest"},
  {q:"A और B के बीच एक blank line print कीजिए।",hint:"बीच में खाली print() लिखिए।",sol:'print("A")\nprint()\nprint("B")',exp:"A\n\nB"},
  {q:'name = "Neha" बनाकर print कीजिए।',hint:"Variable को बिना quotes के print कीजिए।",sol:'name = "Neha"\nprint(name)',exp:"Neha"},
  {q:"8 * 8 का result print कीजिए।",hint:"print(8 * 8)",sol:"print(8 * 8)",exp:"64"},
  {q:"Version 3 print कीजिए (text और number comma से अलग करके)।",hint:'print("Version", 3)',sol:'print("Version", 3)',exp:"Version 3"}],
 quiz:[
  {q:"Screen पर output दिखाने का function कौन-सा है?",o:["print()","input()","type()","int()"],a:0,w:"print() output दिखाता है।"},
  {q:"खाली print() क्या करता है?",o:["Blank line बनाता है","Error देता है","Program रोकता है","कुछ नहीं करता"],a:0,w:"खाली print() एक blank line दिखाता है।"},
  {q:"Variable को print करते समय क्या नहीं लगाते?",o:["Quotes","Brackets","नाम","Equal sign"],a:0,w:"Variable को बिना quotes के print करते हैं।"},
  {q:"print(8 * 8) का output क्या होगा?",o:["64","88","8 * 8","16"],a:0,w:"पहले 8 * 8 = 64 निकलता है।"},
  {q:'print("A", 1) का output क्या होगा?',o:["A 1","A1","A,1","Error"],a:0,w:"Comma से values के बीच space आता है।"}]},
{title:"input() & Input as a String",
 concepts:[
  {h:"input() क्या करता है?",t:"input() user से value लेता है और उसे हमेशा str (text) के रूप में देता है, चाहे user ने संख्या ही क्यों न लिखी हो।",c:'name = input()\nprint("Hello", name)',o:"(Input: Amit)\nHello Amit"},
  {h:"Input का type",t:"Input से मिली संख्या भी text होती है। इसलिए दो input जोड़ने पर वे संख्या की तरह नहीं, text की तरह जुड़ती हैं।",c:'a = input()\nprint(type(a))',o:"(Input: 10)\n<class 'str'>"}],
 coding:[
  {q:"input() से नाम लेकर print कीजिए। (Input: Amit)",hint:"name = input() लिखकर print(name) कीजिए।",inp:["Amit"],sol:"name = input()\nprint(name)",exp:"Amit"},
  {q:"input() से शहर लेकर City: Patna print कीजिए। (Input: Patna)",hint:'print("City:", city)',inp:["Patna"],sol:'city = input()\nprint("City:", city)',exp:"City: Patna"},
  {q:"input() से मिली value का type print कीजिए। (Input: 10)",hint:"print(type(a))",inp:["10"],sol:"a = input()\nprint(type(a))",exp:"<class 'str'>"},
  {q:"दो input लेकर उन्हें + से जोड़कर print कीजिए। (Input: 5 और 3)",hint:"दोनों text हैं, इसलिए 53 बनेगा।",inp:["5","3"],sol:"a = input()\nb = input()\nprint(a + b)",exp:"53"},
  {q:"input() से Hello लेकर उसके अंत में ! जोड़कर print कीजिए। (Input: Hello)",hint:'print(word + "!")',inp:["Hello"],sol:'word = input()\nprint(word + "!")',exp:"Hello!"}],
 quiz:[
  {q:"user से value लेने का function कौन-सा है?",o:["input()","print()","scan()","get()"],a:0,w:"input() user से value लेता है।"},
  {q:"input() हमेशा किस type की value देता है?",o:["str","int","float","bool"],a:0,w:"input() हमेशा text (str) देता है।"},
  {q:"दो input 5 और 3 को + से जोड़ने पर क्या मिलेगा?",o:["8","53","Error","5 3"],a:1,w:"दोनों text हैं, इसलिए जुड़कर 53 बनता है।"},
  {q:"type(input()) में user ने 10 लिखा, तो result क्या होगा?",o:["<class 'int'>","<class 'str'>","<class 'float'>","Error"],a:1,w:"input की value str होती है।"},
  {q:"नाम लेने के लिए सही code कौन-सा है?",o:["name = input()","name == input()","input = name","print(input)"],a:0,w:"Variable में input रखने के लिए = इस्तेमाल होता है।"}]},
{title:"Converting User Input",
 concepts:[
  {h:"Input को संख्या बनाना",t:"Input से calculation करने के लिए उसे int() या float() से बदलना पड़ता है।",c:'n = int(input())\nprint(n + 5)',o:"(Input: 10)\n15"},
  {h:"float input",t:"दशमलव वाली संख्या के लिए float(input()) इस्तेमाल होता है।",c:'x = float(input())\nprint(x * 2)',o:"(Input: 2.5)\n5.0"}],
 coding:[
  {q:"input() से संख्या लेकर उसमें 5 जोड़िए। (Input: 10)",hint:"n = int(input())",inp:["10"],sol:"n = int(input())\nprint(n + 5)",exp:"15"},
  {q:"float input को 2 से गुणा कीजिए। (Input: 2.5)",hint:"x = float(input())",inp:["2.5"],sol:"x = float(input())\nprint(x * 2)",exp:"5.0"},
  {q:"दो संख्याएँ input लेकर उनका जोड़ print कीजिए। (Input: 4 और 6)",hint:"दोनों को int() में बदलिए।",inp:["4","6"],sol:"a = int(input())\nb = int(input())\nprint(a + b)",exp:"10"},
  {q:"age input लेकर print कीजिए कि age >= 18 है या नहीं। (Input: 20)",hint:"print(age >= 18)",inp:["20"],sol:"age = int(input())\nprint(age >= 18)",exp:"True"},
  {q:"संख्या input लेकर उसका वर्ग print कीजिए। (Input: 7)",hint:"n * n",inp:["7"],sol:"n = int(input())\nprint(n * n)",exp:"49"}],
 quiz:[
  {q:"Input को पूरी संख्या बनाने के लिए क्या इस्तेमाल होता है?",o:["int(input())","str(input())","print(input())","type(input())"],a:0,w:"int() input को पूरी संख्या में बदलता है।"},
  {q:"int(input()) में user ने 10 लिखा, फिर 10 + 5 का result?",o:["15","105","Error","10 5"],a:0,w:"int में बदलने के बाद संख्या की तरह जुड़ती है।"},
  {q:"दशमलव वाली input के लिए क्या इस्तेमाल करेंगे?",o:["float(input())","int(input())","bool(input())","len(input())"],a:0,w:"float() दशमलव वाली संख्या के लिए है।"},
  {q:"int(input()) में user ने abc लिखा तो क्या होगा?",o:["ValueError","NameError","SyntaxError","कुछ नहीं"],a:0,w:"abc संख्या नहीं है, इसलिए ValueError आता है।"},
  {q:"float(input()) में 2.5 लेकर 2 से गुणा करने पर?",o:["5.0","5","2.52","Error"],a:0,w:"2.5 * 2 = 5.0।"}]},
{title:"Multiple Values in Output",
 concepts:[
  {h:"Comma से कई values",t:"print() में comma से text, numbers और variables एक साथ दिखा सकते हैं। बीच में अपने-आप space आता है।",c:'name = "Ravi"\nage = 21\nprint("Name:", name, "Age:", age)',o:"Name: Ravi Age: 21"},
  {h:"+ से text जोड़ना",t:"+ से जोड़ने पर दोनों तरफ़ str होना चाहिए। संख्या को str() से text बनाना पड़ता है।",c:'print("Total: " + str(50))',o:"Total: 50"}],
 coding:[
  {q:'name = "Ravi" और age = 21 से Name: Ravi Age: 21 print कीजिए।',hint:'print("Name:", name, "Age:", age)',sol:'name = "Ravi"\nage = 21\nprint("Name:", name, "Age:", age)',exp:"Name: Ravi Age: 21"},
  {q:"a = 3 और b = 4 से Sum: 7 print कीजिए।",hint:'print("Sum:", a + b)',sol:'a = 3\nb = 4\nprint("Sum:", a + b)',exp:"Sum: 7"},
  {q:'+ और str() इस्तेमाल करके Total: 50 print कीजिए।',hint:'"Total: " + str(50)',sol:'print("Total: " + str(50))',exp:"Total: 50"},
  {q:"नाम input लेकर Hello Sita print कीजिए। (Input: Sita)",hint:'print("Hello", name)',inp:["Sita"],sol:'name = input()\nprint("Hello", name)',exp:"Hello Sita"},
  {q:"A B C print कीजिए (तीन अलग values से)।",hint:'print("A", "B", "C")',sol:'print("A", "B", "C")',exp:"A B C"}],
 quiz:[
  {q:'print("X:", 5) का output क्या होगा?',o:["X: 5","X:5","X: 5.0","Error"],a:0,w:"Comma के कारण बीच में space आता है।"},
  {q:'print("Total: " + 50) में क्या होगा?',o:["TypeError","Total: 50","Total:50","कुछ नहीं"],a:0,w:"संख्या को str() में बदले बिना text से नहीं जोड़ सकते।"},
  {q:'print("Age: " + str(20)) का output क्या होगा?',o:["Age: 20","Age: str(20)","Error","20"],a:0,w:"str(20) संख्या को text बनाता है।"},
  {q:"print में values अलग करने के लिए सबसे आसान तरीका?",o:["Comma","Hash","Colon","Bracket"],a:0,w:"Comma से कई values एक साथ print होती हैं।"},
  {q:'name = "Ravi" के बाद print("Hi", name) का output?',o:["Hi Ravi","Hi name","Hiname","Error"],a:0,w:"Variable की value दिखती है।"}]},
{title:"sep & end in print()",
 concepts:[
  {h:"sep",t:"sep values के बीच का separator बदलता है। Default separator space होता है।",c:'print("2026", "10", "30", sep="-")',o:"2026-10-30"},
  {h:"end",t:"end print के बाद क्या आए, यह तय करता है। Default end नई line (\\n) होता है।",c:'print("Hello", end=" ")\nprint("World")',o:"Hello World"},
  {h:"Escape characters",t:"\\n नई line बनाता है और \\t tab जितनी जगह छोड़ता है।",c:'print("Line1\\nLine2")',o:"Line1\nLine2"}],
 coding:[
  {q:"sep=\"-\" इस्तेमाल करके 2026-10-30 print कीजिए।",hint:'print("2026", "10", "30", sep="-")',sol:'print("2026", "10", "30", sep="-")',exp:"2026-10-30"},
  {q:"end=\" \" इस्तेमाल करके Hello World एक ही line में print कीजिए।",hint:'पहले print में end=" " लगाइए।',sol:'print("Hello", end=" ")\nprint("World")',exp:"Hello World"},
  {q:'sep="" से ABC print कीजिए।',hint:'sep="" का मतलब बीच में कुछ नहीं।',sol:'print("A", "B", "C", sep="")',exp:"ABC"},
  {q:"एक ही print में \\n से Line1 और Line2 दो lines में print कीजिए।",hint:'print("Line1\\nLine2")',sol:'print("Line1\\nLine2")',exp:"Line1\nLine2"},
  {q:'sep=", " से a, b print कीजिए।',hint:'print("a", "b", sep=", ")',sol:'print("a", "b", sep=", ")',exp:"a, b"}],
 quiz:[
  {q:"print का default separator क्या है?",o:["Space","Comma","Hyphen","कुछ नहीं"],a:0,w:"Default sep एक space होता है।"},
  {q:'print("A", "B", sep="-") का output?',o:["A-B","A B","AB","A,B"],a:0,w:"sep से बीच का चिह्न बदल जाता है।"},
  {q:"print का default end क्या है?",o:["नई line","Space","Comma","कुछ नहीं"],a:0,w:"Default end नई line (\\n) होता है।"},
  {q:"\\n का क्या मतलब है?",o:["नई line","Tab","Space","Error"],a:0,w:"\\n नई line बनाता है।"},
  {q:'print("A", end="")\nprint("B") का output?',o:["AB","A B","A\nB","Error"],a:0,w:"end=\"\" से अगला output उसी line में जुड़ जाता है।"}]},
{title:"Formatted Output with f-strings",
 concepts:[
  {h:"f-string",t:"String से पहले f लगाने और variables को { } में लिखने पर वे text के अंदर जुड़ जाते हैं।",c:'name = "Amit"\nprint(f"Hello {name}")',o:"Hello Amit"},
  {h:"{ } में expression",t:"Curly brackets के अंदर calculation भी लिख सकते हैं।",c:'a = 3\nb = 4\nprint(f"Sum is {a + b}")',o:"Sum is 7"},
  {h:"दशमलव के अंक",t:"{value:.2f} से value दो दशमलव अंकों तक दिखती है।",c:'price = 49.5\nprint(f"Price: {price:.2f}")',o:"Price: 49.50"}],
 coding:[
  {q:'name = "Amit" से f-string इस्तेमाल करके Hello Amit print कीजिए।',hint:'print(f"Hello {name}")',sol:'name = "Amit"\nprint(f"Hello {name}")',exp:"Hello Amit"},
  {q:"a = 3 और b = 4 से f-string में Sum is 7 print कीजिए।",hint:'print(f"Sum is {a + b}")',sol:'a = 3\nb = 4\nprint(f"Sum is {a + b}")',exp:"Sum is 7"},
  {q:"price = 49.5 को दो दशमलव अंकों में Price: 49.50 print कीजिए।",hint:'{price:.2f}',sol:'price = 49.5\nprint(f"Price: {price:.2f}")',exp:"Price: 49.50"},
  {q:"age input लेकर f-string से Age: 20 print कीजिए। (Input: 20)",hint:'age = int(input())',inp:["20"],sol:'age = int(input())\nprint(f"Age: {age}")',exp:"Age: 20"},
  {q:'n = "Python" और v = 3 से f-string में Python 3 print कीजिए।',hint:'print(f"{n} {v}")',sol:'n = "Python"\nv = 3\nprint(f"{n} {v}")',exp:"Python 3"}],
 quiz:[
  {q:"f-string कैसे शुरू होती है?",o:["String से पहले f लगाकर","String के बाद f लगाकर","# लगाकर","कुछ नहीं लगाकर"],a:0,w:'जैसे f"Hello {name}"।'},
  {q:"f-string में variable किसके अंदर लिखते हैं?",o:["{ }","( )","[ ]","< >"],a:0,w:"Curly brackets { } के अंदर।"},
  {q:'a = 2, b = 3 के लिए f"{a + b}" का output?',o:["5","2 + 3","23","Error"],a:0,w:"{ } के अंदर calculation हो जाती है।"},
  {q:'price = 5 के लिए f"{price:.2f}" का output?',o:["5.00","5","5.2","Error"],a:0,w:".2f दो दशमलव अंकों में दिखाता है।"},
  {q:'name = "Ria" के लिए f"Hi {name}" का output?',o:["Hi Ria","Hi name","Hi {name}","Error"],a:0,w:"{name} की जगह variable की value आ जाती है।"}]}
],
7: [
{title:"Decision Making & if Statement",
 concepts:[
  {h:"Decision Making",t:"Program शर्त (condition) जाँचकर तय करता है कि कौन-सा code चलेगा। इसके लिए if statement इस्तेमाल होता है।"},
  {h:"if statement",t:"if की शर्त सही (True) हो तभी उसके अंदर indent किया हुआ code चलता है। शर्त के बाद colon (:) ज़रूरी है।",c:'x = 10\nif x > 5:\n    print("Big")',o:"Big"}],
 coding:[
  {q:"x = 10 के लिए अगर x > 5 हो तो Big print कीजिए।",hint:"if x > 5: के अंदर print indent कीजिए।",sol:'x = 10\nif x > 5:\n    print("Big")',exp:"Big"},
  {q:"age = 20 के लिए अगर age >= 18 हो तो Adult print कीजिए।",hint:"if age >= 18:",sol:'age = 20\nif age >= 18:\n    print("Adult")',exp:"Adult"},
  {q:"n = 3 के लिए अगर n == 5 हो तो Five print कीजिए, और if के बाहर End print कीजिए।",hint:"End वाली line indent नहीं होगी।",sol:'n = 3\nif n == 5:\n    print("Five")\nprint("End")',exp:"End"},
  {q:"temp = 35 के लिए अगर temp > 30 हो तो Hot print कीजिए।",hint:"if temp > 30:",sol:'temp = 35\nif temp > 30:\n    print("Hot")',exp:"Hot"},
  {q:'s = "Python" के लिए अगर s == "Python" हो तो Match print कीजिए।',hint:'तुलना के लिए == इस्तेमाल कीजिए।',sol:'s = "Python"\nif s == "Python":\n    print("Match")',exp:"Match"}],
 quiz:[
  {q:"if statement किसलिए इस्तेमाल होता है?",o:["शर्त के आधार पर code चलाने के लिए","Text print करने के लिए","Comment के लिए","Variable बनाने के लिए"],a:0,w:"if शर्त सही होने पर ही code चलाता है।"},
  {q:"if की line के अंत में क्या लगता है?",o:["Colon (:)","Comma","Semicolon","कुछ नहीं"],a:0,w:"if की शर्त के बाद colon ज़रूरी है।"},
  {q:"शर्त गलत हो तो if के अंदर का code?",o:["नहीं चलता","चलता है","दो बार चलता है","Error देता है"],a:0,w:"शर्त False हो तो block skip हो जाता है।"},
  {q:"बराबर की जाँच के लिए कौन-सा चिह्न इस्तेमाल होता है?",o:["==","=","=>","!"],a:0,w:"== से तुलना होती है।"},
  {q:"if के अंदर का code कैसे लिखा जाता है?",o:["Indent करके","बिना indent के","Quotes में","Brackets में"],a:0,w:"if block को indent करना ज़रूरी है।"}]},
{title:"if-else Statement",
 concepts:[
  {h:"if-else",t:"अगर शर्त सही हो तो if वाला code चलता है, वरना else वाला code चलता है। else के बाद भी colon लगता है।",c:'n = 7\nif n % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',o:"Odd"}],
 coding:[
  {q:"n = 7 के लिए Even या Odd print कीजिए।",hint:"n % 2 == 0 से सम संख्या जाँचिए।",sol:'n = 7\nif n % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',exp:"Odd"},
  {q:"marks = 35 के लिए अगर marks >= 40 हो तो Pass, वरना Fail print कीजिए।",hint:"if और else दोनों चाहिए।",sol:'marks = 35\nif marks >= 40:\n    print("Pass")\nelse:\n    print("Fail")',exp:"Fail"},
  {q:"age = 16 के लिए Adult या Minor print कीजिए (18 या उससे ऊपर Adult)।",hint:"if age >= 18:",sol:'age = 16\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")',exp:"Minor"},
  {q:"x = 0 के लिए अगर x > 0 हो तो Positive, वरना Not positive print कीजिए।",hint:"else में Not positive print होगा।",sol:'x = 0\nif x > 0:\n    print("Positive")\nelse:\n    print("Not positive")',exp:"Not positive"},
  {q:"संख्या input लेकर Even या Odd print कीजिए। (Input: 8)",hint:"n = int(input())",inp:["8"],sol:'n = int(input())\nif n % 2 == 0:\n    print("Even")\nelse:\n    print("Odd")',exp:"Even"}],
 quiz:[
  {q:"else कब चलता है?",o:["जब if की शर्त गलत हो","जब if की शर्त सही हो","हमेशा","कभी नहीं"],a:0,w:"else तब चलता है जब if की शर्त गलत हो।"},
  {q:"if-else में कितने blocks में से एक चलता है?",o:["एक","दोनों","कोई नहीं","तीन"],a:0,w:"दोनों में से सिर्फ़ एक block चलता है।"},
  {q:"else के बाद क्या लगता है?",o:["Colon (:)","शर्त","Comma","Hash"],a:0,w:"else के बाद शर्त नहीं, सिर्फ़ colon लगता है।"},
  {q:"n = 9 के लिए n % 2 == 0 का result?",o:["False","True","9","Error"],a:0,w:"9 विषम संख्या है, इसलिए शेषफल 1 है।"},
  {q:"marks = 50 के लिए (marks >= 40) पर कौन-सा block चलेगा?",o:["if","else","दोनों","कोई नहीं"],a:0,w:"शर्त सही है, इसलिए if block चलेगा।"}]},
{title:"if-elif-else Ladder",
 concepts:[
  {h:"elif",t:"जब दो से ज़्यादा विकल्प हों तो elif इस्तेमाल करते हैं। Python ऊपर से नीचे शर्तें जाँचता है और पहली सही शर्त का block चलाकर बाकी छोड़ देता है।",c:'marks = 85\nif marks >= 90:\n    print("A")\nelif marks >= 75:\n    print("B")\nelse:\n    print("C")',o:"B"}],
 coding:[
  {q:"marks = 85: >=90 पर A, >=75 पर B, वरना C print कीजिए।",hint:"if, elif और else तीनों चाहिए।",sol:'marks = 85\nif marks >= 90:\n    print("A")\nelif marks >= 75:\n    print("B")\nelse:\n    print("C")',exp:"B"},
  {q:"n = 0 के लिए Positive, Negative या Zero print कीजिए।",hint:"n > 0, n < 0, वरना Zero।",sol:'n = 0\nif n > 0:\n    print("Positive")\nelif n < 0:\n    print("Negative")\nelse:\n    print("Zero")',exp:"Zero"},
  {q:"marks input लेकर: >=90 A, >=75 B, >=50 C, वरना Fail print कीजिए। (Input: 72)",hint:"दो elif लगेंगे।",inp:["72"],sol:'marks = int(input())\nif marks >= 90:\n    print("A")\nelif marks >= 75:\n    print("B")\nelif marks >= 50:\n    print("C")\nelse:\n    print("Fail")',exp:"C"},
  {q:"temp = 15: <10 पर Cold, <25 पर Normal, वरना Hot print कीजिए।",hint:"if, elif, else।",sol:'temp = 15\nif temp < 10:\n    print("Cold")\nelif temp < 25:\n    print("Normal")\nelse:\n    print("Hot")',exp:"Normal"},
  {q:"day = 3: 1 पर Mon, 2 पर Tue, 3 पर Wed, वरना Other print कीजिए।",hint:"दो elif चाहिए।",sol:'day = 3\nif day == 1:\n    print("Mon")\nelif day == 2:\n    print("Tue")\nelif day == 3:\n    print("Wed")\nelse:\n    print("Other")',exp:"Wed"}],
 quiz:[
  {q:"elif का पूरा रूप क्या है?",o:["else if","end if","else for","each if"],a:0,w:"elif का मतलब है else if।"},
  {q:"कई शर्तों में से Python कितने blocks चलाता है?",o:["सिर्फ़ पहला सही वाला","सभी","आखिरी वाला","कोई नहीं"],a:0,w:"पहली सही शर्त के बाद बाकी skip हो जाती हैं।"},
  {q:"elif की line के अंत में क्या लगता है?",o:["Colon (:)","Comma","Hash","कुछ नहीं"],a:0,w:"elif में भी शर्त के बाद colon लगता है।"},
  {q:"एक if-elif-else में else कितनी बार हो सकता है?",o:["एक बार","दो बार","कई बार","कभी नहीं"],a:0,w:"else सबसे आखिर में सिर्फ़ एक बार आता है।"},
  {q:"marks = 80 और (>=90 A, >=75 B, else C) पर output?",o:["B","A","C","Error"],a:0,w:"80 >= 90 गलत है, 80 >= 75 सही है, इसलिए B।"}]},
{title:"Nested Conditions",
 concepts:[
  {h:"Nested if",t:"एक if के अंदर दूसरा if लिखने को nested condition कहते हैं। हर अंदर का block और ज़्यादा indent होता है।",c:'age = 20\nhas_id = True\nif age >= 18:\n    if has_id:\n        print("Allowed")',o:"Allowed"}],
 coding:[
  {q:"age = 20 और has_id = True हो तो Allowed print कीजिए (nested if से)।",hint:"पहले age जाँचिए, उसके अंदर has_id।",sol:'age = 20\nhas_id = True\nif age >= 18:\n    if has_id:\n        print("Allowed")',exp:"Allowed"},
  {q:"n = 15: अगर n > 0 हो तो विषम होने पर Positive Odd, सम होने पर Positive Even print कीजिए।",hint:"बाहर n > 0, अंदर if-else।",sol:'n = 15\nif n > 0:\n    if n % 2 == 0:\n        print("Positive Even")\n    else:\n        print("Positive Odd")',exp:"Positive Odd"},
  {q:"age = 16: 18+ पर Adult, वरना 13+ पर Teen, वरना Child print कीजिए।",hint:"else के अंदर एक और if-else।",sol:'age = 16\nif age >= 18:\n    print("Adult")\nelse:\n    if age >= 13:\n        print("Teen")\n    else:\n        print("Child")',exp:"Teen"},
  {q:"x = 5 और y = 10: अगर x > 0 हो और उसके अंदर y > 0 हो तो Both positive print कीजिए।",hint:"दो nested if।",sol:'x = 5\ny = 10\nif x > 0:\n    if y > 0:\n        print("Both positive")',exp:"Both positive"},
  {q:"marks = 95 और attendance = 60: marks >= 40 हो और attendance >= 75 हो तो Pass, वरना Low attendance print कीजिए।",hint:"बाहर marks, अंदर attendance।",sol:'marks = 95\nattendance = 60\nif marks >= 40:\n    if attendance >= 75:\n        print("Pass")\n    else:\n        print("Low attendance")',exp:"Low attendance"}],
 quiz:[
  {q:"Nested if क्या है?",o:["if के अंदर if","दो अलग if","if के बाहर else","बिना शर्त का if"],a:0,w:"एक if के अंदर दूसरा if लिखना nested if कहलाता है।"},
  {q:"अंदर वाला if कितना indent होता है?",o:["बाहर वाले से ज़्यादा","बराबर","कम","कोई ज़रूरत नहीं"],a:0,w:"हर अंदर का block ज़्यादा indent होता है।"},
  {q:"बाहर की शर्त गलत हो तो अंदर का if?",o:["जाँचा ही नहीं जाता","जाँचा जाता है","दो बार जाँचा जाता है","Error देता है"],a:0,w:"बाहर की शर्त False हो तो पूरा block skip होता है।"},
  {q:"age = 15 पर (>=18 Adult, else >=13 Teen) का output?",o:["Teen","Adult","Child","Error"],a:0,w:"15 >= 18 गलत है, पर 15 >= 13 सही है।"},
  {q:"Nested conditions का फ़ायदा क्या है?",o:["एक शर्त के बाद दूसरी जाँच करना","Code छोटा करना","Error हटाना","Variable बनाना"],a:0,w:"एक शर्त पर आधारित दूसरी जाँच nested if से होती है।"}]},
{title:"Logical Conditions & Truth Values",
 concepts:[
  {h:"शर्तों में and, or",t:"and और or से कई शर्तें एक साथ जाँच सकते हैं।",c:'age = 25\nif age > 18 and age < 60:\n    print("Working age")',o:"Working age"},
  {h:"Truth values",t:"शर्त में हर value का True या False माना जाता है। 0, खाली text (\"\") और None को False माना जाता है, बाकी values True होती हैं।",c:'name = ""\nif name:\n    print("Has name")\nelse:\n    print("Empty")',o:"Empty"}],
 coding:[
  {q:"age = 25 पर अगर age > 18 और age < 60 हो तो Working age print कीजिए।",hint:"if age > 18 and age < 60:",sol:'age = 25\nif age > 18 and age < 60:\n    print("Working age")',exp:"Working age"},
  {q:"x = 7 पर अगर x < 5 या x > 6 हो तो Out print कीजिए।",hint:"or इस्तेमाल कीजिए।",sol:'x = 7\nif x < 5 or x > 6:\n    print("Out")',exp:"Out"},
  {q:"if 0: से Yes और else से No print कीजिए।",hint:"0 को False माना जाता है।",sol:'if 0:\n    print("Yes")\nelse:\n    print("No")',exp:"No"},
  {q:'name = "" के लिए अगर name में text हो तो Has name, वरना Empty print कीजिए।',hint:"खाली text False होता है।",sol:'name = ""\nif name:\n    print("Has name")\nelse:\n    print("Empty")',exp:"Empty"},
  {q:'bool("Python") print कीजिए।',hint:"खाली न होने वाला text True होता है।",sol:'print(bool("Python"))',exp:"True"}],
 quiz:[
  {q:"and में कब True मिलता है?",o:["जब दोनों शर्तें सही हों","जब एक सही हो","कभी नहीं","हमेशा"],a:0,w:"and के लिए दोनों शर्तें सही होनी चाहिए।"},
  {q:"or में कब True मिलता है?",o:["जब कम से कम एक शर्त सही हो","जब दोनों गलत हों","कभी नहीं","हमेशा"],a:0,w:"or में एक भी शर्त सही हो तो काफ़ी है।"},
  {q:"नीचे में से कौन-सी value False मानी जाती है?",o:["0","\"Hi\"","5","True"],a:0,w:"0 को False माना जाता है।"},
  {q:"खाली string \"\" को शर्त में क्या माना जाता है?",o:["False","True","Error","None"],a:0,w:"खाली string False मानी जाती है।"},
  {q:"bool(\"Hi\") का result क्या है?",o:["True","False","Hi","Error"],a:0,w:"खाली न होने वाला text True होता है।"}]},
{title:"Conditional Expressions",
 concepts:[
  {h:"एक line की शर्त",t:"if-else को एक ही line में लिखने के लिए conditional expression होता है: value1 if शर्त else value2।",c:'n = 4\nr = "Even" if n % 2 == 0 else "Odd"\nprint(r)',o:"Even"},
  {h:"सीधे print में",t:"Conditional expression को सीधे print() के अंदर भी लिख सकते हैं।",c:'age = 15\nprint("Adult" if age >= 18 else "Minor")',o:"Minor"}],
 coding:[
  {q:'n = 4 के लिए r में एक line में Even या Odd रखकर print कीजिए।',hint:'r = "Even" if n % 2 == 0 else "Odd"',sol:'n = 4\nr = "Even" if n % 2 == 0 else "Odd"\nprint(r)',exp:"Even"},
  {q:"age = 15 के लिए सीधे print में Adult या Minor दिखाइए।",hint:'print("Adult" if age >= 18 else "Minor")',sol:'age = 15\nprint("Adult" if age >= 18 else "Minor")',exp:"Minor"},
  {q:"a = 3 और b = 9 में से बड़ी संख्या print कीजिए (conditional expression से)।",hint:"a if a > b else b",sol:"a = 3\nb = 9\nprint(a if a > b else b)",exp:"9"},
  {q:"x = -5 के लिए Positive या Not positive print कीजिए।",hint:'"Positive" if x > 0 else "Not positive"',sol:'x = -5\nprint("Positive" if x > 0 else "Not positive")',exp:"Not positive"},
  {q:"marks = 60 के लिए status में Pass (>= 40) या Fail रखकर print कीजिए।",hint:'status = "Pass" if marks >= 40 else "Fail"',sol:'marks = 60\nstatus = "Pass" if marks >= 40 else "Fail"\nprint(status)',exp:"Pass"}],
 quiz:[
  {q:"Conditional expression का सही रूप कौन-सा है?",o:["value1 if शर्त else value2","if शर्त: value1","शर्त ? value1 : value2","value1 or value2"],a:0,w:"Python में value1 if शर्त else value2 लिखा जाता है।"},
  {q:'"A" if 5 > 3 else "B" का result क्या है?',o:["A","B","True","Error"],a:0,w:"शर्त सही है, इसलिए पहली value मिलती है।"},
  {q:'"A" if 1 > 3 else "B" का result क्या है?',o:["B","A","False","Error"],a:0,w:"शर्त गलत है, इसलिए else वाली value मिलती है।"},
  {q:"Conditional expression का फ़ायदा क्या है?",o:["if-else को एक line में लिखना","Error हटाना","Loop बनाना","File खोलना"],a:0,w:"छोटे if-else को एक line में लिखा जा सकता है।"},
  {q:"a = 3, b = 9 पर (a if a > b else b) का result?",o:["9","3","12","Error"],a:0,w:"3 > 9 गलत है, इसलिए b यानी 9 मिलता है।"}]}
]};

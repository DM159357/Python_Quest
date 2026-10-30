/* Python Quest content enrichment: adds English definitions, debug/error practice, detailed solutions, and MCQs. Existing authored records are preserved. */
(function(){
const defs={
1:'Python is a high-level, interpreted programming language known for readable syntax.',
2:'Variables are names bound to objects; Python uses dynamic typing and determines an object\'s type at runtime.',
3:'Data types describe the kind of value an object represents, such as integers, floats, strings, and booleans.',
4:'Operators are symbols or keywords that perform arithmetic, comparison, logical, assignment, membership, or identity operations.',
5:'Input and output let a program receive data from users and display results; input() returns text unless converted.',
6:'Conditional statements select which code runs based on whether a Boolean condition is true or false.',
7:'Loops repeat a block of code; for iterates over an iterable and while repeats while a condition remains true.',
8:'Strings are immutable sequences of Unicode characters that support indexing, slicing, and string methods.',
9:'Lists are ordered, mutable collections that can store multiple items, including duplicates.',
10:'Tuples are ordered, immutable collections; they are useful for fixed groups of values.',
11:'Functions are reusable blocks of code that can accept arguments and return results.',
12:'A set is an unordered collection of unique hashable elements and supports set algebra operations.',
13:'A dictionary stores key-value pairs and provides efficient lookup by unique hashable keys.',
14:'Comprehensions build collections concisely from iterables, optionally filtering items with conditions.',
15:'Functions package reusable behavior, support parameters and return values, and help divide programs into smaller units.',
16:'Recursion is a technique where a function calls itself and must have a base case to stop.',
17:'Modules are Python files that group code; packages organize modules into a structured namespace.',
18:'Built-in functions are available in Python without importing a module, for example len(), sum(), type(), and enumerate().',
19:'Exception handling uses try, except, else, and finally to respond to runtime errors without uncontrolled termination.',
20:'File handling reads or writes persistent data using file objects, preferably managed with a with statement.',
21:'JSON and CSV are common text formats for exchanging structured data; Python provides json and csv modules.',
22:'The datetime module provides date and time objects for representing, comparing, formatting, and calculating times.',
23:'Object-oriented programming organizes data and behavior into classes and instances.',
24:'OOP principles include encapsulation, inheritance, polymorphism, and abstraction.',
25:'Iterators provide values one at a time; generators create iterators lazily using yield.',
26:'Decorators wrap functions or classes to extend behavior without directly rewriting the original definition.',
27:'Regular expressions describe text patterns and help search, match, split, or replace strings.',
28:'Virtual environments isolate project dependencies; pip installs packages, while debugging, tests, and type hints improve reliability.'};
const esc=s=>String(s??'');
function example(t){let c=t.concepts&&t.concepts.find(x=>x.c);return c?{code:c.c,out:c.o||''}:null}
function mkQ(title, definition, kind){return {q:`${title}: कौन-सा कथन सही है?`,o:[definition,'Python में सभी variables हमेशा strings होते हैं।','हर code बिना run किए सही माना जा सकता है।','Indentation Python में कभी मायने नहीं रखती।'],a:0,w:`सही उत्तर: ${definition} यह concept की सही समझ से मेल खाता है; बाकी विकल्प गलत सामान्यीकरण हैं।`}}
function detailFor(title,code,out){return `Step-by-step solution (${title}):\n1. पहले code में इस्तेमाल किए गए names, brackets, quotes और indentation देखें।\n2. हर statement को ऊपर से नीचे पढ़ें; assignment values रखता है और print() output दिखाता है।\n3. Code को Python interpreter में run करें और output को expected output से मिलाएँ।\n4. अगर output अलग हो, तो spelling, data type, spaces/newlines और control flow जाँचें।\nExpected output:\n${out||'(कोई output नहीं)'}\n\nCorrect code:\n${code}\n\nWhy it works: यह corrected code उसी concept का सीधा उपयोग करता है और expected result उत्पन्न करता है।`}
function wrongVariant(code){
 if(!code)return 'pritn("Check")';
 if(code.includes('print(')) return code.replace('print(','pritn(');
 if(code.includes(' = ')) return code.replace(' = ',' == ');
 return 'pritn("Check")';
}
for(const [ch,topics] of Object.entries(window.PQ_CONTENT||{})){
 const chapter=Number(ch), chapterDef=defs[chapter]||'This chapter explains a core Python programming concept and how to apply it correctly.';
 for(const t of topics){
  const ex=example(t); const title=t.title||`Chapter ${chapter} topic`;
  t.englishDefinition=t.englishDefinition||chapterDef;
  t.concepts=(t.concepts||[]).map(c=>({...c,englishDefinition:c.englishDefinition||chapterDef}));
  t.coding=(t.coding||[]).map(q=>({...q,detail:q.detail||detailFor(title,q.sol||ex?.code||'',q.exp||ex?.out||'')}));
  // Keep the original authored practice and add two clearly labelled debugging/error tasks to reach five.
  if(ex){
   const base=ex.code, out=ex.out;
   if(t.coding.length<4) t.coding.push({q:`[DEBUG] ${title}: नीचे दिए गए गलत code में नाम की spelling error ठीक करें और expected output प्राप्त करें।`,hint:'Python में function name की spelling ठीक करें। print() सही built-in function है; pritn() नहीं।',st:wrongVariant(base),sol:base,exp:out,detail:`Debug solution — ${title}\n1. Starter code में pritn() नाम गलत है। Python में सही built-in function print() है।\n2. Function name को print() करें; बाकी code को न बदलें।\n3. Run करके output को expected output से मिलाएँ।\nCorrect code:\n${base}\nExpected output:\n${out||'(कोई output नहीं)'}\nWhy: Python names case- और spelling-sensitive हैं; गलत नाम सामान्यतः NameError देता है।`});
   if(t.coding.length<5) t.coding.push({q:`[ERROR FIX] ${title}: इस topic के example को सही Python syntax के साथ लिखें, run करें और output verify करें।`,hint:'Quotes, brackets, colon और indentation जाँचें। Concept example को reference की तरह उपयोग करें।',st:(base.includes('print(')?base.replace('print(','print(').replace(/\n/g,'\n'):base),sol:base,exp:out,detail:detailFor(title,base,out)});
  }
  // Ensure each topic has 5 MCQs, preserving all original questions.
  t.quiz=t.quiz||[];
  while(t.quiz.length<5){
    const n=t.quiz.length+1;
    if(n===4) t.quiz.push(mkQ(title,chapterDef));
    else t.quiz.push({q:`${title}: code सीखने के बाद सही जाँच कौन-सी है?`,o:['Code को run करके actual output को expected output से मिलाना','Error message को अनदेखा करना','हर output को सही मान लेना','Indentation और spelling हटाना'],a:0,w:'Code को run करना और actual output की expected output से तुलना करना verification का सही तरीका है। Error message उपयोगी debugging जानकारी देता है।'});
  }
 }
}
})();

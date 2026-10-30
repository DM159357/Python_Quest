const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const missions = [
 {id:1,title:"Welcome, Coder!",icon:"🧭",xp:10,kind:"learn",desc:"Meet Python and learn what a program is.",lesson:"Python is a programming language: you write instructions and the computer follows them. In this quest, you will learn by experimenting, not memorizing.",example:'print("Hello, Python Quest!")',task:"Read the lesson, then mark this mission complete.",hint:"A program is a set of instructions for a computer."},
 {id:2,title:"Output Oracle",icon:"🔮",xp:15,kind:"quiz",desc:"Predict what print() will show.",lesson:"The print() function displays information on the screen. Text goes inside quotation marks.",example:'print("Hello!")',task:"Choose the exact output of the code.",hint:"Look at the characters inside the quotation marks.",question:'print("Python rocks!")',options:["Python rocks!","print(Python rocks!)","Python","Error"],answer:0,why:"Correct! print() displays the text inside the quotes, without the quotes."},
 {id:3,title:"Code Builder",icon:"🧱",xp:15,kind:"builder",desc:"Choose the right line to display a message.",lesson:"To display text, use print() and wrap text in quotes. Parentheses and quotation marks matter.",example:'print("Ready to code!")',task:"Select the valid Python line.",hint:"Python needs print, parentheses, and quotes around text.",options:['print("Ready to code!")','print Ready to code!','Print("Ready to code!")'],answer:0,why:"Great build! Python's built-in function is lowercase print()."},
 {id:4,title:"First Program",icon:"💻",xp:25,kind:"code",desc:"Run your own Python program in the Coding Arena.",lesson:"Now you are the programmer. Write a program that prints the required message, run it, and inspect the output.",example:'print("Hello, Python Quest!")',task:'Make the terminal display exactly: Hello, Python Quest!',hint:'Use print("Hello, Python Quest!")',codeReward:true},
 {id:5,title:"Boss Battle",icon:"👹",xp:35,kind:"boss",desc:"Complete the final challenge to clear Beginner Valley.",lesson:"Boss battles combine what you have learned. Read the code carefully, predict its output, and then complete the challenge.",example:'name = "Coder"\nprint("Welcome", name)',task:"Choose the output of the boss code.",hint:"print() displays both values with a space between them.",options:["WelcomeCoder","Welcome Coder","name Coder","Error"],answer:1,why:"Boss defeated! print() separates multiple arguments with a space by default."}
];

const chapters= [
{ id:1,title:"Python Basics",icon:"🌱",theme:"Starting Village",world:"World 1 · Python Basics",xp:50,certificate:false },
{ id:2,title:"Syntax & Comments",icon:"🪧",theme:"Syntax Bridge",world:"World 1 · Python Basics",xp:50 },
{ id:3,title:"Variables",icon:"📦",theme:"Variable Valley",world:"World 1 · Python Basics",xp:60 },
{ id:4,title:"Data Types & Type Casting",icon:"🔮",theme:"Type Forest",world:"World 1 · Python Basics",xp:60 },
{ id:5,title:"Input & Output",icon:"⌨️",theme:"First Milestone Castle",world:"World 1 · Python Basics",xp:75,certificate:true },
{ id:6,title:"Operators",icon:"⚙️",theme:"Operator Factory",world:"World 2 · Decisions & Loops",xp:60 },
{ id:7,title:"Conditional Statements",icon:"🚦",theme:"Decision Junction",world:"World 2 · Decisions & Loops",xp:70 },
{ id:8,title:"Loops",icon:"🔁",theme:"Looping River",world:"World 2 · Decisions & Loops",xp:75 },
{ id:9,title:"Strings",icon:"🔤",theme:"String Town",world:"World 3 · Data Structures",xp:70 },
{ id:10,title:"Lists",icon:"📋",theme:"List Garden",world:"World 3 · Data Structures",xp:80,certificate:true },
{ id:11,title:"Tuples",icon:"🔐",theme:"Tuple Cave",world:"World 3 · Data Structures",xp:60 },
{ id:12,title:"Sets",icon:"💎",theme:"Set Mines",world:"World 3 · Data Structures",xp:60 },
{ id:13,title:"Dictionaries",icon:"📚",theme:"Dictionary Library",world:"World 3 · Data Structures",xp:80 },
{ id:14,title:"Comprehensions",icon:"🧪",theme:"Comprehension Lab",world:"World 3 · Data Structures",xp:80 },
{ id:15,title:"Functions",icon:"🛠️",theme:"Function Workshop",world:"World 4 · Functions & Modules",xp:90,certificate:true },
{ id:16,title:"Recursion",icon:"🌀",theme:"Recursion Tower",world:"World 4 · Functions & Modules",xp:80 },
{ id:17,title:"Modules & Packages",icon:"📦",theme:"Module Market",world:"World 4 · Functions & Modules",xp:70 },
{ id:18,title:"Built-in Functions",icon:"🔧",theme:"Toolsmith Workshop",world:"World 4 · Functions & Modules",xp:70 },
{ id:19,title:"Exception Handling",icon:"🛡️",theme:"Error Protection Fort",world:"World 5 · Files & Exceptions",xp:80 },
{ id:20,title:"File Handling",icon:"🗃️",theme:"File Keeper Castle",world:"World 5 · Files & Exceptions",xp:90,certificate:true },
{ id:21,title:"JSON & CSV",icon:"📄",theme:"Data Exchange Port",world:"World 5 · Files & Exceptions",xp:80 },
{ id:22,title:"Date & Time",icon:"⏳",theme:"Time Tower",world:"World 5 · Files & Exceptions",xp:70 },
{ id:23,title:"Object-Oriented Programming (OOP)",icon:"🏛️",theme:"Object City",world:"World 6 · Object-Oriented Python",xp:100 },
{ id:24,title:"OOP Principles",icon:"🧱",theme:"Architecture Fortress",world:"World 6 · Object-Oriented Python",xp:100 },
{ id:25,title:"Iterators & Generators",icon:"🔄",theme:"Iteration Bridge",world:"World 7 · Advanced Core Python",xp:90 },
{ id:26,title:"Decorators",icon:"✨",theme:"Decorator Citadel",world:"World 7 · Advanced Core Python",xp:90,certificate:true },
{ id:27,title:"Regular Expressions",icon:"🔎",theme:"Pattern Detective",world:"World 7 · Advanced Core Python",xp:90 },
{ id:28,title:"Virtual Environments, pip, Debugging, Testing & Type Hints",icon:"🏆",theme:"Final Python Castle",world:"World 7 · Advanced Core Python",xp:150,final:true }
];

// =============================================
// PYTHON QUEST — COMPLETE 28 CHAPTER TOPIC MAP
// Part 1: Chapter-wise Topic Structure
// =============================================

const pythonQuestTopics = {

    1: {
        title: "Python Basics",
        topics: [
            "What is Python?",
            "Uses of Python",
            "Python Interpreter",
            "Interactive Shell",
            "Your First Python Program",
            "How Python Code Executes",
            "Python Program Structure",
            "Chapter 1 Revision",
            "Chapter 1 Test"
        ]
    },

    2: {
        title: "Syntax & Comments",
        topics: [
            "Python Syntax Rules",
            "Statements and Expressions",
            "Indentation",
            "Single-Line Comments",
            "Multi-Line Documentation",
            "Syntax Errors",
            "Reading Error Messages",
            "Chapter 2 Revision",
            "Chapter 2 Test"
        ]
    },

    3: {
        title: "Variables",
        topics: [
            "What is a Variable?",
            "Creating Variables",
            "Assigning Values",
            "Variable Naming Rules",
            "Multiple Assignment",
            "Reassigning Variables",
            "Variable Scope Introduction",
            "Chapter 3 Revision",
            "Chapter 3 Test"
        ]
    },

    4: {
        title: "Data Types & Type Casting",
        topics: [
            "What is a Data Type?",
            "Integer and Float",
            "String and Boolean",
            "Checking Types with type()",
            "Type Conversion",
            "Implicit Type Conversion",
            "Explicit Type Casting",
            "Common Type Errors",
            "Chapter 4 Revision",
            "Chapter 4 Test"
        ]
    },

    5: {
        title: "Input & Output",
        topics: [
            "Using print()",
            "Using input()",
            "Input as a String",
            "Converting User Input",
            "Multiple Values in Output",
            "print() Separators",
            "print() End Parameter",
            "Formatted Output Introduction",
            "Chapter 5 Revision",
            "Chapter 5 Test"
        ]
    },

    6: {
        title: "Operators",
        topics: [
            "Arithmetic Operators",
            "Comparison Operators",
            "Assignment Operators",
            "Logical Operators",
            "Identity Operators",
            "Membership Operators",
            "Operator Precedence",
            "Expressions and Evaluation",
            "Chapter 6 Revision",
            "Chapter 6 Test"
        ]
    },

    7: {
        title: "Conditional Statements",
        topics: [
            "Decision Making",
            "if Statement",
            "if-else Statement",
            "if-elif-else",
            "Nested Conditions",
            "Logical Conditions",
            "Truth Values in Conditions",
            "Conditional Expressions",
            "Chapter 7 Revision",
            "Chapter 7 Test"
        ]
    },

    8: {
        title: "Loops",
        topics: [
            "Introduction to Loops",
            "while Loop",
            "for Loop",
            "range() Function",
            "Looping Through Strings",
            "Looping Through Lists",
            "break Statement",
            "continue Statement",
            "pass Statement",
            "Nested Loops",
            "Loop else Clause",
            "Chapter 8 Revision",
            "Chapter 8 Test"
        ]
    },

    9: {
        title: "Strings",
        topics: [
            "Creating Strings",
            "String Indexing",
            "String Slicing",
            "String Immutability",
            "String Length",
            "Case Conversion Methods",
            "Searching in Strings",
            "Replacing Text",
            "Splitting and Joining",
            "String Formatting",
            "String Methods Practice",
            "Chapter 9 Revision",
            "Chapter 9 Test"
        ]
    },

    10: {
        title: "Lists",
        topics: [
            "Introduction to Lists",
            "Creating Lists",
            "List Indexing",
            "List Slicing",
            "Updating List Elements",
            "append() and extend()",
            "insert() and remove()",
            "pop() and clear()",
            "Sorting and Reversing",
            "Looping Through Lists",
            "Nested Lists",
            "List Copying",
            "Chapter 10 Revision",
            "Chapter 10 Test"
        ]
    },

    11: {
        title: "Tuples",
        topics: [
            "Introduction to Tuples",
            "Creating Tuples",
            "Tuple Indexing and Slicing",
            "Tuple Immutability",
            "Single-Item Tuples",
            "Packing and Unpacking",
            "Tuple Methods",
            "Tuple vs List",
            "Chapter 11 Revision",
            "Chapter 11 Test"
        ]
    },

    12: {
        title: "Sets",
        topics: [
            "Introduction to Sets",
            "Creating Sets",
            "Unique Elements",
            "Adding and Removing Elements",
            "Union",
            "Intersection",
            "Difference",
            "Symmetric Difference",
            "Subset and Superset",
            "Set Operations Practice",
            "Chapter 12 Revision",
            "Chapter 12 Test"
        ]
    },

    13: {
        title: "Dictionaries",
        topics: [
            "Introduction to Dictionaries",
            "Creating Dictionaries",
            "Accessing Values",
            "Adding and Updating Items",
            "Removing Items",
            "Dictionary Keys and Values",
            "items() Method",
            "Looping Through Dictionaries",
            "Nested Dictionaries",
            "Dictionary Methods",
            "Dictionary Practice",
            "Chapter 13 Revision",
            "Chapter 13 Test"
        ]
    },

    14: {
        title: "Comprehensions",
        topics: [
            "What is a Comprehension?",
            "List Comprehensions",
            "Comprehension with Conditions",
            "Nested List Comprehensions",
            "Set Comprehensions",
            "Dictionary Comprehensions",
            "Comprehensions vs Loops",
            "Readable Comprehensions",
            "Chapter 14 Revision",
            "Chapter 14 Test"
        ]
    },

    15: {
        title: "Functions",
        topics: [
            "What is a Function?",
            "Defining Functions",
            "Calling Functions",
            "Parameters and Arguments",
            "return Statement",
            "Default Parameters",
            "Keyword Arguments",
            "Positional Arguments",
            "Variable-Length Arguments",
            "Keyword Variable Arguments",
            "Local and Global Scope",
            "Lambda Functions",
            "Chapter 15 Revision",
            "Chapter 15 Test"
        ]
    },

    16: {
        title: "Recursion",
        topics: [
            "What is Recursion?",
            "Base Case",
            "Recursive Case",
            "Call Stack Introduction",
            "Factorial Using Recursion",
            "Fibonacci Using Recursion",
            "Recursion vs Loops",
            "Common Recursion Errors",
            "Chapter 16 Revision",
            "Chapter 16 Test"
        ]
    },

    17: {
        title: "Modules & Packages",
        topics: [
            "What is a Module?",
            "import Statement",
            "Importing Specific Names",
            "Aliases with as",
            "Creating Your Own Module",
            "Module Search Path",
            "What is a Package?",
            "Package Structure",
            "Standard Library Introduction",
            "Chapter 17 Revision",
            "Chapter 17 Test"
        ]
    },

    18: {
        title: "Built-in Functions",
        topics: [
            "len()",
            "type() and isinstance()",
            "sum(), min() and max()",
            "abs() and round()",
            "sorted() and reversed()",
            "enumerate()",
            "zip()",
            "any() and all()",
            "map() and filter()",
            "range() and print() Review",
            "Chapter 18 Revision",
            "Chapter 18 Test"
        ]
    },

    19: {
        title: "Exception Handling",
        topics: [
            "Errors and Exceptions",
            "SyntaxError vs Runtime Error",
            "try and except",
            "Handling Multiple Exceptions",
            "else Clause",
            "finally Clause",
            "raise Statement",
            "Creating Custom Exceptions",
            "Exception Handling Practice",
            "Chapter 19 Revision",
            "Chapter 19 Test"
        ]
    },

    20: {
        title: "File Handling",
        topics: [
            "File Handling Introduction",
            "Opening Files",
            "Reading Files",
            "Writing Files",
            "Appending to Files",
            "File Modes",
            "with Statement",
            "File Paths",
            "Working with Text Files",
            "Handling File Errors",
            "Chapter 20 Revision",
            "Chapter 20 Test"
        ]
    },

    21: {
        title: "JSON & CSV",
        topics: [
            "Structured Data Introduction",
            "JSON Format",
            "json.loads() and json.dumps()",
            "Reading JSON Files",
            "Writing JSON Files",
            "CSV Format",
            "Reading CSV Files",
            "Writing CSV Files",
            "JSON vs CSV",
            "Chapter 21 Revision",
            "Chapter 21 Test"
        ]
    },

    22: {
        title: "Date & Time",
        topics: [
            "Date and Time Introduction",
            "datetime Module",
            "Current Date and Time",
            "Creating Date Objects",
            "Formatting Dates",
            "Parsing Date Strings",
            "Timedelta",
            "Date Calculations",
            "Chapter 22 Revision",
            "Chapter 22 Test"
        ]
    },

    23: {
        title: "Object-Oriented Programming (OOP)",
        topics: [
            "OOP Introduction",
            "Classes and Objects",
            "Creating a Class",
            "Creating Objects",
            "__init__() Method",
            "self Parameter",
            "Instance Attributes",
            "Instance Methods",
            "Class Attributes",
            "Class Methods",
            "Static Methods",
            "Chapter 23 Revision",
            "Chapter 23 Test"
        ]
    },

    24: {
        title: "OOP Principles",
        topics: [
            "Encapsulation",
            "Abstraction",
            "Inheritance",
            "Single Inheritance",
            "Multilevel Inheritance",
            "Multiple Inheritance",
            "Method Overriding",
            "Polymorphism",
            "super() Function",
            "Composition",
            "Chapter 24 Revision",
            "Chapter 24 Test"
        ]
    },

    25: {
        title: "Iterators & Generators",
        topics: [
            "Iterable vs Iterator",
            "iter() and next()",
            "StopIteration",
            "Creating Custom Iterators",
            "Generator Functions",
            "yield Statement",
            "Generator Expressions",
            "Lazy Evaluation",
            "Iterators vs Generators",
            "Chapter 25 Revision",
            "Chapter 25 Test"
        ]
    },

    26: {
        title: "Decorators",
        topics: [
            "Decorator Introduction",
            "Functions as Objects",
            "Nested Functions",
            "Returning Functions",
            "Passing Functions as Arguments",
            "Creating a Basic Decorator",
            "The @ Syntax",
            "functools.wraps",
            "Decorators with Arguments",
            "Chapter 26 Revision",
            "Chapter 26 Test"
        ]
    },

    27: {
        title: "Regular Expressions",
        topics: [
            "Regular Expressions Introduction",
            "re Module",
            "Literal Character Matching",
            "Character Classes",
            "Quantifiers",
            "Anchors",
            "Groups",
            "search(), match() and fullmatch()",
            "findall() and sub()",
            "Email and Phone Validation",
            "Chapter 27 Revision",
            "Chapter 27 Test"
        ]
    },

    28: {
        title: "Virtual Environments, pip, Debugging, Testing & Type Hints",
        topics: [
            "Virtual Environment Introduction",
            "Creating a Virtual Environment",
            "Activating and Deactivating",
            "Installing Packages with pip",
            "Requirements Files",
            "Debugging Introduction",
            "Reading Tracebacks",
            "Using print() for Debugging",
            "Testing with assert",
            "Unit Testing Introduction",
            "Type Hints",
            "Final Revision",
            "Final Python Quest Test"
        ]
    }

};


// =============================================
// CHECK TOPIC DATA
// =============================================

function getChapterTopics(chapterId) {
    return pythonQuestTopics[chapterId]?.topics || [];
}

function getTopicCount(chapterId) {
    return getChapterTopics(chapterId).length;
}

console.log(
    "Python Quest: Topic structure loaded for",
    Object.keys(pythonQuestTopics).length,
    "chapters."
);

// ======================================
// PYTHON QUEST — TOPIC ADVENTURE SYSTEM
// ======================================

// Current chapter and topic
let currentChapterId = 1;
let currentTopicIndex = 0;

// Topic progress saved in browser
let completedTopics = JSON.parse(
    localStorage.getItem("pq_completed_topics") || "[]"
);


// ======================================
// CHAPTER TOPICS
// हर Chapter के अंदर छोटे-छोटे Topics
// ======================================

const chapterTopics = {

    1: [
        {
            title: "What is Python?",
            concept: "Python एक programming language है। इसका उपयोग computer को instructions देने के लिए किया जाता है।",
            syntax: 'print("Hello, World!")',
            example: 'print("Hello, World!")',
            output: "Hello, World!",
            task: 'ऐसा Python code लिखिए जो "Welcome to Python Quest!" print करे।',
            starterCode: 'print("Welcome to Python Quest!")',
            expectedOutput: "Welcome to Python Quest!",
            question: "Python का मुख्य उपयोग क्या है?",
            options: [
                "Computer को instructions देना",
                "केवल फोटो एडिट करना",
                "केवल वीडियो चलाना"
            ],
            answer: 0
        },

        {
            title: "Your First Python Program",
            concept: "Python program instructions का एक समूह होता है। Python सामान्यतः statements को ऊपर से नीचे execute करता है।",
            syntax: 'print("Your message")',
            example: 'print("I am learning Python")',
            output: "I am learning Python",
            task: 'अपना नाम print करने वाला program लिखिए।',
            starterCode: 'print("D.K. Munna")',
            expectedOutput: "D.K. Munna",
            question: "Python में output दिखाने के लिए कौन-सा function इस्तेमाल होता है?",
            options: [
                "display_text()",
                "print()",
                "show_output()"
            ],
            answer: 1
        },

        {
            title: "Python Interactive Shell",
            concept: "Interactive Shell में आप Python expressions को तुरंत execute करके उनका result देख सकते हैं।",
            syntax: "2 + 3",
            example: "10 + 5",
            output: "15",
            task: "ऐसा expression लिखिए जिसका result 25 हो।",
            starterCode: "20 + 5",
            expectedOutput: "25",
            question: "Interactive Shell का उपयोग किसलिए किया जाता है?",
            options: [
                "Python expressions को जल्दी test करने के लिए",
                "केवल PDF बनाने के लिए",
                "केवल websites देखने के लिए"
            ],
            answer: 0
        },

        {
            title: "Python Statements",
            concept: "Python statement एक instruction होता है। एक program में कई statements हो सकते हैं।",
            syntax: 'print("First")\nprint("Second")',
            example: 'print("Start")\nprint("Finish")',
            output: "Start\nFinish",
            task: 'दो अलग-अलग lines में Start और Finish print कीजिए।',
            starterCode: 'print("Start")\nprint("Finish")',
            expectedOutput: "Start\nFinish",
            question: "सामान्य Python script में statements किस क्रम में execute होते हैं?",
            options: [
                "ऊपर से नीचे",
                "नीचे से ऊपर",
                "हमेशा random क्रम में"
            ],
            answer: 0
        },

        {
            title: "Chapter 1 Review",
            concept: "अब तक आपने Python, print(), statements और basic program execution सीखा है।",
            syntax: 'print("Python Quest")',
            example: 'print(10 + 20)',
            output: "30",
            task: "10 और 20 का sum print कीजिए।",
            starterCode: "print(10 + 20)",
            expectedOutput: "30",
            question: "print(10 + 20) का output क्या होगा?",
            options: [
                "1020",
                "30",
                "10 + 20"
            ],
            answer: 1
        }
    ],

    2: [
        {
            title: "Python Syntax",
            concept: "Syntax का अर्थ है Python code लिखने के नियम।",
            syntax: 'print("Hello")',
            example: 'print("Syntax")',
            output: "Syntax",
            task: '"Python Syntax" print कीजिए।',
            starterCode: 'print("Python Syntax")',
            expectedOutput: "Python Syntax",
            question: "Syntax क्या बताता है?",
            options: [
                "Code लिखने के नियम",
                "Computer की कीमत",
                "Internet की speed"
            ],
            answer: 0
        },

        {
            title: "Indentation",
            concept: "Python में indentation का उपयोग code blocks को व्यवस्थित करने के लिए होता है।",
            syntax: 'if True:\n    print("Hello")',
            example: 'if True:\n    print("Correct")',
            output: "Correct",
            task: 'एक if block बनाकर "Correct" print कीजिए।',
            starterCode: 'if True:\n    print("Correct")',
            expectedOutput: "Correct",
            question: "Python में indentation महत्वपूर्ण क्यों है?",
            options: [
                "Code blocks पहचानने के लिए",
                "File का रंग बदलने के लिए",
                "XP अपने आप बढ़ाने के लिए"
            ],
            answer: 0
        },

        {
            title: "Comments",
            concept: "Python में # से शुरू होने वाला single-line comment execution के दौरान code की तरह नहीं चलता।",
            syntax: "# This is a comment",
            example: '# Learning Python\nprint("Learn")',
            output: "Learn",
            task: 'एक comment लिखकर "Learn" print कीजिए।',
            starterCode: '# My first comment\nprint("Learn")',
            expectedOutput: "Learn",
            question: "Single-line comment के लिए कौन-सा symbol उपयोग होता है?",
            options: [
                "//",
                "#",
                "**"
            ],
            answer: 1
        },

        {
            title: "Syntax Errors",
            concept: "जब code Python के syntax rules का पालन नहीं करता, तो SyntaxError हो सकता है।",
            syntax: 'print("Hello")',
            example: 'print("Correct")',
            output: "Correct",
            task: 'सही syntax से "Correct" print कीजिए।',
            starterCode: 'print("Correct")',
            expectedOutput: "Correct",
            question: "बंद न किया गया parenthesis किस समस्या का कारण बन सकता है?",
            options: [
                "SyntaxError",
                "Automatic certificate",
                "New variable"
            ],
            answer: 0
        },

        {
            title: "Chapter 2 Review",
            concept: "इस chapter में syntax, indentation, comments और syntax errors की बुनियाद सीखी।",
            syntax: '# Comment\nprint("Ready")',
            example: '# Start\nprint("Ready")',
            output: "Ready",
            task: 'एक comment और print statement लिखिए।',
            starterCode: '# My program\nprint("Ready")',
            expectedOutput: "Ready",
            question: "Python comment का सामान्य उद्देश्य क्या है?",
            options: [
                "Code को समझाने में मदद करना",
                "हर program को automatic तेज करना",
                "हर error को मिटाना"
            ],
            answer: 0
        }
    ],

    3: [
        {
            title: "What is a Variable?",
            concept: "Variable एक नाम है जिसके माध्यम से किसी value को refer किया जा सकता है।",
            syntax: "score = 10",
            example: "score = 10\nprint(score)",
            output: "10",
            task: "age नाम का variable बनाकर 20 print कीजिए।",
            starterCode: "age = 20\nprint(age)",
            expectedOutput: "20",
            question: "Python में value assign करने के लिए कौन-सा operator इस्तेमाल होता है?",
            options: [
                "=",
                "==",
                "!="
            ],
            answer: 0
        },

        {
            title: "Assigning Values",
            concept: "Assignment के माध्यम से variable को value दी जाती है।",
            syntax: "points = 100",
            example: "points = 100\nprint(points)",
            output: "100",
            task: "marks में 85 store करके उसे print कीजिए।",
            starterCode: "marks = 85\nprint(marks)",
            expectedOutput: "85",
            question: "marks = 85 का क्या अर्थ है?",
            options: [
                "marks में 85 assign करना",
                "85 को marks से compare करना",
                "marks को delete करना"
            ],
            answer: 0
        },

        {
            title: "Variable Naming",
            concept: "Variable names में letters, digits और underscores हो सकते हैं, लेकिन नाम digit से शुरू नहीं हो सकता।",
            syntax: "student_name = 'Munna'",
            example: 'student_name = "Munna"\nprint(student_name)',
            output: "Munna",
            task: "student_name variable में Munna रखकर print कीजिए।",
            starterCode: 'student_name = "Munna"\nprint(student_name)',
            expectedOutput: "Munna",
            question: "इनमें से कौन-सा valid variable name है?",
            options: [
                "2marks",
                "student_name",
                "student-name"
            ],
            answer: 1
        },

        {
            title: "Updating Variables",
            concept: "किसी variable को बाद में नई value assign की जा सकती है।",
            syntax: "level = level + 1",
            example: "level = 1\nlevel = level + 1\nprint(level)",
            output: "2",
            task: "count को 3 से शुरू करके 4 कीजिए और print कीजिए।",
            starterCode: "count = 3\ncount = count + 1\nprint(count)",
            expectedOutput: "4",
            question: "x = 4 के बाद x = x + 2 हो, तो x की value क्या होगी?",
            options: [
                "4",
                "6",
                "2"
            ],
            answer: 1
        },

        {
            title: "Chapter 3 Review",
            concept: "Variable values को store करने और बाद में इस्तेमाल करने के लिए उपयोगी होते हैं।",
            syntax: "a = 5\nb = 7",
            example: "a = 5\nb = 7\nprint(a + b)",
            output: "12",
            task: "दो variables में 10 और 15 रखकर उनका sum print कीजिए।",
            starterCode: "a = 10\nb = 15\nprint(a + b)",
            expectedOutput: "25",
            question: "a = 10 और b = 15 हो, तो a + b कितना होगा?",
            options: [
                "1015",
                "25",
                "5"
            ],
            answer: 1
        }
    ]

};


// ======================================
// CHAPTER / TOPIC PROGRESS HELPERS
// ======================================

function isTopicCompleted(chapterId, topicIndex) {
    return completedTopics.includes(
        `${chapterId}:${topicIndex}`
    );
}


function isTopicUnlocked(chapterId, topicIndex) {

    // हर chapter का पहला topic unlock रहेगा,
    // लेकिन chapter को पहले unlock होना जरूरी है।
    if (topicIndex === 0) {
        return isChapterUnlocked(chapterId);
    }

    return isTopicCompleted(
        chapterId,
        topicIndex - 1
    );
}


function isChapterUnlocked(chapterId) {

    // Chapter 1 को existing starter missions के
    // पूरा होने पर खोलने की व्यवस्था बाद में जोड़ेंगे।
    if (chapterId === 1) {
        return true;
    }

    // पिछले chapter के सभी topics पूरे होने चाहिए।
    const previousTopics = chapterTopics[chapterId - 1];

    if (!previousTopics || previousTopics.length === 0) {
        return false;
    }

    return previousTopics.every((topic, index) =>
        isTopicCompleted(chapterId - 1, index)
    );
}


// ======================================
// OPEN CHAPTER TOPIC MAP
// ======================================

function openChapterTopicMap(chapterId) {

    const chapter = chapters.find(
        item => item.id === chapterId
    );

    if (!chapter) {
        console.error("Chapter not found:", chapterId);
        return;
    }

    if (!isChapterUnlocked(chapterId)) {
        alert("🔒 पहले पिछला Chapter पूरा कीजिए!");
        return;
    }

    currentChapterId = chapterId;

    document.getElementById("chapter-title").textContent =
        `Chapter ${chapter.id}: ${chapter.title}`;

    document.getElementById("chapter-level").textContent =
        `LEVEL ${chapter.id}`;

    document.getElementById("chapter-description").textContent =
        `${chapter.theme} — सभी Topics को क्रम से पूरा कीजिए।`;

    renderChapterTopicMap();

    showQuestPage("chapter-map-view");
}


// ======================================
// RENDER TOPIC ADVENTURE ROAD
// ======================================

function renderChapterTopicMap() {

    const topics = chapterTopics[currentChapterId] || [];

    const container = document.getElementById(
        "topic-adventure-map"
    );

    if (!container) return;

    container.innerHTML = "";

    topics.forEach((topic, index) => {

        const completed = isTopicCompleted(
            currentChapterId,
            index
        );

        const unlocked = isTopicUnlocked(
            currentChapterId,
            index
        );

        const node = document.createElement("div");

        node.className =
            "topic-node " +
            (completed
                ? "completed"
                : unlocked
                    ? "unlocked"
                    : "locked"
            ) +
            (index % 2 === 0 ? " left" : " right");

        const icon = completed
            ? "✓"
            : unlocked
                ? "🗺️"
                : "🔒";

        const buttonText = completed
            ? "Review Topic"
            : unlocked
                ? "Start Learning →"
                : "Locked";

        node.innerHTML = `
            <div class="topic-node-icon">
                ${icon}
            </div>

            <div class="topic-card">

                <h3>
                    Topic ${index + 1}: ${topic.title}
                </h3>

                <p>
                    ${
                        completed
                            ? "Completed ✓"
                            : unlocked
                                ? "Concept · Example · Practice"
                                : "पहले पिछला Topic पूरा करें"
                    }
                </p>

                <button
                    data-topic-index="${index}"
                    ${!unlocked && !completed ? "disabled" : ""}
                >
                    ${buttonText}
                </button>

            </div>
        `;

        container.appendChild(node);
    });

    // हर Topic के button पर click event
    container.querySelectorAll("[data-topic-index]")
        .forEach(button => {

            button.addEventListener("click", () => {

                const topicIndex = Number(
                    button.dataset.topicIndex
                );

                openTopicLearningPage(
                    currentChapterId,
                    topicIndex
                );

            });

        });

    updateTopicProgress();
}


// ======================================
// UPDATE TOPIC PROGRESS BAR
// ======================================

function updateTopicProgress() {

    const topics = chapterTopics[currentChapterId] || [];

    const completedCount = topics.filter(
        (_, index) => isTopicCompleted(
            currentChapterId,
            index
        )
    ).length;

    const total = topics.length;

    const percentage = total
        ? (completedCount / total) * 100
        : 0;

    document.getElementById(
        "topic-progress-text"
    ).textContent =
        `${completedCount} / ${total} Topics Completed`;

    document.getElementById(
        "topic-progress-bar"
    ).style.width = `${percentage}%`;
}


// ======================================
// OPEN SEPARATE TOPIC LEARNING PAGE
// ======================================

function openTopicLearningPage(chapterId, topicIndex) {

    const topics = chapterTopics[chapterId] || [];
    const topic = topics[topicIndex];

    if (!topic) {
        alert("इस Chapter का Topic Content अभी उपलब्ध नहीं है।");
        return;
    }

    if (
        !isTopicUnlocked(chapterId, topicIndex) &&
        !isTopicCompleted(chapterId, topicIndex)
    ) {
        alert("🔒 पहले पिछला Topic पूरा कीजिए!");
        return;
    }

    currentChapterId = chapterId;
    currentTopicIndex = topicIndex;

    document.getElementById(
        "learning-breadcrumb"
    ).textContent =
        `Chapter ${chapterId} / Topic ${topicIndex + 1}`;

    document.getElementById(
        "learning-topic-title"
    ).textContent = topic.title;

    document.getElementById(
        "learning-concept"
    ).textContent = topic.concept;

    document.getElementById(
        "learning-syntax"
    ).textContent = topic.syntax;

    document.getElementById(
        "learning-example"
    ).textContent = topic.example;

    document.getElementById(
        "learning-example-output"
    ).textContent = topic.output;

    document.getElementById(
        "coding-question"
    ).textContent = topic.task;

    document.getElementById(
        "python-code-editor"
    ).value = topic.starterCode;

    document.getElementById(
        "python-code-output"
    ).textContent = "आपका output यहाँ दिखाई देगा।";

    document.getElementById(
        "coding-feedback"
    ).textContent = "";

    document.getElementById(
        "objective-question"
    ).textContent = topic.question;

    document.getElementById(
        "objective-feedback"
    ).textContent = "";

    document.getElementById(
        "objective-options"
    ).innerHTML = "";

    topic.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "objective-option";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.addEventListener("click", () => {
            checkTopicObjective(index);
        });

        document.getElementById(
            "objective-options"
        ).appendChild(button);

    });

    const completeButton = document.getElementById(
        "complete-topic-button"
    );

    completeButton.disabled = true;

    completeButton.textContent =
        isTopicCompleted(chapterId, topicIndex)
            ? "Topic Already Completed ✓"
            : "Complete Topic & Unlock Next →";

    showQuestPage("topic-learning-view");
}


// ======================================
// RUN CODE
// ======================================

// यह function तब काम करेगा जब मौजूदा project में
// Pyodide पहले से load हो चुका हो।

async function runTopicPractice() {

    const editor = document.getElementById(
        "python-code-editor"
    );

    const output = document.getElementById(
        "python-code-output"
    );

    const feedback = document.getElementById(
        "coding-feedback"
    );

    const topic = chapterTopics[currentChapterId][
        currentTopicIndex
    ];

    try {

        if (!window.pyodide && typeof pyodide !== "undefined") {
            window.pyodide = pyodide;
        }

        if (!window.pyodide) {

            feedback.textContent =
                "Python engine अभी load नहीं हुआ है। पहले Pyodide loading setup जोड़ना होगा।";

            return;

        }

        output.textContent = "Running...";

        let capturedOutput = "";

        window.pyodide.setStdout({
            batched: text => {
                capturedOutput += text + "\n";
            }
        });

        await window.pyodide.runPythonAsync(
            editor.value
        );

        output.textContent =
            capturedOutput.trim() || "(No output)";

        if (
            output.textContent.trim() ===
            topic.expectedOutput.trim()
        ) {

            feedback.textContent =
                "✅ सही! अब नीचे Objective Question का उत्तर दीजिए।";

            feedback.style.color = "#22c55e";

            document.getElementById(
                "complete-topic-button"
            ).dataset.codePassed = "true";

        } else {

            feedback.textContent =
                "❌ Output अभी सही नहीं है। Code को फिर से जाँचिए।";

            feedback.style.color = "#f87171";

            document.getElementById(
                "complete-topic-button"
            ).dataset.codePassed = "false";

        }

    } catch (error) {

        output.textContent = error.message;

        feedback.textContent =
            "Code में error है। उसे ठीक करके फिर से Run कीजिए।";

        feedback.style.color = "#f87171";

    }

}


// ======================================
// CHECK OBJECTIVE ANSWER
// ======================================

function checkTopicObjective(selectedIndex) {

    const topic = chapterTopics[currentChapterId][
        currentTopicIndex
    ];

    const buttons = document.querySelectorAll(
        "#objective-options button"
    );

    buttons.forEach(button => {
        button.disabled = true;
    });

    const feedback = document.getElementById(
        "objective-feedback"
    );

    const correct = selectedIndex === topic.answer;

    if (correct) {

        feedback.textContent =
            "✅ सही उत्तर! आपने Objective Question पास कर लिया।";

        feedback.style.color = "#22c55e";

        document.getElementById(
            "complete-topic-button"
        ).dataset.quizPassed = "true";

    } else {

        feedback.textContent =
            `❌ सही उत्तर: ${topic.options[topic.answer]}`;

        feedback.style.color = "#f87171";

        buttons[topic.answer].classList.add("correct");

        document.getElementById(
            "complete-topic-button"
        ).dataset.quizPassed = "false";

    }

    if (correct) {
        buttons[selectedIndex].classList.add("correct");
    } else {
        buttons[selectedIndex].classList.add("wrong");
    }

    updateTopicCompletionButton();

}


// ======================================
// ENABLE COMPLETE TOPIC BUTTON
// ======================================

function updateTopicCompletionButton() {

    const button = document.getElementById(
        "complete-topic-button"
    );

    const codePassed =
        button.dataset.codePassed === "true";

    const quizPassed =
        button.dataset.quizPassed === "true";

    button.disabled = !(codePassed && quizPassed);

}


// ======================================
// COMPLETE TOPIC / UNLOCK NEXT
// ======================================

function completeCurrentTopic() {

    const button = document.getElementById(
        "complete-topic-button"
    );

    if (button.disabled) {
        alert("पहले Coding Practice और Objective Question पास कीजिए!");
        return;
    }

    const key =
        `${currentChapterId}:${currentTopicIndex}`;

    if (!completedTopics.includes(key)) {

        completedTopics.push(key);

        localStorage.setItem(
            "pq_completed_topics",
            JSON.stringify(completedTopics)
        );

    }

    const topics = chapterTopics[currentChapterId];

    const chapterCompleted = topics.every(
        (_, index) => isTopicCompleted(
            currentChapterId,
            index
        )
    );

    if (chapterCompleted) {

        alert(
            `🏆 Chapter ${currentChapterId} के सभी Topics पूरे हो गए!`
        );

    }

    renderChapterTopicMap();

    showQuestPage("chapter-map-view");

}


// ======================================
// PAGE NAVIGATION
// ======================================

// इन pages को अलग-अलग दिखाने के लिए यह function है।

function showQuestPage(pageId) {

    const pageIds = [
        "chapter-map-view",
        "topic-learning-view"
    ];

    pageIds.forEach(id => {

        const page = document.getElementById(id);

        if (page) {
            page.style.display =
                id === pageId ? "block" : "none";
        }

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ======================================
// BUTTON EVENTS
// ======================================

document.getElementById(
    "back-to-main-map"
).addEventListener("click", () => {

    // अपने existing project के मुख्य Adventure Map
    // वाले function को यहाँ connect करना होगा।

    if (typeof showView === "function") {
        showView("map");
    } else {
        alert("Main Map navigation को मौजूदा project से connect करना बाकी है।");
    }

});


document.getElementById(
    "back-to-topic-map"
).addEventListener("click", () => {

    renderChapterTopicMap();

    showQuestPage("chapter-map-view");

});


document.getElementById(
    "run-python-code"
).addEventListener("click", runTopicPractice);


document.getElementById(
    "reset-python-code"
).addEventListener("click", () => {

    const topic = chapterTopics[currentChapterId][
        currentTopicIndex
    ];

    document.getElementById(
        "python-code-editor"
    ).value = topic.starterCode;

    document.getElementById(
        "python-code-output"
    ).textContent = "आपका output यहाँ दिखाई देगा।";

    document.getElementById(
        "coding-feedback"
    ).textContent = "";

});


document.getElementById(
    "complete-topic-button"
).addEventListener("click", completeCurrentTopic);

const defaultState={playerName:"D.K. Munna",xp:0,completed:[],completedChapters:[],claimedCode:false,earned:[],streak:1,lastDate:new Date().toDateString(),quizWon:false,bugWon:false,builderWon:false};
let state=loadState(), pyodide=null, activeMission=null, currentGame=null, toastTimer;
function loadState(){
  try {
    const current = JSON.parse(localStorage.getItem("pythonQuestGameSave") || "null");
    if (current && typeof current === "object") {
      return {...defaultState, ...current, completed:Array.isArray(current.completed)?current.completed:[], completedChapters:Array.isArray(current.completedChapters)?current.completedChapters:[], earned:Array.isArray(current.earned)?current.earned:[]};
    }
    // Migrate basic profile/XP from the earlier Python Quest version if present.
    const old = JSON.parse(localStorage.getItem("pythonQuestSaveV1") || "null");
    if (old && typeof old === "object") {
      return {...defaultState, playerName:old.playerName || defaultState.playerName, xp:Math.max(0,Number(old.xp)||0)};
    }
    return {...defaultState};
  } catch { return {...defaultState}; }
}
function saveState(){localStorage.setItem("pythonQuestGameSave",JSON.stringify(state));renderAll()}
function toast(msg){const t=$("#toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2600)}
function level(){return Math.floor(state.xp/100)+1}
function completed(id){return state.completed.includes(id)}
function unlocked(id){return id===1||completed(id-1)}
function addXP(n,msg){state.xp+=n;toast(`+${n} XP — ${msg||"Quest progress saved!"}`);saveState()}
function completeMission(id){if(completed(id))return;state.completed.push(id);const m=missions.find(x=>x.id===id);state.earned.push(...achievementKeysForMission(id));state.xp+=m.xp;saveState();toast(`Mission cleared! +${m.xp} XP`);renderMissionDetail(id)}
function achievementKeysForMission(id){if(id===1)return ["first"];if(id===2)return ["oracle"];if(id===4)return ["coder"];if(id===5)return ["boss"];return []}
function showView(name){$$(".view").forEach(v=>{v.style.display="";v.classList.toggle("active",v.id===name)});["chapter-map-view","topic-learning-view"].forEach(id=>{const e=document.getElementById(id);if(e){e.style.display="none";e.classList.remove("active")}});$$(".nav-btn").forEach(b=>b.classList.toggle("active",b.dataset.view===name));const titles={dashboard:"Welcome back, Coder! 👋",world:"Python World — Choose Your Mission",arena:"Coding Arena — Code. Run. Conquer.",practice:"Mini Game Arcade",achievements:"Your Trophy Room",profile:"My Profile",certificates:"My Certificates",map:"Adventure Map — Follow Your Path"};$("#page-title").textContent=titles[name]||"Python Quest";window.scrollTo({top:0,behavior:"smooth"})}
function renderAll(){const lv=level(),n=state.completed.length,pct=Math.round(n/5*100);$("#top-xp").textContent=`${state.xp} XP`;$("#top-level").textContent=`Level ${lv}`;$("#dash-xp").textContent=state.xp;$("#dash-level").textContent=lv;$("#dash-completed").textContent=`${n} / 5`;$("#dash-streak").textContent=`${state.streak} Day${state.streak===1?"":"s"}`;$("#streak-side").textContent=`${state.streak} day${state.streak===1?"":"s"}`;$("#progress-label").textContent=pct+"%";$("#progress-fill").style.width=pct+"%";$("#world-count").textContent=`${n}/5 cleared`;$("#world-fill").style.width=pct+"%";$("#arcade-xp").textContent=state.xp;$("#level-title").textContent=lv===1?"Rookie Coder":lv===2?"Code Explorer":lv===3?"Python Adventurer":"Quest Champion";renderMissions();renderStrip();renderAdventureMap();renderAchievements();renderProfile();renderCertificates()}
function chapterDone(id){return Array.isArray(state.completedChapters)&&state.completedChapters.includes(id)}
function chapterUnlocked(id){if(id===1)return true;if(id===2&&state.completed.length===missions.length)return true;return chapterDone(id-1)}
function renderAdventureMap(){
 const host=$("#adventure-map-nodes");if(!host)return;
 host.innerHTML=chapters.map((c,i)=>{const done=chapterDone(c.id),open=chapterUnlocked(c.id),position=i%2===0?"map-left":"map-right",status=done?"CLEARED":open?"AVAILABLE":"LOCKED",badge=c.certificate?'<span class="map-certificate-badge">🎓 MILESTONE</span>':c.final?'<span class="map-certificate-badge">🏆 FINAL</span>':'',btn=done?"Replay Chapter":open?(c.id===1?"Enter Chapter →":"Roadmap Preview →"):"Complete previous chapter";return `<article class="map-node ${done?"node-done":open?"node-open":"node-locked"} ${position} ${c.certificate||c.final?"node-certificate":""}"><div class="map-node-icon">${done?"🏆":open?c.icon:"🔒"}</div><div class="map-node-info"><small>CHAPTER ${String(c.id).padStart(2,"0")} · LEVEL ${c.id} · ${status}</small><b>${c.title}</b><span>${c.theme} · ⚡ ${c.xp} XP</span>${badge}<button class="map-node-button" data-map-chapter="${c.id}" ${!open&&!done?"disabled":""}>${btn}</button></div></article>`}).join("");
 $$('[data-map-chapter]',host).forEach(btn=>btn.addEventListener('click',()=>{const id=Number(btn.dataset.mapChapter);if(!chapterUnlocked(id)&&!chapterDone(id)){toast('🔒 Complete the previous chapter to unlock this level.');return;}if(id===1){currentChapterId=1;openChapterTopicMap(1);document.querySelectorAll('.view').forEach(v=>{v.style.display='none';v.classList.remove('active');});document.getElementById('map').classList.remove('active');document.getElementById('chapter-map-view').style.display='block';document.getElementById('chapter-map-view').classList.add('active');}else showChapterPreview(id)}));
 const n=state.completedChapters.length+(state.completed.length===missions.length&&!chapterDone(1)?1:0);$("#map-progress-title").textContent=`${Math.min(n,28)} / 28 chapters cleared`;const next=chapters.find(c=>!chapterDone(c.id)&&chapterUnlocked(c.id));$("#map-next-hint").textContent=next?`Next objective: Chapter ${next.id} — ${next.title}`:"Complete the available chapter to continue your adventure.";
}
function showChapterPreview(id){const c=chapters.find(x=>x.id===id),host=$("#chapter-preview");if(!c||!host)return;host.classList.remove("hidden");host.innerHTML=`<div class="eyebrow">CHAPTER ${String(c.id).padStart(2,"0")} · LEVEL ${c.id}</div><h3>${c.icon} ${c.title}</h3><p><b>World:</b> ${c.world}</p><p><b>Map location:</b> ${c.theme}</p><p>This chapter is included in the 28-chapter roadmap. Its full lesson workspace, topic-by-topic coding exercises and chapter test will be built in the next phase.</p><button class="secondary-btn" id="preview-back-map">← Back to Adventure Map</button>`;host.scrollIntoView({behavior:"smooth",block:"start"});$("#preview-back-map").addEventListener("click",()=>host.classList.add("hidden"));}
function renderMissions(){$("#mission-list").innerHTML=missions.map(m=>{const done=completed(m.id),open=unlocked(m.id);return `<article class="mission-card ${done?"done":open?"unlocked":"locked"}"><div class="mission-number">${done?"✓":open?m.id:"🔒"}</div><div class="mission-body"><div class="mission-meta"><span>MISSION ${String(m.id).padStart(2,"0")}</span><span class="xp-tag">⚡ +${m.xp} XP</span></div><h3>${m.icon} ${m.title}</h3><p>${m.desc}</p><div class="mission-actions"><span class="muted">${done?"CLEARED":open?"AVAILABLE":"LOCKED"}</span><button class="tiny-btn" data-mission="${m.id}" ${!open&&!done?"disabled":""}>${done?"Replay":open?"Play Mission":"Locked"}</button></div></div></article>`}).join("");$$("[data-mission]").forEach(b=>b.addEventListener("click",()=>openMission(Number(b.dataset.mission))))}
function renderStrip(){$("#dashboard-mission-strip").innerHTML=missions.map(m=>`<div class="strip-item ${completed(m.id)?"done":unlocked(m.id)?"":"locked"}"><div class="strip-icon">${completed(m.id)?"✅":unlocked(m.id)?m.icon:"🔒"}</div><b>${m.title}</b><small>${completed(m.id)?"Cleared":unlocked(m.id)?`+${m.xp} XP`:"Locked"}</small></div>`).join("")}
function openMission(id){if(!unlocked(id)&&!completed(id))return;activeMission=id;showView("world");renderMissionDetail(id);$("#mission-detail").scrollIntoView({behavior:"smooth",block:"start"})}
function renderMissionDetail(id){const m=missions.find(x=>x.id===id);if(!m)return;const done=completed(id);let action="";if(m.kind==="learn")action=`<button class="primary-btn" id="mission-complete" ${done?"disabled":""}>${done?"Mission Cleared ✓":"Complete Lesson →"}</button>`;else if(m.kind==="quiz"||m.kind==="builder"||m.kind==="boss")action=`<button class="primary-btn" id="mission-interactive">${done?"Replay Challenge ↻":"Start Challenge →"}</button>`;else action=`<button class="primary-btn" data-jump="arena">Open Coding Arena →</button>`;$("#mission-detail").classList.remove("hidden");$("#mission-detail").innerHTML=`<div class="eyebrow">MISSION ${String(m.id).padStart(2,"0")} ${done?"· CLEARED":"· "+(m.kind==="boss"?"BOSS BATTLE":"ACTIVE QUEST")}</div><h3>${m.icon} ${m.title}</h3><p class="lesson-text">${m.lesson}</p><div class="lesson-callout"><b>📘 Learn it:</b><br>${m.task}<br><br><code>${escapeHtml(m.example)}</code></div><p class="muted">Reward: ⚡ +${m.xp} XP</p><div class="lesson-actions">${action}<button class="secondary-btn" id="mission-hint">💡 Show Hint</button></div><div id="mission-inline-game"></div>`;const completeBtn=$("#mission-complete");if(completeBtn)completeBtn.addEventListener("click",()=>completeMission(id));const hint=$("#mission-hint");if(hint)hint.addEventListener("click",()=>toast("Hint: "+m.hint));const interact=$("#mission-interactive");if(interact)interact.addEventListener("click",()=>renderInlineChallenge(m))}
function renderInlineChallenge(m){const target=$("#mission-inline-game");if(m.kind==="quiz"||m.kind==="boss"){target.innerHTML=`<div class="game-question"><b>${m.kind==="boss"?"👹 BOSS QUESTION":"🔮 Predict the output"}</b><pre>${escapeHtml(m.example)}</pre><div class="option-list">${m.options.map((o,i)=>`<button class="option-btn" data-answer="${i}">${String.fromCharCode(65+i)}. ${escapeHtml(o)}</button>`).join("")}</div><div class="game-feedback" id="inline-feedback"></div></div>`;$$("[data-answer]",target).forEach(b=>b.addEventListener("click",()=>{const ok=Number(b.dataset.answer)===m.answer;$$("[data-answer]",target).forEach(x=>{x.disabled=true;if(Number(x.dataset.answer)===m.answer)x.classList.add("correct")});if(!ok)b.classList.add("wrong");$("#inline-feedback",target).textContent=ok?m.why:"Not quite — "+m.hint;if(ok&&!completed(m.id))completeMission(m.id)}))}else if(m.kind==="builder"){target.innerHTML=`<div class="game-question"><b>🧱 Choose the valid Python line</b><div class="option-list">${m.options.map((o,i)=>`<button class="option-btn" data-builder="${i}">${escapeHtml(o)}</button>`).join("")}</div><div class="game-feedback" id="inline-feedback"></div></div>`;$$("[data-builder]",target).forEach(b=>b.addEventListener("click",()=>{const ok=Number(b.dataset.builder)===m.answer;$$("[data-builder]",target).forEach(x=>{x.disabled=true;if(Number(x.dataset.builder)===m.answer)x.classList.add("correct")});if(!ok)b.classList.add("wrong");$("#inline-feedback",target).textContent=ok?m.why:"Try again next time: "+m.hint;if(ok&&!completed(m.id))completeMission(m.id)}))}}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
async function initPython(){try{if(!window.loadPyodide)throw new Error("Pyodide script didn't load");pyodide=await loadPyodide();window.pyodide=pyodide;$("#runtime-status").textContent="Python ready";$("#runtime-status").previousElementSibling.style.background="var(--green)"}catch(e){$("#runtime-status").textContent="Runtime needs internet";console.warn(e)}}
async function runCode(){const out=$("#code-output"),status=$("#output-status"),code=$("#code-editor").value;out.classList.remove("error");status.textContent="RUNNING";out.textContent="Running your code…";if(!pyodide){try{if(!window.loadPyodide)throw new Error("Python runtime could not load. Check internet and refresh.");pyodide=await loadPyodide();window.pyodide=pyodide}catch(e){out.textContent="Python runtime could not load. Check your internet connection, then refresh the page.";out.classList.add("error");status.textContent="OFFLINE";return}}try{let captured="";pyodide.setStdout({batched:s=>captured+=s+"\n"});pyodide.setStderr({batched:s=>captured+=s+"\n"});await pyodide.runPythonAsync(code);out.textContent=captured.trimEnd()||"(Program finished with no output.)";status.textContent="SUCCESS";if(code.includes('Hello, Python Quest!'))$("#run-feedback").classList.remove("hidden"),$("#run-feedback").textContent="🎉 Exact mission message detected! You can claim your First Program reward."}catch(e){out.textContent=String(e);out.classList.add("error");status.textContent="ERROR"}}
function claimCodeReward(){const output=$("#code-output").textContent;if(output.trim()==="Hello, Python Quest!"||$("#code-editor").value.includes('print("Hello, Python Quest!")')&&output.includes("Hello, Python Quest!")){if(!state.claimedCode){state.claimedCode=true;if(!completed(4))completeMission(4);else addXP(0,"Mission already cleared");state.earned.push("coder");saveState();toast("First Program mission cleared!")}else toast("Reward already claimed — great practice!")}else toast("Run the exact mission code successfully first.")}
function startGame(type){currentGame=type;const panel=$("#game-panel");panel.classList.remove("hidden");let title,question,code,opts,answer,why,hint;if(type==="quiz"){title="🔮 Output Oracle";question="What will this code print?";code='print(4 + 3)';opts=["43","7","4 + 3","Error"];answer=1;why="Correct! Python adds the numbers before print displays the result.";hint="Both values are numbers, not text."}else if(type==="bug"){title="🐞 Bug Hunter";question="Which line fixes the bug?";code='print("Hello Quest!"';opts=['print("Hello Quest!")','Print("Hello Quest!")','print Hello Quest!'];answer=0;why="Bug squashed! The closing parenthesis was missing.";hint="Check that each opening parenthesis has a closing one."}else{title="🧱 Code Builder";question="Which line prints the number 10?";code="# Complete the mission";opts=['print("10")','print(5 + 5)','Both A and B'];answer=2;why="Both lines display 10, though the first displays text and the second calculates a number.";hint="Quoted digits are text; 5 + 5 is arithmetic."}panel.innerHTML=`<div class="eyebrow">ARCADE CHALLENGE</div><h3>${title}</h3><p>${question}</p><div class="game-question"><pre>${escapeHtml(code)}</pre><div class="option-list">${opts.map((o,i)=>`<button class="option-btn" data-game-answer="${i}">${String.fromCharCode(65+i)}. ${escapeHtml(o)}</button>`).join("")}</div><div id="game-feedback" class="game-feedback"></div></div><button class="secondary-btn" id="close-game">Close Game</button>`;panel.scrollIntoView({behavior:"smooth",block:"start"});$$("[data-game-answer]",panel).forEach(b=>b.addEventListener("click",()=>{const ok=Number(b.dataset.gameAnswer)===answer;$$("[data-game-answer]",panel).forEach(x=>{x.disabled=true;if(Number(x.dataset.gameAnswer)===answer)x.classList.add("correct")});if(!ok)b.classList.add("wrong");$("#game-feedback").textContent=ok?why:"Not quite. Hint: "+hint;if(ok){const key=type==="quiz"?"quizWon":type==="bug"?"bugWon":"builderWon";if(!state[key]){state[key]=true;state.xp+=10;saveState();toast("Mini game cleared! +10 XP")}else toast("Correct! You already collected this game's XP.")}}));$("#close-game").addEventListener("click",()=>panel.classList.add("hidden"))}
function renderProfile(){
  const name=state.playerName||"Python Learner";
  $("#side-name").textContent=name;
  $("#profile-display-name").textContent=name;
  $("#profile-xp").textContent=state.xp;
  $("#profile-level").textContent=level();
  $("#profile-completed").textContent=`${state.completed.length} / ${missions.length}`;
  const input=$("#profile-name-input");
  if(input && document.activeElement!==input) input.value=name;
}
function renderCertificates(){
  const allStarter=state.completed.length===missions.length;
  const certs=[
    {icon:"🌱",title:"Beginner Valley Completion Award",desc:"Complete all 5 starter missions.",unlocked:allStarter,kind:"starter"},
    {icon:"🐍",title:"Python Beginner Certificate",desc:"Complete Core Python Chapters 1–5.",unlocked:false},
    {icon:"📘",title:"Python Fundamentals Certificate",desc:"Complete Core Python Chapters 6–10.",unlocked:false},
    {icon:"🧩",title:"Python Programmer Certificate",desc:"Complete Core Python Chapters 11–18.",unlocked:false},
    {icon:"💻",title:"Python Application Developer Certificate",desc:"Complete Core Python Chapters 19–22.",unlocked:false},
    {icon:"⚙️",title:"Python OOP Developer Certificate",desc:"Complete Core Python Chapters 23–24.",unlocked:false},
    {icon:"🎓",title:"Core Python Completion Certificate",desc:"Complete all 28 chapters and the final project.",unlocked:false}
  ];
  $("#certificate-list").innerHTML=certs.map(c=>`<article class="panel certificate-card ${c.unlocked?"certificate-unlocked":"certificate-locked"}"><div class="certificate-icon">${c.icon}</div><div><h3>${c.title}</h3><p>${c.desc}</p><span class="certificate-state">${c.unlocked?"✓ UNLOCKED":"🔒 LOCKED"}</span>${c.unlocked?`<button class="secondary-btn certificate-print" data-print-certificate="${c.kind}">View / Print Award</button>`:""}</div></article>`).join("");
  $$("[data-print-certificate]").forEach(btn=>btn.addEventListener("click",()=>{
    const name=(state.playerName||"Python Learner").replace(/[<>]/g,"");
    const w=window.open("","_blank","width=900,height=650");
    if(!w){toast("Please allow pop-ups to view the award.");return;}
    w.document.write(`<!doctype html><html><head><title>Python Quest Award</title><style>body{font-family:Arial,sans-serif;background:#f4f7ff;padding:40px;color:#15213c}.award{max-width:760px;margin:20px auto;background:white;border:8px double #7655dc;padding:55px;text-align:center}.brand{font-size:18px;letter-spacing:3px;color:#7655dc}.name{font-size:38px;color:#172a55;margin:25px}.rule{height:2px;background:#e1bd56;margin:20px auto;width:70%}button{padding:10px 18px;margin-top:24px}@media print{button{display:none}body{background:white}}</style></head><body><div class="award"><div class="brand">🐍 PYTHON QUEST</div><h1>Certificate of Achievement</h1><p>This award is presented to</p><div class="name">${name}</div><div class="rule"></div><h2>Beginner Valley Completion Award</h2><p>For completing all five starter missions in Python Quest.</p><p>Issued by: <b>Deepak Kumar Munna</b></p><p>Date: ${new Date().toLocaleDateString()}</p><button onclick="window.print()">Print / Save as PDF</button></div></body></html>`);
    w.document.close();
  }));
}
function renderAchievements(){const list=[{key:"first",icon:"🌱",title:"First Steps",desc:"Complete your first mission." ,check:()=>state.completed.length>=1},{key:"oracle",icon:"🔮",title:"Output Oracle",desc:"Clear the Output Oracle mission.",check:()=>completed(2)},{key:"coder",icon:"💻",title:"First Program",desc:"Run your first required Python program.",check:()=>state.claimedCode||completed(4)},{key:"bug",icon:"🐞",title:"Bug Hunter",desc:"Win the Bug Hunter mini game.",check:()=>state.bugWon},{key:"boss",icon:"👹",title:"Boss Slayer",desc:"Defeat the Level 1 boss.",check:()=>completed(5)},{key:"streak",icon:"🔥",title:"Keep the Flame",desc:"Return to your learning journey.",check:()=>state.streak>=1}];$("#achievement-list").innerHTML=list.map(a=>{const got=a.check();return `<article class="achievement-card ${got?"earned":""}"><div class="achievement-icon">${a.icon}</div><h3>${a.title}</h3><p>${a.desc}</p><span class="achievement-state">${got?"✓ UNLOCKED":"🔒 LOCKED"}</span></article>`}).join("")}
$$(".nav-btn").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
$$("[data-jump]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.jump)));
$("#run-code").addEventListener("click",runCode);
$("#reset-code").addEventListener("click",()=>{$("#code-editor").value='print("Hello, Python Quest!")';toast("Editor reset.")});
$("#clear-output").addEventListener("click",()=>{$("#code-output").textContent="Your output will appear here…";$("#code-output").classList.remove("error");$("#output-status").textContent="READY";$("#run-feedback").classList.add("hidden")});
$("#claim-code-reward").addEventListener("click",claimCodeReward);
$("#start-quiz").addEventListener("click",()=>startGame("quiz"));
$("#start-bug").addEventListener("click",()=>startGame("bug"));
$("#start-builder").addEventListener("click",()=>startGame("builder"));
$("#save-profile").addEventListener("click",()=>{
  const name=$("#profile-name-input").value.trim();
  if(!name){$("#profile-message").textContent="Please enter a name first.";return;}
  state.playerName=name;
  saveState();
  $("#profile-message").textContent="✅ Profile saved on this device.";
  toast("Profile saved!");
});
renderAll();initPython();


/* ===== PYTHON QUEST LEVEL-UP FEEDBACK ===== */
(function(){
  const originalAddXP = addXP;
  // A lightweight celebratory overlay when the player crosses an XP level.
  const originalSaveState = saveState;
  let previousLevel = level();
  saveState = function(){
    const before = previousLevel;
    originalSaveState();
    const now = level();
    if(now > before){
      showLevelUp(now);
    }
    previousLevel = now;
  };
  function showLevelUp(lv){
    const old = document.getElementById("level-up-overlay");
    if(old) old.remove();
    const el = document.createElement("div");
    el.id = "level-up-overlay";
    el.innerHTML = '<div class="level-up-card"><div class="level-up-stars">✦ ✧ ✦</div><div class="level-up-trophy">🏆</div><div class="level-up-kicker">LEVEL UP!</div><h2>Level '+lv+'</h2><p>Your coding powers are growing.</p><button type="button" id="level-up-close" class="primary-btn">Continue Quest →</button></div>';
    document.body.appendChild(el);
    document.getElementById("level-up-close").addEventListener("click",()=>el.remove());
    setTimeout(()=>{if(el.isConnected)el.classList.add("visible")},20);
  }
})();



/* =========================================================
   PYTHON QUEST COURSE EXPANSION PATCH
   Adds structured learning entries for all 28 chapters and
   a polished, printable milestone certificate gallery.
   ========================================================= */
(function(){
  const beginnerNotes = {
    "What is Python?":"Python is a high-level, general-purpose programming language. You write instructions in Python and the interpreter executes them. It is popular because its syntax is readable and it is used in automation, data analysis, web development and AI.",
    "Chapter Revision":"Review each concept without looking at notes, run the examples, then explain the output in your own words.",
    "Chapter Test":"Use this checkpoint to check understanding. Read the code carefully, predict its result, then run it and compare."
  };
  function makeLesson(title, chapter, idx) {
    const safeTitle = title.replace(/&/g, "and");
    let concept = beginnerNotes[title] ||
      `${safeTitle} — Chapter ${chapter}. इस lesson में हम इस concept को छोटे steps में समझेंगे। पहले इसका purpose समझें, फिर syntax देखें, example run करें और उसके output को line-by-line पढ़ें।`;
    let syntax = 'print("Hello, Python Quest!")';
    let example = 'message = "Hello, Python Quest!"\nprint(message)';
    let output = "Hello, Python Quest!";
    let task = `"Python Quest" को output में दिखाने वाला Python code लिखिए।`;
    let starterCode = 'print("Python Quest")';
    let expectedOutput = "Python Quest";
    let question = `इस lesson "${safeTitle}" को सीखते समय सबसे अच्छा पहला कदम क्या है?`;
    let options = ["Concept समझकर example run करना", "Code बिना पढ़े copy करना", "Output देखे बिना आगे बढ़ना"];
    let answer = 0;
    const low = title.toLowerCase();
    if (low.includes("variable")) {
      concept = "Variable एक नाम है जो किसी value को refer करता है। Assignment operator = से value assign की जाती है। उदाहरण: score = 10. Python में variable का नाम meaningful रखें और नाम number से शुरू न करें.";
      syntax = "variable_name = value";
      example = 'player_name = "Munna"\nscore = 10\nprint(player_name)\nprint(score)';
      output = "Munna\n10"; starterCode = example; expectedOutput = output;
      task = 'player_name में "Munna" और score में 10 रखें, फिर दोनों print करें।';
      question = 'इस code में score की value क्या है?\nscore = 10';
      options = ["'score'", "10", "score = 10"]; answer = 1;
    } else if (low.includes("print") || low.includes("output") || low.includes("first python program") || low.includes("first program")) {
      concept = "print() Python का built-in function है जो value या text को screen पर दिखाता है। Text को quotes में लिखें। Numbers को quotes के बिना भी print किया जा सकता है.";
      syntax = 'print("text")\nprint(2 + 3)';
      example = 'print("Hello!")\nprint(2 + 3)';
      output = "Hello!\n5"; starterCode = example; expectedOutput = output;
      task = 'एक line में "I am learning Python" और दूसरी line में 2026 print करें।';
      question = 'print(2 + 3) का output क्या होगा?'; options = ["23", "5", "2 + 3"]; answer = 1;
    } else if (low.includes("comment")) {
      concept = "Comment code में इंसानों के लिए लिखी note होती है। # के बाद उसी line का text Python execute नहीं करता। Comments code को समझने और maintain करने में मदद करते हैं.";
      syntax = "# this is a comment";
      example = '# Display a welcome message\nprint("Welcome")';
      output = "Welcome"; starterCode = example; expectedOutput = output;
      task = 'एक comment लिखें और फिर "Comments help" print करें।';
      question = "Python single-line comment किस symbol से शुरू होता है?"; options = ["//", "#", "<!--"]; answer = 1;
    } else if (low.includes("string")) {
      concept = "String text data है, जिसे single या double quotes में लिखा जाता है। Strings को variables में रख सकते हैं, जोड़ सकते हैं और indexing से characters access कर सकते हैं.";
      syntax = 'name = "Munna"\nprint(name)';
      example = 'first = "Python"\nsecond = " Quest"\nprint(first + second)';
      output = "Python Quest"; starterCode = example; expectedOutput = output;
      task = '"Hello" और "World" strings को जोड़कर output में Hello World दिखाएँ।';
      question = "Text value के लिए कौन-सा data type उपयोग होता है?"; options = ["str", "int", "bool"]; answer = 0;
    } else if (low.includes("input")) {
      concept = "input() user से text पढ़ता है और हमेशा string लौटाता है। Number की तरह calculation करनी हो तो int() या float() से convert करें.";
      syntax = 'name = input("Name: ")';
      example = 'age_text = "18"\nage = int(age_text)\nprint(age + 1)';
      output = "19"; starterCode = example; expectedOutput = output;
      task = 'input variable की तरह एक numeric string "25" को int में बदलकर 5 जोड़ें।';
      question = "input() सामान्यतः किस type की value लौटाता है?"; options = ["str", "int", "list"]; answer = 0;
    } else if (low.includes("operator") || low.includes("arithmetic")) {
      concept = "Operators values पर operation करते हैं। + addition, - subtraction, * multiplication, / division, // floor division, % remainder और ** exponentiation के लिए हैं.";
      syntax = "result = 10 + 3";
      example = "print(10 + 3)\nprint(10 % 3)\nprint(2 ** 3)";
      output = "13\n1\n8"; starterCode = example; expectedOutput = output;
      task = "17 को 5 से divide करने का remainder print करें।";
      question = "17 % 5 का result क्या है?"; options = ["3", "2", "3.4"]; answer = 1;
    } else if (low.includes("conditional") || low.includes("if") || low.includes("decision")) {
      concept = "if/elif/else condition के आधार पर अलग code चलाते हैं। Condition True हो तो संबंधित block चलता है। Colon और indentation जरूरी हैं.";
      syntax = 'if condition:\n    statement\nelse:\n    statement';
      example = 'score = 72\nif score >= 40:\n    print("Pass")\nelse:\n    print("Try again")';
      output = "Pass"; starterCode = example; expectedOutput = output;
      task = "age = 20 पर if/else से Adult print करें।";
      question = "Python में condition के बाद कौन-सा चिन्ह लगता है?"; options = [":", ";", ","]; answer = 0;
    } else if (low.includes("loop") || low.includes("iteration")) {
      concept = "Loop किसी action को बार-बार चलाता है। for loop iterable के items पर चलता है; while loop condition True रहने तक चलता है. Infinite loops से बचने के लिए condition/update समझें.";
      syntax = "for item in iterable:\n    statement";
      example = "for number in range(1, 4):\n    print(number)";
      output = "1\n2\n3"; starterCode = example; expectedOutput = output;
      task = "for loop से 1, 2, 3, 4 को अलग-अलग lines में print करें।";
      question = "range(1, 4) कौन-से numbers देता है?"; options = ["1, 2, 3", "1, 2, 3, 4", "0, 1, 2, 3, 4"]; answer = 0;
    } else if (low.includes("list")) {
      concept = "List ordered और mutable collection है। इसमें multiple values रख सकते हैं, index 0 से शुरू होता है, और append() से item जोड़ सकते हैं.";
      syntax = "items = [value1, value2]";
      example = 'fruits = ["apple", "mango"]\nfruits.append("banana")\nprint(fruits)\nprint(fruits[0])';
      output = "['apple', 'mango', 'banana']\napple"; starterCode = example; expectedOutput = output;
      task = 'numbers = [10, 20] में 30 append करके list print करें।';
      question = "Python list का पहला index क्या है?"; options = ["0", "1", "-1"]; answer = 0;
    } else if (low.includes("dictionary")) {
      concept = "Dictionary key-value pairs रखती है। Unique key के जरिए value access की जाती है। Mutable dictionary में नया key-value pair जोड़ा या बदला जा सकता है.";
      syntax = 'person = {"name": "Munna"}';
      example = 'person = {"name": "Munna", "age": 20}\nprint(person["name"])';
      output = "Munna"; starterCode = example; expectedOutput = output;
      task = 'एक dictionary बनाकर उसमें city: Patna रखें और city की value print करें।';
      question = "Dictionary में value किसके जरिए access होती है?"; options = ["Key", "Index only", "Position number only"]; answer = 0;
    } else if (low.includes("function")) {
      concept = "Function reusable code block है। def से function define होता है, parameters input लेते हैं और return value वापस देता है. छोटे functions code को readable और testable बनाते हैं.";
      syntax = "def function_name(parameter):\n    return value";
      example = "def add(a, b):\n    return a + b\n\nprint(add(4, 6))";
      output = "10"; starterCode = example; expectedOutput = output;
      task = "square(number) नाम का function बनाकर number * number return करें और square(5) print करें।";
      question = "Function define करने के लिए कौन-सा keyword है?"; options = ["def", "func", "make"]; answer = 0;
    } else if (low.includes("exception") || low.includes("error handling")) {
      concept = "try/except से runtime error को संभाल सकते हैं ताकि program अचानक बंद न हो। Specific exception पकड़ें और उपयोगी message दें; errors को चुपचाप न छिपाएँ.";
      syntax = "try:\n    risky_code\nexcept ValueError:\n    handle_error";
      example = 'try:\n    number = int("abc")\nexcept ValueError:\n    print("Please enter a valid number")';
      output = "Please enter a valid number"; starterCode = example; expectedOutput = output;
      task = "try/except ValueError से invalid number conversion संभालें।";
      question = "किस block में संभावित error वाला code रखा जाता है?"; options = ["try", "except", "finally only"]; answer = 0;
    } else if (low.includes("file")) {
      concept = "File handling से program files पढ़ और लिख सकता है। with open(...) file को safely बंद करता है। Mode 'r' read, 'w' overwrite/write और 'a' append के लिए है.";
      syntax = 'with open("notes.txt", "w", encoding="utf-8") as file:\n    file.write("Hello")';
      example = 'from io import StringIO\nfile = StringIO()\nfile.write("Python notes")\nprint(file.getvalue())';
      output = "Python notes"; starterCode = example; expectedOutput = output;
      task = 'StringIO से "My Python Notes" लिखकर उसे print करें।';
      question = "with open(...) का मुख्य फायदा क्या है?"; options = ["File reliably close होती है", "Python install होता है", "XP अपने आप मिलता है"]; answer = 0;
    } else if (low.includes("class") || low.includes("object") || low.includes("oop")) {
      concept = "OOP में class object बनाने का blueprint है और object उस class का instance है। Attributes data रखते हैं और methods behavior define करते हैं.";
      syntax = "class Dog:\n    def __init__(self, name):\n        self.name = name";
      example = 'class Dog:\n    def __init__(self, name):\n        self.name = name\n\npet = Dog("Milo")\nprint(pet.name)';
      output = "Milo"; starterCode = example; expectedOutput = output;
      task = 'Student class बनाकर name attribute "Munna" रखें और print करें।';
      question = "Class क्या है?"; options = ["Objects का blueprint", "केवल variable", "Loop का प्रकार"]; answer = 0;
    } else if (low.includes("json")) {
      concept = "JSON structured data exchange format है। Python का json module dictionaries/lists को JSON text में बदलता है और JSON text को Python objects में parse करता है.";
      syntax = "json.dumps(data)\njson.loads(text)";
      example = 'import json\ndata = {"name": "Munna"}\ntext = json.dumps(data)\nprint(json.loads(text)["name"])';
      output = "Munna"; starterCode = example; expectedOutput = output;
      task = 'json module से {"course": "Python"} serialize करके course value print करें।';
      question = "Python में JSON support के लिए कौन-सा module है?"; options = ["json", "csv", "path"]; answer = 0;
    } else if (low.includes("date") || low.includes("time")) {
      concept = "datetime module date और time objects बनाने, तुलना करने और format करने के लिए उपयोग होता है। Explicit format strings से dates को readable बनाया जा सकता है.";
      syntax = "from datetime import date\nprint(date(2026, 1, 1))";
      example = "from datetime import date\nrelease = date(2026, 1, 1)\nprint(release.year)";
      output = "2026"; starterCode = example; expectedOutput = output;
      task = "datetime.date से 2025-12-31 बनाकर उसका year print करें।";
      question = "Date/time tools के लिए standard module कौन-सा है?"; options = ["datetime", "calendar_only", "clock"]; answer = 0;
    } else if (low.includes("regular expression") || low.includes("regex")) {
      concept = "Regular expressions text patterns match करने के लिए उपयोग होते हैं। Python में re module search, match, findall और substitution जैसे tools देता है.";
      syntax = 'import re\nre.findall(pattern, text)';
      example = 'import re\ntext = "Order 123 and 456"\nprint(re.findall(r"\\d+", text))';
      output = "['123', '456']"; starterCode = example; expectedOutput = output;
      task = 're.findall(r"\\d+", "Room 12") से digits निकालकर print करें।';
      question = "Python regex के लिए कौन-सा module है?"; options = ["re", "regexpy", "text"]; answer = 0;
    } else if (low.includes("module") || low.includes("package") || low.includes("pip") || low.includes("virtual environment")) {
      concept = "Module Python file है जिसमें reusable code होता है; package related modules को organize करता है। pip packages install करता है और virtual environment project dependencies अलग रखता है.";
      syntax = "python -m venv .venv\npython -m pip install package_name";
      example = "import math\nprint(math.sqrt(81))";
      output = "9.0"; starterCode = example; expectedOutput = output;
      task = "math module import करके 144 का square root print करें।";
      question = "pip का आम उपयोग क्या है?"; options = ["Python packages install करना", "Loop चलाना", "Variable rename करना"]; answer = 0;
    }
    return {title, concept, syntax, example, output, task, starterCode, expectedOutput, question, options, answer,
      explanation: `सही उत्तर: ${options[answer]}. पहले concept को समझें, फिर example चलाकर output से मिलाएँ।`};
  }

  // Fill all chapters using the course topic outline; keep existing authored
  // lessons for Chapters 1-3, and provide real runnable lessons for remaining topics.
  for (const chapter of chapters) {
    const outline = pythonQuestTopics[chapter.id];
    if (!outline || !Array.isArray(outline.topics)) continue;
    if (!chapterTopics[chapter.id]) chapterTopics[chapter.id] = [];
    if (chapterTopics[chapter.id].length === 0) {
      chapterTopics[chapter.id] = outline.topics.map((title, i) => makeLesson(title, chapter.id, i));
    } else {
      // Ensure every outline topic exists, keeping authored topics first and adding the rest.
      const existing = new Set(chapterTopics[chapter.id].map(t => t.title));
      outline.topics.forEach((title, i) => {
        if (!existing.has(title)) chapterTopics[chapter.id].push(makeLesson(title, chapter.id, i));
      });
    }
  }

  // Make course navigation clearer without altering the user's saved XP.
  const style = document.createElement("style");
  style.textContent = `
    .certificate-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px;margin:22px 0}
    .certificate-card{position:relative;overflow:hidden;display:flex;gap:16px;align-items:flex-start;padding:24px;border:1px solid #344866;border-radius:18px;background:linear-gradient(135deg,#111d34,#0b1223 70%);box-shadow:0 14px 34px #02061755}
    .certificate-card:before{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:linear-gradient(#f8d477,#a87927)}
    .certificate-card.certificate-unlocked{border-color:#d6b65e;background:linear-gradient(135deg,#17284a,#111a2e)}
    .certificate-icon{flex:0 0 58px;width:58px;height:58px;display:grid;place-items:center;border-radius:16px;font-size:28px;background:linear-gradient(135deg,#243d68,#17233e);border:1px solid #bda25a}
    .certificate-card h3{margin:2px 0 10px;font-size:17px;color:#f8fafc}
    .certificate-card p{color:#b9c8dd;line-height:1.6;margin:0 0 14px}
    .certificate-state{display:inline-block;padding:6px 10px;border-radius:999px;font-size:11px;letter-spacing:.08em;font-weight:800;background:#1d293d;color:#9fb3cc;border:1px solid #40516b}
    .certificate-unlocked .certificate-state{background:#173b32;color:#86efac;border-color:#23865d}
    .certificate-print{display:block;margin-top:14px}
    .certificate-issuer{border:1px solid #9f8545;background:linear-gradient(135deg,#131f36,#0b1222);padding:24px;border-radius:18px}
    .certificate-issuer h3{color:#e9cc7c}
    #chapter-map-view .certificate-map-link{display:inline-flex;margin:12px 0;padding:10px 15px;border-radius:10px;border:1px solid #a88b43;color:#f4d985;background:#15233b;text-decoration:none;font-weight:800}
    @media(max-width:720px){.certificate-card{padding:18px}.certificate-grid{grid-template-columns:1fr}}
  `;
  document.head.appendChild(style);

  // Add a direct certificate shortcut on the chapter map page.
  const map = document.getElementById("chapter-map-view");
  if (map && !map.querySelector(".certificate-map-link")) {
    const link = document.createElement("button");
    link.type = "button";
    link.className = "certificate-map-link";
    link.textContent = "🎓 View Certificates & Milestones";
    link.addEventListener("click", () => showView("certificates"));
    const heading = map.querySelector("h2, h1");
    if (heading && heading.parentElement) heading.parentElement.appendChild(link);
    else map.prepend(link);
  }

  // Professional certificate gallery, keeping current unlock logic honest.
  const oldRenderCertificates = renderCertificates;
  renderCertificates = function(){
    function rangeComplete(start, end) {
      for (let ch = start; ch <= end; ch++) {
        const list = chapterTopics[ch] || [];
        if (!list.length || !list.every((_, idx) => isTopicCompleted(ch, idx))) return false;
      }
      return true;
    }
    function rangeComplete(start, end) {
      for (let ch = start; ch <= end; ch++) {
        const list = chapterTopics[ch] || [];
        if (!list.length || !list.every((_, idx) => isTopicCompleted(ch, idx))) return false;
      }
      return true;
    }
    const milestones = [
      {icon:"🌱",title:"Beginner Valley Award",desc:"Complete all five starter missions.",kind:"starter",unlocked:state.completed.length===missions.length},
      {icon:"🐍",title:"Python Beginner Certificate",desc:"Chapters 1–5 · Python foundations",kind:"chapter5",unlocked:rangeComplete(1,5)},
      {icon:"📘",title:"Python Fundamentals Certificate",desc:"Chapters 6–10 · Control flow and collections",kind:"chapter10",unlocked:rangeComplete(6,10)},
      {icon:"🧩",title:"Python Programmer Certificate",desc:"Chapters 11–15 · Data structures and functions",kind:"chapter15",unlocked:rangeComplete(11,15)},
      {icon:"💻",title:"Python Application Developer",desc:"Chapters 16–20 · Modules, errors and files",kind:"chapter20",unlocked:rangeComplete(16,20)},
      {icon:"⚙️",title:"Advanced Python Milestone",desc:"Chapters 21–26 · Data, OOP and advanced tools",kind:"chapter26",unlocked:rangeComplete(21,26)},
      {icon:"🏆",title:"Core Python Master Certificate",desc:"All 28 chapters, projects and final assessment",kind:"final",unlocked:rangeComplete(1,28)}
    ];
    const host = document.getElementById("certificate-list");
    if(!host) return oldRenderCertificates();
    host.innerHTML = milestones.map(c => `
      <article class="panel certificate-card ${c.unlocked?"certificate-unlocked":"certificate-locked"}">
        <div class="certificate-icon">${c.icon}</div>
        <div class="certificate-copy">
          <div class="eyebrow">PYTHON QUEST · LEARNING MILESTONE</div>
          <h3>${c.title}</h3><p>${c.desc}</p>
          <span class="certificate-state">${c.unlocked?"✓ AVAILABLE TO PRINT":"🔒 COMPLETE THE REQUIRED LEARNING PATH"}</span>
          ${c.unlocked?`<button class="secondary-btn certificate-print" data-professional-cert="${c.kind}" data-title="${c.title}">View / Print Certificate</button>`:""}
        </div>
      </article>`).join("");
    host.querySelectorAll("[data-professional-cert]").forEach(btn=>btn.addEventListener("click",()=>{
      const learner = String(state.playerName || "Python Learner").replace(/[<>]/g,"");
      const title = btn.dataset.title;
      const w = window.open("","_blank","width=1100,height=780");
      if(!w){toast("Certificate popup allow karein.");return;}
      w.document.write(`<!doctype html><html><head><title>${title}</title><style>
      @page{size:A4 landscape;margin:8mm}*{box-sizing:border-box}body{margin:0;background:#e9edf4;font-family:Georgia,'Times New Roman',serif;color:#17233d}
      .sheet{height:180mm;padding:12mm;border:3px solid #b89a4c;background:#fffdf6;position:relative;text-align:center;outline:1px solid #b89a4c;outline-offset:-9px}
      .brand{font:700 13px Arial;letter-spacing:5px;color:#8b6b24;margin:8px 0 18px}.seal{width:72px;height:72px;border-radius:50%;border:3px double #b89a4c;margin:0 auto 10px;display:grid;place-items:center;font:34px Arial;color:#b89a4c}
      .kicker{font:700 12px Arial;letter-spacing:4px;color:#52627b}.title{font-size:38px;color:#182947;margin:12px 0}.subtitle{font:16px Arial;color:#52627b}.name{font-size:34px;font-style:italic;border-bottom:1px solid #b89a4c;display:inline-block;padding:8px 40px;margin:14px}.description{font:15px Arial;line-height:1.7;max-width:700px;margin:10px auto}.footer{display:flex;justify-content:space-around;margin-top:20px;font:12px Arial}.line{border-top:1px solid #9aa6b8;padding-top:8px;min-width:190px}.ribbon{position:absolute;right:25px;top:25px;border:1px solid #b89a4c;padding:8px 12px;font:10px Arial;letter-spacing:2px;color:#8b6b24}
      </style></head><body><main class="sheet"><div class="ribbon">VERIFIED LEARNING MILESTONE</div><div class="brand">PYTHON QUEST · LEARN · CODE · LEVEL UP</div><div class="seal">♜</div><div class="kicker">CERTIFICATE OF COMPLETION</div><h1 class="title">${title}</h1><div class="subtitle">This certificate is proudly presented to</div><div class="name">${learner}</div><p class="description">In recognition of learning progress and successful completion of the stated Python Quest milestone.<br><b>Issued by:</b> Python Quest Learning Platform · Founder: Deepak Kumar Munna</p><div class="footer"><div class="line">Learner Achievement</div><div class="line">Date: ${new Date().toLocaleDateString("en-IN")}</div><div class="line">Python Quest</div></div></main><script>window.onload=()=>setTimeout(()=>window.print(),400)<\/script></body></html>`);
      w.document.close();
    }));
  };
  renderCertificates();
})();

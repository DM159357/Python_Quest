window.WEB_COURSE_DATA = {
  "html": {
    "icon": "🌐",
    "name": "HTML",
    "subtitle": "Structure & Semantics",
    "definition": "HTML defines the structure and meaning of web content.",
    "hindi": "HTML बताता है कि पेज पर heading, paragraph, link, image, form और अन्य content क्या है।",
    "lessons": [
      {
        "id": "html-1",
        "title": "HTML Document Structure",
        "definition": "An HTML document uses a standard structure so browsers can interpret the page.",
        "explain": "`<!doctype html>` declares modern HTML; `html` wraps the page, `head` stores metadata, and `body` contains visible content.",
        "code": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello Web</h1>\n</body>\n</html>",
        "output": "Browser shows a page with the heading “Hello Web”; the title appears in the browser tab.",
        "bad": "<html><head><title>Page</head><body><h1>Hello",
        "whybad": "Tags are not properly closed and the document structure is incomplete.",
        "fix": "<!doctype html>\n<html lang=\"en\">\n<head><title>Page</title></head>\n<body><h1>Hello</h1></body>\n</html>",
        "task": "Create a valid HTML page titled “My Portfolio” with one visible heading.",
        "hint": "Use doctype, html, head, title, body, and h1.",
        "solution": "<!doctype html>\n<html lang=\"en\"><head><meta charset=\"UTF-8\"><title>My Portfolio</title></head><body><h1>My Portfolio</h1></body></html>",
        "quiz": [
          {
            "q": "Which statement best describes “HTML Document Structure”?",
            "options": [
              "An HTML document uses a standard structure so browsers can interpret the page.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "An HTML document uses a standard structure so browsers can interpret the page."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of html document structure.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: `<!doctype html>` declares modern HTML; `html` wraps the page, `head` stores metadata, and `body` contains visible content."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "Tags are not properly closed and the document structure is incomplete.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "Tags are not properly closed and the document structure is incomplete. Correct version: <!doctype html>\n<html lang=\"en\">\n<head><title>Page</title></head>\n<body><h1>Hello</h1></body>\n</html>"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "html-2",
        "title": "Headings and Paragraphs",
        "definition": "Heading elements h1–h6 express a document hierarchy; p represents a paragraph.",
        "explain": "Use headings by meaning, not just by their default size. Usually one main h1 introduces the page, then h2/h3 create nested sections.",
        "code": "<h1>Web Development</h1>\n<h2>HTML Basics</h2>\n<p>HTML structures web pages.</p>",
        "output": "A large main heading, a smaller section heading, and a paragraph.",
        "bad": "<h1>My title<h2>Section<p>Text",
        "whybad": "The elements are left unclosed, making the markup harder to maintain.",
        "fix": "<h1>My title</h1>\n<h2>Section</h2>\n<p>Text</p>",
        "task": "Write a heading “About Me”, a subheading “My Skills”, and a paragraph.",
        "hint": "Use h1, h2, and p, each with a closing tag.",
        "solution": "<h1>About Me</h1>\n<h2>My Skills</h2>\n<p>I am learning web development.</p>",
        "quiz": [
          {
            "q": "Which statement best describes “Headings and Paragraphs”?",
            "options": [
              "Heading elements h1–h6 express a document hierarchy; p represents a paragraph.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Heading elements h1–h6 express a document hierarchy; p represents a paragraph."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of headings and paragraphs.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use headings by meaning, not just by their default size. Usually one main h1 introduces the page, then h2/h3 create nested sections."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The elements are left unclosed, making the markup harder to maintain.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The elements are left unclosed, making the markup harder to maintain. Correct version: <h1>My title</h1>\n<h2>Section</h2>\n<p>Text</p>"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "html-3",
        "title": "Text Semantics: strong, em, mark",
        "definition": "Semantic text elements express importance, emphasis, or highlighted text.",
        "explain": "`strong` means strong importance; `em` adds stress emphasis; `mark` highlights relevant text. They are not merely visual styling tags.",
        "code": "<p><strong>Important:</strong> Save your work.</p>\n<p>Please <em>read carefully</em>.</p>\n<p><mark>Exam tip</mark></p>",
        "output": "Important is strongly emphasized, read carefully is stressed, and Exam tip is highlighted.",
        "bad": "<strong><em>Important</strong></em>",
        "whybad": "The nesting order is invalid: inner elements must close before outer elements.",
        "fix": "<strong><em>Important</em></strong>",
        "task": "Mark one important phrase and emphasize one word in a paragraph.",
        "hint": "Nest tags in reverse order: last opened closes first.",
        "solution": "<p><strong>Remember:</strong> practise <em>every day</em>.</p>",
        "quiz": [
          {
            "q": "Which statement best describes “Text Semantics: strong, em, mark”?",
            "options": [
              "Semantic text elements express importance, emphasis, or highlighted text.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Semantic text elements express importance, emphasis, or highlighted text."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of text semantics: strong, em, mark.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: `strong` means strong importance; `em` adds stress emphasis; `mark` highlights relevant text. They are not merely visual styling tags."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The nesting order is invalid: inner elements must close before outer elements.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The nesting order is invalid: inner elements must close before outer elements. Correct version: <strong><em>Important</em></strong>"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "html-4",
        "title": "Links and URLs",
        "definition": "The anchor element creates a hyperlink using its href attribute.",
        "explain": "Use meaningful link text. `target=\"_blank\"` opens a new tab; pair it with `rel=\"noopener noreferrer\"` for safer external links.",
        "code": "<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">Visit Example</a>",
        "output": "A clickable “Visit Example” link opens the destination in a new tab.",
        "bad": "<a>Visit my site</a>",
        "whybad": "The link has no href, so it does not navigate anywhere.",
        "fix": "<a href=\"https://example.com\">Visit my site</a>",
        "task": "Create a link to https://example.com with text “Open Example”.",
        "hint": "The destination belongs in href.",
        "solution": "<a href=\"https://example.com\">Open Example</a>",
        "quiz": [
          {
            "q": "Which statement best describes “Links and URLs”?",
            "options": [
              "The anchor element creates a hyperlink using its href attribute.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "The anchor element creates a hyperlink using its href attribute."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of links and urls.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use meaningful link text. `target=\"_blank\"` opens a new tab; pair it with `rel=\"noopener noreferrer\"` for safer external links."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The link has no href, so it does not navigate anywhere.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The link has no href, so it does not navigate anywhere. Correct version: <a href=\"https://example.com\">Visit my site</a>"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "html-5",
        "title": "Images and Accessibility",
        "definition": "The img element embeds an image; alt text provides a text alternative.",
        "explain": "`src` points to the image file. `alt` describes meaningful images; use empty alt (`alt=\"\"`) for purely decorative images.",
        "code": "<img src=\"profile.jpg\" alt=\"Portrait of the portfolio author\" width=\"240\">",
        "output": "The browser displays the image if the file exists; assistive technology can read the alt text.",
        "bad": "<img>",
        "whybad": "The image source and alternative text are missing.",
        "fix": "<img src=\"profile.jpg\" alt=\"Profile portrait\">",
        "task": "Add an image named logo.png with alternative text “Site logo”.",
        "hint": "Use src and alt attributes.",
        "solution": "<img src=\"logo.png\" alt=\"Site logo\">",
        "quiz": [
          {
            "q": "Which statement best describes “Images and Accessibility”?",
            "options": [
              "The img element embeds an image; alt text provides a text alternative.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "The img element embeds an image; alt text provides a text alternative."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of images and accessibility.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: `src` points to the image file. `alt` describes meaningful images; use empty alt (`alt=\"\"`) for purely decorative images."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The image source and alternative text are missing.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The image source and alternative text are missing. Correct version: <img src=\"profile.jpg\" alt=\"Profile portrait\">"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "html-6",
        "title": "Lists: ul, ol, li",
        "definition": "HTML lists group related items as unordered or ordered sequences.",
        "explain": "Use `ul` when order does not matter and `ol` when sequence matters. Each item belongs in `li`.",
        "code": "<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n</ul>\n<ol><li>Plan</li><li>Build</li></ol>",
        "output": "A bulleted list of HTML/CSS and a numbered Plan/Build list.",
        "bad": "<ul><p>HTML</p><p>CSS</p></ul>",
        "whybad": "List items should be represented with li, not paragraphs.",
        "fix": "<ul><li>HTML</li><li>CSS</li></ul>",
        "task": "Create an ordered list of three learning steps.",
        "hint": "Wrap each step in li inside ol.",
        "solution": "<ol><li>Learn HTML</li><li>Practise CSS</li><li>Build with JavaScript</li></ol>",
        "quiz": [
          {
            "q": "Which statement best describes “Lists: ul, ol, li”?",
            "options": [
              "HTML lists group related items as unordered or ordered sequences.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "HTML lists group related items as unordered or ordered sequences."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of lists: ul, ol, li.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use `ul` when order does not matter and `ol` when sequence matters. Each item belongs in `li`."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "List items should be represented with li, not paragraphs.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "List items should be represented with li, not paragraphs. Correct version: <ul><li>HTML</li><li>CSS</li></ul>"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "html-7",
        "title": "Tables",
        "definition": "Tables represent tabular data using rows and cells.",
        "explain": "Use `table`, `tr`, `th`, and `td`; include `caption` and `thead`/`tbody` where useful. Do not use tables for page layout.",
        "code": "<table>\n<caption>Scores</caption>\n<tr><th scope=\"col\">Name</th><th scope=\"col\">Score</th></tr>\n<tr><td>D.K. Munna</td><td>90</td></tr>\n</table>",
        "output": "A two-column table with a header row and one data row.",
        "bad": "<table><tr><th>Name<td>Score</tr></table>",
        "whybad": "Cells are improperly nested and several tags are not closed.",
        "fix": "<table><tr><th>Name</th><th>Score</th></tr><tr><td>Munna</td><td>90</td></tr></table>",
        "task": "Build a table with columns Course and Status and one row HTML / Learning.",
        "hint": "Make a row, then put each header or data cell inside it.",
        "solution": "<table><tr><th>Course</th><th>Status</th></tr><tr><td>HTML</td><td>Learning</td></tr></table>",
        "quiz": [
          {
            "q": "Which statement best describes “Tables”?",
            "options": [
              "Tables represent tabular data using rows and cells.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Tables represent tabular data using rows and cells."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of tables.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use `table`, `tr`, `th`, and `td`; include `caption` and `thead`/`tbody` where useful. Do not use tables for page layout."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "Cells are improperly nested and several tags are not closed.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "Cells are improperly nested and several tags are not closed. Correct version: <table><tr><th>Name</th><th>Score</th></tr><tr><td>Munna</td><td>90</td></tr></table>"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "html-8",
        "title": "Forms and Labels",
        "definition": "Forms collect user input through controls such as input, select, textarea, and button.",
        "explain": "Associate each label with a control using matching `for` and `id`. Choose an appropriate input type and name.",
        "code": "<form>\n<label for=\"email\">Email</label>\n<input id=\"email\" name=\"email\" type=\"email\" required>\n<button type=\"submit\">Join</button>\n</form>",
        "output": "An email field with a label and a Join submit button.",
        "bad": "<label>Email</label><input type=\"email\">",
        "whybad": "The label is not programmatically associated with the input and no name is provided.",
        "fix": "<label for=\"email\">Email</label><input id=\"email\" name=\"email\" type=\"email\">",
        "task": "Create a required username field with a correctly associated label.",
        "hint": "Match label for to input id.",
        "solution": "<label for=\"username\">Username</label><input id=\"username\" name=\"username\" required>",
        "quiz": [
          {
            "q": "Which statement best describes “Forms and Labels”?",
            "options": [
              "Forms collect user input through controls such as input, select, textarea, and button.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Forms collect user input through controls such as input, select, textarea, and button."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of forms and labels.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Associate each label with a control using matching `for` and `id`. Choose an appropriate input type and name."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The label is not programmatically associated with the input and no name is provided.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The label is not programmatically associated with the input and no name is provided. Correct version: <label for=\"email\">Email</label><input id=\"email\" name=\"email\" type=\"email\">"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "html-9",
        "title": "Semantic Layout Elements",
        "definition": "Semantic elements communicate the role of page regions.",
        "explain": "Use `header`, `nav`, `main`, `section`, `article`, and `footer` where their meanings fit. Semantic structure improves accessibility and maintainability.",
        "code": "<header><h1>News</h1></header>\n<nav><a href=\"/\">Home</a></nav>\n<main><article><h2>Update</h2><p>Details...</p></article></main>\n<footer>© 2026</footer>",
        "output": "A page divided into header, navigation, main article, and footer regions.",
        "bad": "<div>header</div><div>main</div><div>footer</div>",
        "whybad": "Generic divs do not communicate the intended landmark semantics.",
        "fix": "<header>Header</header><main>Main content</main><footer>Footer</footer>",
        "task": "Convert a simple page into header, main, and footer semantic regions.",
        "hint": "Choose elements by the meaning of each region.",
        "solution": "<header><h1>My Site</h1></header><main><p>Main content</p></main><footer>© 2026</footer>",
        "quiz": [
          {
            "q": "Which statement best describes “Semantic Layout Elements”?",
            "options": [
              "Semantic elements communicate the role of page regions.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Semantic elements communicate the role of page regions."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of semantic layout elements.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use `header`, `nav`, `main`, `section`, `article`, and `footer` where their meanings fit. Semantic structure improves accessibility and maintainability."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "Generic divs do not communicate the intended landmark semantics.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "Generic divs do not communicate the intended landmark semantics. Correct version: <header>Header</header><main>Main content</main><footer>Footer</footer>"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "html-10",
        "title": "Audio, Video and Embeds",
        "definition": "HTML media elements embed audio or video with browser controls.",
        "explain": "Use controls so users can operate media; provide captions for video where possible and a fallback message.",
        "code": "<video controls width=\"320\">\n  <source src=\"lesson.mp4\" type=\"video/mp4\">\n  Your browser does not support video.\n</video>",
        "output": "A video player appears if the file is available and supported.",
        "bad": "<video src=\"lesson.mp4\"></video>",
        "whybad": "Without controls, the user may have no visible way to play or pause the video.",
        "fix": "<video src=\"lesson.mp4\" controls></video>",
        "task": "Embed a podcast audio file called lesson.mp3 with controls.",
        "hint": "Use audio and controls.",
        "solution": "<audio src=\"lesson.mp3\" controls>Your browser cannot play audio.</audio>",
        "quiz": [
          {
            "q": "Which statement best describes “Audio, Video and Embeds”?",
            "options": [
              "HTML media elements embed audio or video with browser controls.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "HTML media elements embed audio or video with browser controls."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of audio, video and embeds.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use controls so users can operate media; provide captions for video where possible and a fallback message."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "Without controls, the user may have no visible way to play or pause the video.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "Without controls, the user may have no visible way to play or pause the video. Correct version: <video src=\"lesson.mp4\" controls></video>"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "html-11",
        "title": "Metadata and SEO Basics",
        "definition": "Metadata gives browsers and search engines information about a page.",
        "explain": "Set a descriptive title, character encoding, and viewport. A useful meta description can summarize the page for search results.",
        "code": "<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>Beginner HTML Guide</title>\n<meta name=\"description\" content=\"Learn HTML fundamentals with examples.\">",
        "output": "The tab title is descriptive and the page is configured for mobile viewport scaling.",
        "bad": "<title>Untitled</title><meta name=\"viewport\">",
        "whybad": "The title is unhelpful and viewport metadata lacks the expected content value.",
        "fix": "<title>HTML Learning Guide</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
        "task": "Add a useful title and responsive viewport metadata.",
        "hint": "The viewport content uses width=device-width and initial-scale=1.",
        "solution": "<title>My Portfolio</title>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
        "quiz": [
          {
            "q": "Which statement best describes “Metadata and SEO Basics”?",
            "options": [
              "Metadata gives browsers and search engines information about a page.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Metadata gives browsers and search engines information about a page."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of metadata and seo basics.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Set a descriptive title, character encoding, and viewport. A useful meta description can summarize the page for search results."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The title is unhelpful and viewport metadata lacks the expected content value.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The title is unhelpful and viewport metadata lacks the expected content value. Correct version: <title>HTML Learning Guide</title><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "html-12",
        "title": "HTML Validation and Best Practices",
        "definition": "Valid HTML follows element, nesting, and attribute rules.",
        "explain": "Close non-void elements, quote attribute values, avoid duplicate IDs, and use a validator. Browsers recover from errors, but recovery may vary.",
        "code": "<button type=\"button\" id=\"save-btn\">Save</button>",
        "output": "A valid button labelled Save.",
        "bad": "<p id=\"x\">One</p><p id=\"x\">Two</p>",
        "whybad": "IDs must be unique within the document.",
        "fix": "<p id=\"first\">One</p><p id=\"second\">Two</p>",
        "task": "Fix duplicate IDs and make the page structure valid.",
        "hint": "Give every element its own ID or use classes for repeated styling.",
        "solution": "<p id=\"intro\">One</p><p id=\"details\">Two</p>",
        "quiz": [
          {
            "q": "Which statement best describes “HTML Validation and Best Practices”?",
            "options": [
              "Valid HTML follows element, nesting, and attribute rules.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Valid HTML follows element, nesting, and attribute rules."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of html validation and best practices.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Close non-void elements, quote attribute values, avoid duplicate IDs, and use a validator. Browsers recover from errors, but recovery may vary."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "IDs must be unique within the document.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "IDs must be unique within the document. Correct version: <p id=\"first\">One</p><p id=\"second\">Two</p>"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "html-project-portfolio",
        "title": "Mini Project: Personal Portfolio Page",
        "definition": "अब तक सीखे गए HTML concepts को एक छोटे portfolio page में जोड़ना।",
        "explain": "इस project में semantic structure, headings, paragraph, links, lists और accessible image को एक ही page में जोड़ा जाता है। पहले structure बनाइए, फिर content को meaningful sections में रखिए।",
        "code": "<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>My Portfolio</title>\n</head>\n<body>\n  <header><h1>D.K. Munna</h1><p>Student & Web Developer</p></header>\n  <main>\n    <section><h2>About Me</h2><p>I am learning to build websites.</p></section>\n    <section><h2>My Skills</h2><ul><li>HTML</li><li>CSS</li></ul></section>\n    <section><h2>Contact</h2><a href=\"mailto:hello@example.com\">Email me</a></section>\n  </main>\n  <footer><p>© 2026 My Portfolio</p></footer>\n</body>\n</html>",
        "output": "A portfolio page with header, About Me, Skills list, Contact link and footer.",
        "bad": "<h1>D.K. Munna\n<p>Student & Web Developer\n<a>Email me</a>",
        "whybad": "Tags are not properly closed and the link has no href, so structure and navigation are incomplete.",
        "fix": "<h1>D.K. Munna</h1>\n<p>Student &amp; Web Developer</p>\n<a href=\"mailto:hello@example.com\">Email me</a>",
        "task": "एक personal portfolio HTML page बनाइए जिसमें Header, About, Skills list, Contact link और Footer हो।",
        "hint": "semantic header, main, section, footer; headings के लिए h1/h2, skills के लिए ul/li और contact के लिए href वाला a tag इस्तेमाल करें।",
        "solution": "<!doctype html>\n<html lang=\"en\">\n<head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>My Portfolio</title></head>\n<body><header><h1>D.K. Munna</h1><p>Student &amp; Web Developer</p></header><main><section><h2>About Me</h2><p>I am learning web development.</p></section><section><h2>Skills</h2><ul><li>HTML</li><li>CSS</li></ul></section><section><h2>Contact</h2><a href=\"mailto:hello@example.com\">Email me</a></section></main><footer><p>© 2026 My Portfolio</p></footer></body></html>",
        "quiz": [
          {
            "q": "Which element should contain the main unique content of the page?",
            "options": [
              "<main>",
              "<footer>",
              "<title>",
              "<meta>"
            ],
            "a": 0,
            "why": "The main element identifies the dominant content of the document."
          },
          {
            "q": "Which element is best for a group of related skills with bullets?",
            "options": [
              "<ul> with <li>",
              "<br> only",
              "<title>",
              "<meta>"
            ],
            "a": 0,
            "why": "ul and li represent an unordered list and its list items."
          },
          {
            "q": "What makes an email link open the email application?",
            "options": [
              "href=\"mailto:...\"",
              "src=\"email\"",
              "target=\"email\"",
              "alt=\"email\""
            ],
            "a": 0,
            "why": "mailto: creates an email link."
          },
          {
            "q": "Why use semantic elements such as header and footer?",
            "options": [
              "To communicate the meaning/structure of page regions",
              "To automatically write CSS",
              "To run Python",
              "To hide all text"
            ],
            "a": 0,
            "why": "Semantic elements provide meaningful page structure."
          },
          {
            "q": "Where should the page title shown in the browser tab go?",
            "options": [
              "Inside head using title",
              "Inside footer using h1",
              "Inside ul",
              "Inside img"
            ],
            "a": 0,
            "why": "The title element belongs in the document head."
          }
        ]
      }
    ]
  },
  "css": {
    "icon": "🎨",
    "name": "CSS",
    "subtitle": "Style & Layout",
    "definition": "CSS describes how HTML elements should look and how they should be arranged.",
    "hindi": "CSS से रंग, font, spacing, borders, responsive layout और animation नियंत्रित होते हैं।",
    "lessons": [
      {
        "id": "css-1",
        "title": "CSS Syntax and Selectors",
        "definition": "A CSS rule contains a selector and a declaration block.",
        "explain": "Selectors target elements; declarations contain property-value pairs. A semicolon ends each declaration.",
        "code": "h1 {\n  color: royalblue;\n  font-size: 2rem;\n}",
        "output": "All h1 headings become royal blue and 2rem in size.",
        "bad": "h1 { color royalblue; font-size: }",
        "whybad": "The color declaration lacks a colon and font-size has no value.",
        "fix": "h1 { color: royalblue; font-size: 2rem; }",
        "task": "Style all paragraphs with a readable line-height.",
        "hint": "Use the p selector and line-height property.",
        "solution": "p { line-height: 1.6; }",
        "quiz": [
          {
            "q": "Which statement best describes “CSS Syntax and Selectors”?",
            "options": [
              "A CSS rule contains a selector and a declaration block.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "A CSS rule contains a selector and a declaration block."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of css syntax and selectors.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Selectors target elements; declarations contain property-value pairs. A semicolon ends each declaration."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The color declaration lacks a colon and font-size has no value.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The color declaration lacks a colon and font-size has no value. Correct version: h1 { color: royalblue; font-size: 2rem; }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "css-2",
        "title": "Colors, Units and Variables",
        "definition": "CSS supports color values, sizing units, and custom properties.",
        "explain": "Use relative units such as rem and percentages where appropriate. CSS custom properties declared with `--name` can be reused through `var()`.",
        "code": " :root { --brand: #5b50f5; }\nbutton { background: var(--brand); color: white; padding: .75rem 1rem; }",
        "output": "Buttons use the reusable brand color and spacing.",
        "bad": "button { color: var(--brand); }",
        "whybad": "The variable is not defined, so the declaration may be invalid at computed-value time.",
        "fix": " :root { --brand: #5b50f5; }\nbutton { color: var(--brand); }",
        "task": "Define a spacing variable and use it for a card padding.",
        "hint": "Declare --space in :root and reference var(--space).",
        "solution": " :root { --space: 1rem; }\n.card { padding: var(--space); }",
        "quiz": [
          {
            "q": "Which statement best describes “Colors, Units and Variables”?",
            "options": [
              "CSS supports color values, sizing units, and custom properties.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "CSS supports color values, sizing units, and custom properties."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of colors, units and variables.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use relative units such as rem and percentages where appropriate. CSS custom properties declared with `--name` can be reused through `var()`."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The variable is not defined, so the declaration may be invalid at computed-value time.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The variable is not defined, so the declaration may be invalid at computed-value time. Correct version:  :root { --brand: #5b50f5; }\nbutton { color: var(--brand); }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "css-3",
        "title": "Box Model",
        "definition": "The box model consists of content, padding, border, and margin.",
        "explain": "With `box-sizing: border-box`, declared width includes content, padding, and border, making layout calculations easier.",
        "code": "* { box-sizing: border-box; }\n.card { width: 300px; padding: 20px; border: 2px solid #999; margin: 16px; }",
        "output": "The card outer width excluding margin is 300px.",
        "bad": "div { width: 300px; padding: 20px; border: 2px solid; }",
        "whybad": "With default content-box, the rendered border box exceeds 300px.",
        "fix": "div { box-sizing: border-box; width: 300px; padding: 20px; border: 2px solid; }",
        "task": "Make a 320px card whose width includes padding and border.",
        "hint": "Use box-sizing: border-box.",
        "solution": ".card { box-sizing: border-box; width: 320px; padding: 24px; border: 1px solid; }",
        "quiz": [
          {
            "q": "Which statement best describes “Box Model”?",
            "options": [
              "The box model consists of content, padding, border, and margin.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "The box model consists of content, padding, border, and margin."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of box model.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: With `box-sizing: border-box`, declared width includes content, padding, and border, making layout calculations easier."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "With default content-box, the rendered border box exceeds 300px.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "With default content-box, the rendered border box exceeds 300px. Correct version: div { box-sizing: border-box; width: 300px; padding: 20px; border: 2px solid; }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "css-4",
        "title": "Typography",
        "definition": "Typography styles text using font family, size, weight, line height, and spacing.",
        "explain": "Set readable line-height and a fallback font stack. Keep text contrast high and avoid too many font styles.",
        "code": "body { font-family: Arial, sans-serif; line-height: 1.6; }\nh1 { font-size: clamp(2rem, 5vw, 3rem); }",
        "output": "Body text uses a readable line-height and the heading scales with viewport size.",
        "bad": "p { font-size: huge; }",
        "whybad": "huge is not a valid CSS font-size value.",
        "fix": "p { font-size: 1rem; }",
        "task": "Style body text with a system font and 1.6 line-height.",
        "hint": "font-family and line-height are the key properties.",
        "solution": "body { font-family: system-ui, sans-serif; line-height: 1.6; }",
        "quiz": [
          {
            "q": "Which statement best describes “Typography”?",
            "options": [
              "Typography styles text using font family, size, weight, line height, and spacing.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Typography styles text using font family, size, weight, line height, and spacing."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of typography.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Set readable line-height and a fallback font stack. Keep text contrast high and avoid too many font styles."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "huge is not a valid CSS font-size value.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "huge is not a valid CSS font-size value. Correct version: p { font-size: 1rem; }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "css-5",
        "title": "Backgrounds and Borders",
        "definition": "Background and border properties decorate element surfaces and edges.",
        "explain": "Use `background-color`, `background-image`, `border`, and `border-radius` intentionally. Ensure text stays readable over backgrounds.",
        "code": " .card { background-color: #101f3d; border: 1px solid #35517b; border-radius: 12px; }",
        "output": "A dark card with a subtle border and rounded corners.",
        "bad": ".card { background: #101f3d border-radius 12px }",
        "whybad": "The declarations are missing separators and property colons.",
        "fix": ".card { background: #101f3d; border-radius: 12px; }",
        "task": "Give a card a white background, gray border, and 8px rounded corners.",
        "hint": "Use background, border, border-radius.",
        "solution": ".card { background: white; border: 1px solid #ccc; border-radius: 8px; }",
        "quiz": [
          {
            "q": "Which statement best describes “Backgrounds and Borders”?",
            "options": [
              "Background and border properties decorate element surfaces and edges.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Background and border properties decorate element surfaces and edges."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of backgrounds and borders.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use `background-color`, `background-image`, `border`, and `border-radius` intentionally. Ensure text stays readable over backgrounds."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The declarations are missing separators and property colons.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The declarations are missing separators and property colons. Correct version: .card { background: #101f3d; border-radius: 12px; }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "css-6",
        "title": "Display and Positioning",
        "definition": "Display controls layout behavior; position controls how an element is positioned.",
        "explain": "Common display values include block, inline, inline-block, flex, and grid. Position values include static, relative, absolute, fixed, and sticky.",
        "code": " .badge { display: inline-block; position: relative; padding: .25rem .5rem; }",
        "output": "The badge flows inline but accepts box dimensions; its positioned offset can be relative to its normal position.",
        "bad": ".badge { display: flex-inline; }",
        "whybad": "flex-inline is not a valid display value.",
        "fix": ".badge { display: inline-flex; }",
        "task": "Make a badge use inline-flex and align its contents centrally.",
        "hint": "Use display: inline-flex; align-items and justify-content.",
        "solution": ".badge { display: inline-flex; align-items: center; justify-content: center; }",
        "quiz": [
          {
            "q": "Which statement best describes “Display and Positioning”?",
            "options": [
              "Display controls layout behavior; position controls how an element is positioned.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Display controls layout behavior; position controls how an element is positioned."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of display and positioning.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Common display values include block, inline, inline-block, flex, and grid. Position values include static, relative, absolute, fixed, and sticky."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "flex-inline is not a valid display value.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "flex-inline is not a valid display value. Correct version: .badge { display: inline-flex; }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "css-7",
        "title": "Flexbox",
        "definition": "Flexbox arranges items along a main axis and cross axis.",
        "explain": "Apply `display:flex` to a container. Use `justify-content` for the main axis and `align-items` for the cross axis; direction changes the axes.",
        "code": " .row { display: flex; justify-content: space-between; align-items: center; gap: 1rem; }",
        "output": "Children appear in a row, spaced apart and vertically aligned.",
        "bad": ".row { display: flex; justify-content: centre; }",
        "whybad": "The CSS value is spelled center, not centre.",
        "fix": ".row { display: flex; justify-content: center; }",
        "task": "Center items horizontally and vertically in a container.",
        "hint": "Use flex plus both alignment properties.",
        "solution": ".box { display: flex; justify-content: center; align-items: center; }",
        "quiz": [
          {
            "q": "Which statement best describes “Flexbox”?",
            "options": [
              "Flexbox arranges items along a main axis and cross axis.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Flexbox arranges items along a main axis and cross axis."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of flexbox.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Apply `display:flex` to a container. Use `justify-content` for the main axis and `align-items` for the cross axis; direction changes the axes."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The CSS value is spelled center, not centre.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The CSS value is spelled center, not centre. Correct version: .row { display: flex; justify-content: center; }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "css-8",
        "title": "CSS Grid",
        "definition": "Grid creates two-dimensional rows-and-columns layouts.",
        "explain": "Use `display:grid` and define tracks with `grid-template-columns`; `fr` distributes available space. `gap` controls spacing between tracks.",
        "code": " .cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }",
        "output": "A three-column responsive-friendly grid with equal-width columns.",
        "bad": ".cards { display: grid; grid-template-columns: 3; }",
        "whybad": "grid-template-columns needs valid track sizes, not a lone number.",
        "fix": ".cards { display: grid; grid-template-columns: repeat(3, 1fr); }",
        "task": "Create two equal columns with a 20px gap.",
        "hint": "Use repeat(2, 1fr) and gap.",
        "solution": ".layout { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }",
        "quiz": [
          {
            "q": "Which statement best describes “CSS Grid”?",
            "options": [
              "Grid creates two-dimensional rows-and-columns layouts.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Grid creates two-dimensional rows-and-columns layouts."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of css grid.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use `display:grid` and define tracks with `grid-template-columns`; `fr` distributes available space. `gap` controls spacing between tracks."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "grid-template-columns needs valid track sizes, not a lone number.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "grid-template-columns needs valid track sizes, not a lone number. Correct version: .cards { display: grid; grid-template-columns: repeat(3, 1fr); }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "css-9",
        "title": "Responsive Design and Media Queries",
        "definition": "Responsive design adapts layout to different viewport sizes and capabilities.",
        "explain": "Start with a flexible layout and add media queries at content-driven breakpoints. Avoid relying on one exact device width.",
        "code": " .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }\n@media (max-width: 700px) { .grid { grid-template-columns: 1fr; } }",
        "output": "Three columns become one column at widths of 700px or less.",
        "bad": "@media(max-width:700px) .grid { display:block; }",
        "whybad": "A media query requires braces around its rule block.",
        "fix": "@media (max-width: 700px) { .grid { display: block; } }",
        "task": "Make a two-column layout become one column below 600px.",
        "hint": "Wrap the mobile rule inside @media braces.",
        "solution": "@media (max-width: 600px) { .layout { grid-template-columns: 1fr; } }",
        "quiz": [
          {
            "q": "Which statement best describes “Responsive Design and Media Queries”?",
            "options": [
              "Responsive design adapts layout to different viewport sizes and capabilities.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Responsive design adapts layout to different viewport sizes and capabilities."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of responsive design and media queries.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Start with a flexible layout and add media queries at content-driven breakpoints. Avoid relying on one exact device width."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "A media query requires braces around its rule block.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "A media query requires braces around its rule block. Correct version: @media (max-width: 700px) { .grid { display: block; } }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "css-10",
        "title": "Pseudo-classes and Pseudo-elements",
        "definition": "Pseudo-classes select element states; pseudo-elements style a specific part or generated content.",
        "explain": "`:hover`, `:focus-visible`, and `:checked` describe states. `::before` and `::after` create generated content and usually require `content`.",
        "code": "button:hover { filter: brightness(1.1); }\nbutton:focus-visible { outline: 3px solid orange; }",
        "output": "Hover brightens the button and keyboard focus gets a visible outline.",
        "bad": "button::before { color: red; }",
        "whybad": "Generated pseudo-elements need a content declaration to create generated content.",
        "fix": "button::before { content: \"→ \"; color: red; }",
        "task": "Add a visible keyboard focus outline to links.",
        "hint": "Use :focus-visible and outline.",
        "solution": "a:focus-visible { outline: 2px solid #ffb703; outline-offset: 3px; }",
        "quiz": [
          {
            "q": "Which statement best describes “Pseudo-classes and Pseudo-elements”?",
            "options": [
              "Pseudo-classes select element states; pseudo-elements style a specific part or generated content.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Pseudo-classes select element states; pseudo-elements style a specific part or generated content."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of pseudo-classes and pseudo-elements.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: `:hover`, `:focus-visible`, and `:checked` describe states. `::before` and `::after` create generated content and usually require `content`."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "Generated pseudo-elements need a content declaration to create generated content.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "Generated pseudo-elements need a content declaration to create generated content. Correct version: button::before { content: \"→ \"; color: red; }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "css-11",
        "title": "Transitions, Transforms and Animation",
        "definition": "Transitions animate property changes; transforms move, rotate, or scale elements.",
        "explain": "Animate only properties that make sense for interaction. CSS keyframes define animation steps; respect reduced-motion preferences.",
        "code": "button { transition: transform .2s ease; }\nbutton:hover { transform: translateY(-2px); }",
        "output": "The button smoothly lifts by 2px on hover.",
        "bad": "button { transition: all -2s; }",
        "whybad": "A negative transition duration is invalid.",
        "fix": "button { transition: transform .2s ease; }",
        "task": "Add a short background-color transition to a button.",
        "hint": "Use transition with a positive duration.",
        "solution": "button { transition: background-color .2s ease; }",
        "quiz": [
          {
            "q": "Which statement best describes “Transitions, Transforms and Animation”?",
            "options": [
              "Transitions animate property changes; transforms move, rotate, or scale elements.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Transitions animate property changes; transforms move, rotate, or scale elements."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of transitions, transforms and animation.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Animate only properties that make sense for interaction. CSS keyframes define animation steps; respect reduced-motion preferences."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "A negative transition duration is invalid.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "A negative transition duration is invalid. Correct version: button { transition: transform .2s ease; }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "css-12",
        "title": "Cascade, Specificity and Maintainable CSS",
        "definition": "The cascade resolves competing declarations using origin, importance, layers, specificity, and source order.",
        "explain": "Prefer simple classes over long selectors and avoid unnecessary `!important`. Keep styles organized and use design tokens for repeated values.",
        "code": ":root { --space: 1rem; }\n.card { padding: var(--space); color: #222; }\n.card.is-featured { border: 2px solid royalblue; }",
        "output": "The reusable card styles apply, with a stronger border for featured cards.",
        "bad": "#main .page section div p span { color: red !important; }",
        "whybad": "Overly specific selectors and !important make future changes difficult.",
        "fix": ".message { color: red; }",
        "task": "Refactor a long selector into a reusable class.",
        "hint": "Use a meaningful class on the target element.",
        "solution": ".message { color: red; }",
        "quiz": [
          {
            "q": "Which statement best describes “Cascade, Specificity and Maintainable CSS”?",
            "options": [
              "The cascade resolves competing declarations using origin, importance, layers, specificity, and source order.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "The cascade resolves competing declarations using origin, importance, layers, specificity, and source order."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of cascade, specificity and maintainable css.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Prefer simple classes over long selectors and avoid unnecessary `!important`. Keep styles organized and use design tokens for repeated values."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "Overly specific selectors and !important make future changes difficult.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "Overly specific selectors and !important make future changes difficult. Correct version: .message { color: red; }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "css-project-responsive-card",
        "title": "Mini Project: Responsive Profile Card",
        "definition": "Flexbox, spacing, colors, borders and media queries को जोड़कर responsive profile card बनाना।",
        "explain": "CSS project में HTML elements को selectors से target करके visual hierarchy बनाते हैं। छोटे screen पर width बदलने के लिए media query का उपयोग करें।",
        "code": ".profile-card {\n  max-width: 420px;\n  margin: 24px auto;\n  padding: 24px;\n  border: 1px solid #d8deea;\n  border-radius: 16px;\n  font-family: Arial, sans-serif;\n  box-shadow: 0 8px 24px #0001;\n}\n.profile-card h2 { color: #214a87; }\n.profile-card .skills { display: flex; gap: 8px; flex-wrap: wrap; }\n@media (max-width: 480px) { .profile-card { margin: 12px; padding: 16px; } }",
        "output": "A centered profile card with rounded border, shadow, blue heading, wrapping skill chips and reduced spacing on narrow screens.",
        "bad": ".profile-card { width: 900px; padding: 24; }\n.profile-card h2 { color: blue }",
        "whybad": "The fixed width overflows small screens and padding has no unit; the style also lacks responsive behavior.",
        "fix": ".profile-card { max-width: 420px; width: 100%; box-sizing: border-box; padding: 24px; }\n@media (max-width: 480px) { .profile-card { padding: 16px; } }",
        "task": "एक responsive profile card style करें जिसमें max-width, padding, rounded border, heading color और mobile media query हो।",
        "hint": "max-width और width:100% का combination रखें; padding के लिए px/rem दें; @media (max-width: 480px) में mobile spacing बदलें।",
        "solution": ".profile-card { max-width: 420px; width: 100%; box-sizing: border-box; margin: 24px auto; padding: 24px; border: 1px solid #d8deea; border-radius: 16px; font-family: Arial, sans-serif; }\n.profile-card h2 { color: #214a87; }\n@media (max-width: 480px) { .profile-card { margin: 12px; padding: 16px; } }",
        "quiz": [
          {
            "q": "Which property prevents the card from becoming wider than a chosen limit?",
            "options": [
              "max-width",
              "font-style",
              "text-decoration",
              "z-index"
            ],
            "a": 0,
            "why": "max-width limits the maximum width."
          },
          {
            "q": "Which unit is valid for padding?",
            "options": [
              "24px",
              "24",
              "padding()",
              "px24"
            ],
            "a": 0,
            "why": "CSS length values normally need a unit such as px or rem, except zero."
          },
          {
            "q": "What is the purpose of a media query?",
            "options": [
              "Apply styles conditionally based on viewport/device conditions",
              "Create HTML tags",
              "Store JavaScript variables",
              "Add a database"
            ],
            "a": 0,
            "why": "Media queries let CSS adapt to viewport conditions."
          },
          {
            "q": "Which display value enables Flexbox layout?",
            "options": [
              "display: flex",
              "position: flex",
              "float: flex",
              "layout: row"
            ],
            "a": 0,
            "why": "display:flex activates flex layout."
          },
          {
            "q": "Why use box-sizing: border-box?",
            "options": [
              "Width includes padding and border",
              "It makes text bold",
              "It changes HTML semantics",
              "It imports a stylesheet"
            ],
            "a": 0,
            "why": "border-box makes sizing easier by including padding and borders in declared width."
          }
        ]
      }
    ]
  },
  "js": {
    "icon": "⚡",
    "name": "JavaScript",
    "subtitle": "Logic & Interactivity",
    "definition": "JavaScript adds behavior, logic, and dynamic interaction to web pages.",
    "hindi": "JavaScript से buttons, validation, calculations, DOM changes, events और asynchronous data सम्भव होते हैं।",
    "lessons": [
      {
        "id": "js-1",
        "title": "Variables: let, const, var",
        "definition": "Variables are names that refer to values; let and const provide block-scoped declarations.",
        "explain": "Use `const` by default, `let` when reassignment is needed, and avoid `var` in modern code because its scoping behavior can surprise.",
        "code": "const course = \"JavaScript\";\nlet xp = 0;\nxp += 10;\nconsole.log(course, xp);",
        "output": "JavaScript 10",
        "bad": "const xp = 0; xp = 10;",
        "whybad": "A const binding cannot be reassigned.",
        "fix": "let xp = 0; xp = 10; console.log(xp);",
        "task": "Store a learner name as const and a score as let.",
        "hint": "Choose const for the name and let for a changing score.",
        "solution": "const learner = \"D.K. Munna\";\nlet score = 0;\nscore += 5;\nconsole.log(learner, score);",
        "quiz": [
          {
            "q": "Which statement best describes “Variables: let, const, var”?",
            "options": [
              "Variables are names that refer to values; let and const provide block-scoped declarations.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Variables are names that refer to values; let and const provide block-scoped declarations."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of variables: let, const, var.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use `const` by default, `let` when reassignment is needed, and avoid `var` in modern code because its scoping behavior can surprise."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "A const binding cannot be reassigned.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "A const binding cannot be reassigned. Correct version: let xp = 0; xp = 10; console.log(xp);"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-2",
        "title": "Data Types and Type Conversion",
        "definition": "JavaScript values have types such as string, number, boolean, undefined, null, object, and bigint.",
        "explain": "`typeof` helps inspect many values. Convert user input explicitly with `Number()` when numeric behavior is required.",
        "code": "const raw = \"12\";\nconst value = Number(raw);\nconsole.log(value + 3);\nconsole.log(typeof value);",
        "output": "15\nnumber",
        "bad": "console.log(\"12\" + 3);",
        "whybad": "The + operator concatenates when one operand is a string, producing 123.",
        "fix": "console.log(Number(\"12\") + 3);",
        "task": "Convert the string \"42\" to a number and add 8.",
        "hint": "Wrap the string with Number().",
        "solution": "console.log(Number(\"42\") + 8);",
        "quiz": [
          {
            "q": "Which statement best describes “Data Types and Type Conversion”?",
            "options": [
              "JavaScript values have types such as string, number, boolean, undefined, null, object, and bigint.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "JavaScript values have types such as string, number, boolean, undefined, null, object, and bigint."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of data types and type conversion.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: `typeof` helps inspect many values. Convert user input explicitly with `Number()` when numeric behavior is required."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The + operator concatenates when one operand is a string, producing 123.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The + operator concatenates when one operand is a string, producing 123. Correct version: console.log(Number(\"12\") + 3);"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-3",
        "title": "Operators and Expressions",
        "definition": "Operators combine values to produce a result.",
        "explain": "Arithmetic includes +, -, *, /, %, **. Strict equality `===` compares without type coercion; logical operators include &&, ||, and !.",
        "code": "console.log(7 % 3);\nconsole.log(5 === \"5\");\nconsole.log(true && false);",
        "output": "1\nfalse\nfalse",
        "bad": "if (5 = 5) { console.log(\"yes\"); }",
        "whybad": "Assignment is not a comparison and cannot be used as this condition.",
        "fix": "if (5 === 5) { console.log(\"yes\"); }",
        "task": "Check if a value equals 10 using strict equality.",
        "hint": "Use ===, not =.",
        "solution": "const value = 10; console.log(value === 10);",
        "quiz": [
          {
            "q": "Which statement best describes “Operators and Expressions”?",
            "options": [
              "Operators combine values to produce a result.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Operators combine values to produce a result."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of operators and expressions.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Arithmetic includes +, -, *, /, %, **. Strict equality `===` compares without type coercion; logical operators include &&, ||, and !."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "Assignment is not a comparison and cannot be used as this condition.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "Assignment is not a comparison and cannot be used as this condition. Correct version: if (5 === 5) { console.log(\"yes\"); }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-4",
        "title": "Conditionals",
        "definition": "Conditionals choose which code runs based on a boolean expression.",
        "explain": "Use if/else if/else for branches. Make conditions specific and prefer strict comparisons.",
        "code": "const score = 82;\nif (score >= 80) console.log(\"Great\");\nelse console.log(\"Keep practising\");",
        "output": "Great",
        "bad": "const score = 82; if (score > 100) console.log(\"Great\"); else console.log(\"Keep practising\");",
        "whybad": "The threshold does not match the intended rule of scores 80 or above.",
        "fix": "if (score >= 80) console.log(\"Great\");",
        "task": "Print “Pass” when marks are at least 40, otherwise “Try again”.",
        "hint": "Use if marks >= 40, else.",
        "solution": "const marks = 55;\nif (marks >= 40) console.log(\"Pass\"); else console.log(\"Try again\");",
        "quiz": [
          {
            "q": "Which statement best describes “Conditionals”?",
            "options": [
              "Conditionals choose which code runs based on a boolean expression.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Conditionals choose which code runs based on a boolean expression."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of conditionals.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use if/else if/else for branches. Make conditions specific and prefer strict comparisons."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The threshold does not match the intended rule of scores 80 or above.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The threshold does not match the intended rule of scores 80 or above. Correct version: if (score >= 80) console.log(\"Great\");"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-5",
        "title": "Loops: for and while",
        "definition": "Loops repeat a block of code while a condition or iteration sequence requires it.",
        "explain": "Use for when counting or iterating over collections; use while when repetition depends on a condition. Ensure a while loop can eventually stop.",
        "code": "for (let i = 1; i <= 3; i++) console.log(i);",
        "output": "1\n2\n3",
        "bad": "for (let i = 1; i <= 3; i--) console.log(i);",
        "whybad": "i decreases while the condition i <= 3 remains true, so this loop does not terminate normally.",
        "fix": "for (let i = 1; i <= 3; i++) console.log(i);",
        "task": "Print even numbers 2, 4, 6, 8 using a loop.",
        "hint": "Start at 2 and increase by 2 while <= 8.",
        "solution": "for (let n = 2; n <= 8; n += 2) console.log(n);",
        "quiz": [
          {
            "q": "Which statement best describes “Loops: for and while”?",
            "options": [
              "Loops repeat a block of code while a condition or iteration sequence requires it.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Loops repeat a block of code while a condition or iteration sequence requires it."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of loops: for and while.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use for when counting or iterating over collections; use while when repetition depends on a condition. Ensure a while loop can eventually stop."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "i decreases while the condition i <= 3 remains true, so this loop does not terminate normally.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "i decreases while the condition i <= 3 remains true, so this loop does not terminate normally. Correct version: for (let i = 1; i <= 3; i++) console.log(i);"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-6",
        "title": "Functions and Return Values",
        "definition": "A function is a reusable block of code that can accept inputs and return a result.",
        "explain": "Parameters are names in the function definition; arguments are values passed during a call. `return` sends a value back to the caller.",
        "code": "function add(a, b) { return a + b; }\nconsole.log(add(4, 6));",
        "output": "10",
        "bad": "function add(a, b) { a + b; } console.log(add(4, 6));",
        "whybad": "The function calculates an expression but does not return it, so the result is undefined.",
        "fix": "function add(a, b) { return a + b; }",
        "task": "Write a function that returns the square of a number.",
        "hint": "Return n * n.",
        "solution": "function square(n) { return n * n; }\nconsole.log(square(5));",
        "quiz": [
          {
            "q": "Which statement best describes “Functions and Return Values”?",
            "options": [
              "A function is a reusable block of code that can accept inputs and return a result.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "A function is a reusable block of code that can accept inputs and return a result."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of functions and return values.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Parameters are names in the function definition; arguments are values passed during a call. `return` sends a value back to the caller."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The function calculates an expression but does not return it, so the result is undefined.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The function calculates an expression but does not return it, so the result is undefined. Correct version: function add(a, b) { return a + b; }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-7",
        "title": "Arrays",
        "definition": "An array stores an ordered collection of values and uses zero-based indexes.",
        "explain": "Use `push()` to add to the end, `length` to get item count, and loops or array methods to process values.",
        "code": "const skills = [\"HTML\", \"CSS\"];\nskills.push(\"JavaScript\");\nconsole.log(skills[0]);\nconsole.log(skills.length);",
        "output": "HTML\n3",
        "bad": "const skills = [\"HTML\", \"CSS\"]; console.log(skills[2].toUpperCase());",
        "whybad": "Index 2 does not exist until another item is added; undefined has no toUpperCase method.",
        "fix": "const skills = [\"HTML\", \"CSS\", \"JavaScript\"]; console.log(skills[2]);",
        "task": "Create an array of three courses and print the second one.",
        "hint": "The second element has index 1.",
        "solution": "const courses = [\"HTML\", \"CSS\", \"JavaScript\"]; console.log(courses[1]);",
        "quiz": [
          {
            "q": "Which statement best describes “Arrays”?",
            "options": [
              "An array stores an ordered collection of values and uses zero-based indexes.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "An array stores an ordered collection of values and uses zero-based indexes."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of arrays.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use `push()` to add to the end, `length` to get item count, and loops or array methods to process values."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "Index 2 does not exist until another item is added; undefined has no toUpperCase method.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "Index 2 does not exist until another item is added; undefined has no toUpperCase method. Correct version: const skills = [\"HTML\", \"CSS\", \"JavaScript\"]; console.log(skills[2]);"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-8",
        "title": "Objects",
        "definition": "Objects store related information as key-value properties.",
        "explain": "Use dot notation for known property names and bracket notation for dynamic keys. Methods are functions stored as properties.",
        "code": "const learner = { name: \"Munna\", xp: 20 };\nconsole.log(learner.name);\nconsole.log(learner.xp);",
        "output": "Munna\n20",
        "bad": "const learner = { name: \"Munna\" }; console.log(learner.age.toString());",
        "whybad": "age is undefined, so calling a method on it causes a TypeError.",
        "fix": "const learner = { name: \"Munna\", age: 20 }; console.log(learner.age);",
        "task": "Create an object with title and completed properties.",
        "hint": "Use curly braces and key:value pairs.",
        "solution": "const lesson = { title: \"DOM Basics\", completed: false }; console.log(lesson.title);",
        "quiz": [
          {
            "q": "Which statement best describes “Objects”?",
            "options": [
              "Objects store related information as key-value properties.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Objects store related information as key-value properties."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of objects.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use dot notation for known property names and bracket notation for dynamic keys. Methods are functions stored as properties."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "age is undefined, so calling a method on it causes a TypeError.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "age is undefined, so calling a method on it causes a TypeError. Correct version: const learner = { name: \"Munna\", age: 20 }; console.log(learner.age);"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-9",
        "title": "DOM Selection and Updates",
        "definition": "The DOM is the browser object representation of the document that JavaScript can inspect and change.",
        "explain": "Use `querySelector()` to select the first matching element and `textContent` to update text safely. Run DOM code after the element exists.",
        "code": "<!-- HTML: <h1 id=\"title\">Old</h1> -->\n<script>document.querySelector(\"#title\").textContent = \"New title\";</script>",
        "output": "The heading text changes to “New title”.",
        "bad": "document.querySelector(\"#missing\").textContent = \"Hi\";",
        "whybad": "No element matches #missing, so the result is null and textContent access fails.",
        "fix": "const title = document.querySelector(\"#title\");\nif (title) title.textContent = \"Hi\";",
        "task": "Select an element with id message and change its text to “Welcome”.",
        "hint": "Use querySelector(\"#message\") and textContent.",
        "solution": "const message = document.querySelector(\"#message\"); if (message) message.textContent = \"Welcome\";",
        "quiz": [
          {
            "q": "Which statement best describes “DOM Selection and Updates”?",
            "options": [
              "The DOM is the browser object representation of the document that JavaScript can inspect and change.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "The DOM is the browser object representation of the document that JavaScript can inspect and change."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of dom selection and updates.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use `querySelector()` to select the first matching element and `textContent` to update text safely. Run DOM code after the element exists."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "No element matches #missing, so the result is null and textContent access fails.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "No element matches #missing, so the result is null and textContent access fails. Correct version: const title = document.querySelector(\"#title\");\nif (title) title.textContent = \"Hi\";"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-10",
        "title": "Events and Event Listeners",
        "definition": "An event listener runs a function when an event occurs, such as a click or input.",
        "explain": "Use `addEventListener()` rather than inline HTML handlers. The callback receives an event object when useful.",
        "code": "button.addEventListener(\"click\", () => {\n  console.log(\"Clicked!\");\n});",
        "output": "When the button is clicked, the console shows Clicked!",
        "bad": "button.addEventListener(\"click\", console.log(\"Clicked!\"));",
        "whybad": "console.log runs immediately and its return value is passed instead of a callback function.",
        "fix": "button.addEventListener(\"click\", () => console.log(\"Clicked!\"));",
        "task": "Attach a click handler that increases a counter by one.",
        "hint": "Pass a function callback to addEventListener.",
        "solution": "let count = 0;\nbutton.addEventListener(\"click\", () => { count++; console.log(count); });",
        "quiz": [
          {
            "q": "Which statement best describes “Events and Event Listeners”?",
            "options": [
              "An event listener runs a function when an event occurs, such as a click or input.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "An event listener runs a function when an event occurs, such as a click or input."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of events and event listeners.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use `addEventListener()` rather than inline HTML handlers. The callback receives an event object when useful."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "console.log runs immediately and its return value is passed instead of a callback function.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "console.log runs immediately and its return value is passed instead of a callback function. Correct version: button.addEventListener(\"click\", () => console.log(\"Clicked!\"));"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-11",
        "title": "Forms and Validation",
        "definition": "Form validation checks whether submitted input meets expected rules.",
        "explain": "Use built-in HTML constraints where possible and JavaScript for additional behavior. Client-side validation improves experience but does not replace server-side validation.",
        "code": "form.addEventListener(\"submit\", event => {\n  event.preventDefault();\n  const value = input.value.trim();\n  if (!value) error.textContent = \"Required\";\n});",
        "output": "The page does not reload; an empty value displays “Required”.",
        "bad": "if (input.value = \"\") { error.textContent = \"Required\"; }",
        "whybad": "Single equals assigns an empty string instead of testing the value.",
        "fix": "if (input.value.trim() === \"\") { error.textContent = \"Required\"; }",
        "task": "Check whether an email input is empty after trimming whitespace.",
        "hint": "Use trim() and strict equality with an empty string.",
        "solution": "if (email.value.trim() === \"\") { error.textContent = \"Email is required\"; }",
        "quiz": [
          {
            "q": "Which statement best describes “Forms and Validation”?",
            "options": [
              "Form validation checks whether submitted input meets expected rules.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Form validation checks whether submitted input meets expected rules."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of forms and validation.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use built-in HTML constraints where possible and JavaScript for additional behavior. Client-side validation improves experience but does not replace server-side validation."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "Single equals assigns an empty string instead of testing the value.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "Single equals assigns an empty string instead of testing the value. Correct version: if (input.value.trim() === \"\") { error.textContent = \"Required\"; }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-12",
        "title": "JSON and Local Storage",
        "definition": "JSON is a text format for exchanging structured data; localStorage stores string values in the browser.",
        "explain": "Use `JSON.stringify()` to store objects and `JSON.parse()` to restore them. Handle invalid data and never store secrets in localStorage.",
        "code": "const user = { name: \"Munna\", xp: 10 };\nlocalStorage.setItem(\"user\", JSON.stringify(user));\nconst saved = JSON.parse(localStorage.getItem(\"user\"));\nconsole.log(saved.xp);",
        "output": "10 (when run in a browser with localStorage available)",
        "bad": "localStorage.setItem(\"user\", { name: \"Munna\" });",
        "whybad": "Storage converts values to strings; a plain object becomes an unhelpful string like [object Object].",
        "fix": "localStorage.setItem(\"user\", JSON.stringify({ name: \"Munna\" }));",
        "task": "Save an object with theme: dark to localStorage as JSON.",
        "hint": "Stringify the object before setItem.",
        "solution": "const settings = { theme: \"dark\" }; localStorage.setItem(\"settings\", JSON.stringify(settings));",
        "quiz": [
          {
            "q": "Which statement best describes “JSON and Local Storage”?",
            "options": [
              "JSON is a text format for exchanging structured data; localStorage stores string values in the browser.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "JSON is a text format for exchanging structured data; localStorage stores string values in the browser."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of json and local storage.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use `JSON.stringify()` to store objects and `JSON.parse()` to restore them. Handle invalid data and never store secrets in localStorage."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "Storage converts values to strings; a plain object becomes an unhelpful string like [object Object].",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "Storage converts values to strings; a plain object becomes an unhelpful string like [object Object]. Correct version: localStorage.setItem(\"user\", JSON.stringify({ name: \"Munna\" }));"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-13",
        "title": "Asynchronous JavaScript: Promises and async/await",
        "definition": "Asynchronous code allows work such as network requests to finish without blocking the main thread.",
        "explain": "A Promise represents a future result. `async` functions return promises; `await` pauses that function until a promise settles. Catch errors with try/catch.",
        "code": "async function loadData() {\n  try { const response = await fetch(\"/api/data\");\n    if (!response.ok) throw new Error(\"Request failed\");\n    return await response.json();\n  } catch (error) { console.error(error.message); }\n}",
        "output": "For a successful request, the function returns parsed JSON; failures are caught and logged.",
        "bad": "const data = await fetch(\"/api/data\");",
        "whybad": "Top-level await is not supported in every script context, and fetch returns a Response rather than parsed JSON.",
        "fix": "async function run() { const response = await fetch(\"/api/data\"); return await response.json(); }",
        "task": "Write an async function that fetches JSON and checks response.ok.",
        "hint": "Use async, await, and an if (!response.ok) check.",
        "solution": "async function getData() { const r = await fetch(\"/api/data\"); if (!r.ok) throw new Error(\"Request failed\"); return await r.json(); }",
        "quiz": [
          {
            "q": "Which statement best describes “Asynchronous JavaScript: Promises and async/await”?",
            "options": [
              "Asynchronous code allows work such as network requests to finish without blocking the main thread.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Asynchronous code allows work such as network requests to finish without blocking the main thread."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of asynchronous javascript: promises and async/await.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: A Promise represents a future result. `async` functions return promises; `await` pauses that function until a promise settles. Catch errors with try/catch."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "Top-level await is not supported in every script context, and fetch returns a Response rather than parsed JSON.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "Top-level await is not supported in every script context, and fetch returns a Response rather than parsed JSON. Correct version: async function run() { const response = await fetch(\"/api/data\"); return await response.json(); }"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-14",
        "title": "Modules and Imports",
        "definition": "JavaScript modules split code into files and explicitly export or import values.",
        "explain": "Use `export` to expose a binding and `import` to use it elsewhere. Browsers generally need a server and `<script type=\"module\">` for module imports.",
        "code": "// math.js\nexport const double = n => n * 2;\n// app.js\nimport { double } from \"./math.js\";\nconsole.log(double(4));",
        "output": "8 (when app.js is loaded as a module in a compatible environment)",
        "bad": "export default function greet() {}\nimport { greet } from \"./greet.js\";",
        "whybad": "A default export is imported without curly braces; named imports must match named exports.",
        "fix": "// greet.js: export function greet() {}\n// app.js: import { greet } from \"./greet.js\";",
        "task": "Export a named function called sayHi and import it by name.",
        "hint": "Use matching named export/import identifiers.",
        "solution": "// greetings.js\nexport function sayHi() { return \"Hi\"; }\n// app.js\nimport { sayHi } from \"./greetings.js\";\nconsole.log(sayHi());",
        "quiz": [
          {
            "q": "Which statement best describes “Modules and Imports”?",
            "options": [
              "JavaScript modules split code into files and explicitly export or import values.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "JavaScript modules split code into files and explicitly export or import values."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of modules and imports.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Use `export` to expose a binding and `import` to use it elsewhere. Browsers generally need a server and `<script type=\"module\">` for module imports."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "A default export is imported without curly braces; named imports must match named exports.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "A default export is imported without curly braces; named imports must match named exports. Correct version: // greet.js: export function greet() {}\n// app.js: import { greet } from \"./greet.js\";"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-15",
        "title": "Debugging, Errors and DevTools",
        "definition": "Debugging is the process of finding and fixing defects in code.",
        "explain": "Read the first useful error line, inspect the stack trace, log intermediate values, use breakpoints, and reproduce the issue with a small example.",
        "code": "const total = 10;\nconsole.log(\"total:\", total);\n// In DevTools, set a breakpoint here and inspect total.",
        "output": "Console displays total: 10.",
        "bad": "console.log(totla);",
        "whybad": "The identifier is misspelled, causing a ReferenceError.",
        "fix": "const total = 10; console.log(total);",
        "task": "Fix a misspelled variable and log the correct value.",
        "hint": "Compare spelling in declaration and use.",
        "solution": "const total = 10; console.log(total);",
        "quiz": [
          {
            "q": "Which statement best describes “Debugging, Errors and DevTools”?",
            "options": [
              "Debugging is the process of finding and fixing defects in code.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Debugging is the process of finding and fixing defects in code."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of debugging, errors and devtools.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Read the first useful error line, inspect the stack trace, log intermediate values, use breakpoints, and reproduce the issue with a small example."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "The identifier is misspelled, causing a ReferenceError.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "The identifier is misspelled, causing a ReferenceError. Correct version: const total = 10; console.log(total);"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-16",
        "title": "Modern JavaScript: Destructuring, Spread and Optional Chaining",
        "definition": "Modern syntax provides concise ways to unpack values, copy collections, and safely access nested properties.",
        "explain": "Destructuring extracts values; spread expands iterable/object properties; optional chaining `?.` stops access when a value is nullish.",
        "code": "const user = { name: \"Munna\", profile: { city: \"Patna\" } };\nconst { name } = user;\nconsole.log(name, user.profile?.city);",
        "output": "Munna Patna",
        "bad": "const user = {}; console.log(user.profile.city);",
        "whybad": "profile is undefined, so reading city causes a TypeError.",
        "fix": "const user = {}; console.log(user.profile?.city);",
        "task": "Copy an array and add one new item without mutating the original.",
        "hint": "Use spread syntax in a new array.",
        "solution": "const original = [1, 2]; const copy = [...original, 3]; console.log(copy);",
        "quiz": [
          {
            "q": "Which statement best describes “Modern JavaScript: Destructuring, Spread and Optional Chaining”?",
            "options": [
              "Modern syntax provides concise ways to unpack values, copy collections, and safely access nested properties.",
              "It is only used to change browser history.",
              "It is a Python-only feature.",
              "It is an operating-system command."
            ],
            "a": 0,
            "why": "Modern syntax provides concise ways to unpack values, copy collections, and safely access nested properties."
          },
          {
            "q": "In this lesson, what is the main purpose of the shown example?",
            "options": [
              "Demonstrate the core idea of modern javascript: destructuring, spread and optional chaining.",
              "Create a database server automatically.",
              "Install a package globally.",
              "Encrypt the entire computer."
            ],
            "a": 0,
            "why": "The example demonstrates the concept explained in this lesson: Destructuring extracts values; spread expands iterable/object properties; optional chaining `?.` stops access when a value is nullish."
          },
          {
            "q": "What is the main problem with the wrong code shown in this lesson?",
            "options": [
              "profile is undefined, so reading city causes a TypeError.",
              "It is always faster than correct code.",
              "It is valid in every browser and environment.",
              "It only changes indentation style."
            ],
            "a": 0,
            "why": "profile is undefined, so reading city causes a TypeError. Correct version: const user = {}; console.log(user.profile?.city);"
          },
          {
            "q": "What should you do before assuming a code example works?",
            "options": [
              "Run it and compare the observed result with the expected result.",
              "Assume every code snippet is correct.",
              "Delete all error messages without reading them.",
              "Change unrelated files first."
            ],
            "a": 0,
            "why": "Run the code in the intended environment, inspect errors, and compare the actual result with the expected result."
          },
          {
            "q": "Which approach is best for the practice task in this lesson?",
            "options": [
              "Follow the hint, write the code, run it, then compare with the solution.",
              "Copy code without understanding it.",
              "Ignore the expected output.",
              "Skip testing after editing."
            ],
            "a": 0,
            "why": "The practice workflow builds understanding: attempt, use a hint, run the code, and compare against the explained solution."
          }
        ]
      },
      {
        "id": "js-project-interactive-task-list",
        "title": "Mini Project: Interactive Task List",
        "definition": "DOM selection, events, arrays और text updates को जोड़कर छोटा interactive task list बनाना।",
        "explain": "यह project button click पर input से task लेता है, list item बनाता है और DOM में जोड़ता है। textContent का उपयोग user text को plain text की तरह दिखाने के लिए करें।",
        "code": "const input = document.querySelector(\"#task-input\");\nconst button = document.querySelector(\"#add-task\");\nconst list = document.querySelector(\"#task-list\");\n\nbutton.addEventListener(\"click\", () => {\n  const task = input.value.trim();\n  if (!task) return;\n  const item = document.createElement(\"li\");\n  item.textContent = task;\n  list.append(item);\n  input.value = \"\";\n});",
        "output": "When a non-empty task is entered and the button is clicked, a new list item appears and the input clears.",
        "bad": "button.addEventListener(\"click\", () => {\n  list.innerHTML += \"<li>\" + input.value + \"</li>\";\n});",
        "whybad": "This bypasses empty-input checks and inserts user-provided text as HTML instead of plain text.",
        "fix": "button.addEventListener(\"click\", () => {\n  const task = input.value.trim();\n  if (!task) return;\n  const item = document.createElement(\"li\");\n  item.textContent = task;\n  list.append(item);\n  input.value = \"\";\n});",
        "task": "Input, Add button और ul#task-list मानकर click handler लिखें जो खाली task ignore करे और नया li जोड़ दे।",
        "hint": "querySelector से elements लें, addEventListener(\"click\", ...) लगाएँ, trim() करें, createElement(\"li\") और textContent का उपयोग करें।",
        "solution": "const input = document.querySelector(\"#task-input\");\nconst button = document.querySelector(\"#add-task\");\nconst list = document.querySelector(\"#task-list\");\nbutton.addEventListener(\"click\", () => {\n  const task = input.value.trim();\n  if (!task) return;\n  const item = document.createElement(\"li\");\n  item.textContent = task;\n  list.append(item);\n  input.value = \"\";\n});",
        "quiz": [
          {
            "q": "Which method registers a click handler?",
            "options": [
              "addEventListener(\"click\", handler)",
              "querySelector(\"click\")",
              "createElement(\"click\")",
              "localStorage.click()"
            ],
            "a": 0,
            "why": "addEventListener attaches an event listener."
          },
          {
            "q": "Why call trim() on the input value?",
            "options": [
              "To remove leading and trailing whitespace",
              "To sort the task list",
              "To create an HTML element",
              "To save a file"
            ],
            "a": 0,
            "why": "trim removes whitespace at the beginning and end."
          },
          {
            "q": "Which method creates a new list item element?",
            "options": [
              "document.createElement(\"li\")",
              "document.addEventListener(\"li\")",
              "Array.create(\"li\")",
              "input.newElement()"
            ],
            "a": 0,
            "why": "createElement creates a DOM element."
          },
          {
            "q": "Why prefer textContent for user-entered task text?",
            "options": [
              "It inserts text rather than parsing it as HTML",
              "It automatically runs the task",
              "It stores data permanently",
              "It styles the list"
            ],
            "a": 0,
            "why": "textContent treats the value as text."
          },
          {
            "q": "What does input.value = \"\" do?",
            "options": [
              "Clears the input field",
              "Deletes every task",
              "Reloads the page",
              "Adds another button"
            ],
            "a": 0,
            "why": "Setting the value to an empty string clears the field."
          }
        ]
      }
    ]
  }
};

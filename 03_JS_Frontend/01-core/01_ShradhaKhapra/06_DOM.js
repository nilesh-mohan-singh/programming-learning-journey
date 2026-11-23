// DOM (Document Object Model) in JavaScript

// 3 muskteers of Web Development - HTML, CSS, JavaScript
// HTML - Structure of the web page
// CSS - Style of the web page
// JavaScript - Behavior of the web page

// Starter Code
// Benefits of writing CSS & JavaScript in separate files: readability, maintainability, performance, etc.
// All benefits of writing CSS & JavaScript in separate files are as follows:
// Readability, Maintainability, Performance, Reusability, modularity, 
// scalability, collaboration, debugging, caching, etc.

// Windows Object - The window object represents an open window in a browser.
// It is browser's object (not JavaScript's object) & is automatically created by the browser.
// It is a global object with lots of properties & methods.
// So, all code comes under window object like alert, console.log, prompt, prompt, etc.

// What is DOM? 
// When a web page is loaded, the browser creates a Document Object Model (DOM) of the page. 
// The DOM is a tree-like structure that represents the HTML document as a hierarchy of nodes.
// All the HTML which we write by attaching JS, we can access all those HTML elements through DOM in JS.
// Like <p> tag, <h1> tag, <div> tag, etc. are all HTML elements which we can access through DOM in JS.
// They get accessed because all HTML codes/elements get converted as Objects inside JS.
// And those special object we name Document and that Document is available inside Window object.
// So, there's a Window Object, Window object always there in every web page automatically,
// and inside that window object, a document named object also comes there as a part of sub-object,
// and inside this Document Object, all HTML tags/elements come there and we can access them too.

// DOM stands for Document Object Model.
// It is a programming interface for HTML and XML documents.
// It represents the page so that programs can change the document structure, style, and content.
// The DOM represents the document as a tree of nodes, where each node represents an element, attribute, or piece of text in the document.

// Console.log(window); // Output: Window { ... }
// Console.log(document); // Output: Document { ... }
// Console.dir(window); // Output: Window { ... }
// Console.dir(document); // Output: Document { ... }

// console.log() vs console.dir()
// console.log() - It is used to log the output in the console. It displays the element as it is in the HTML.
// console.dir() - It is used to display an interactive list of the properties of the specified JavaScript object.

// Document Object - The document object represents the HTML document that is displayed in the window.
// 3 main components of DOM: Document, Element, Event

// 1. Document - represents the entire HTML document
// 2. Element - represents an HTML element in the document
// 3. Event - represents an event that occurs in the document


// DOM vs BOM
// DOM (Document Object Model) - It is a programming interface for HTML and XML documents. 
// It represents the page so that programs can change the document structure, style, and content.

// BOM (Browser Object Model) - It is a programming interface for the browser. 
// It represents the browser window and provides methods to interact with it.


// DOM Manipulation
// It is the process of changing the structure, style, or content of a web page using JavaScript.

// Accessing DOM Elements
// 1. getElementById() - returns the element with the specified ID
// 2. getElementsByClassName() - returns a collection of elements with the specified class name
// 3. getElementsByTagName() - returns a collection of elements with the specified tag name
// 4. querySelector() - returns the first element that matches a specified CSS selector
// 5. querySelectorAll() - returns a collection of all elements that match a specified CSS selector

// Example:
let heading = document.getElementById("heading");
console.log(heading); // Output: <h1 id="heading">Hello World</h1>

let paragraphs = document.getElementsByClassName("paragraph");
console.log(paragraphs); // Output: HTMLCollection(2) [p.paragraph, p.paragraph]

let divs = document.getElementsByTagName("div");
console.log(divs); // Output: HTMLCollection(1) [div]

let firstParagraph = document.querySelector(".paragraph");
console.log(firstParagraph); // Output: <p class="paragraph">This is a paragraph.</p>

let allParagraphs = document.querySelectorAll(".paragraph");
console.log(allParagraphs); // Output: NodeList(2) [p.paragraph, p.paragraph]


// Modifying DOM Elements - Properties, Attributes, Styles, Insert & delete elements, Classes, etc.
// Properties - tagName, innerHTML, textContent, innerText, etc.
// Attributes - id, class, src, href, etc.
// Styles - color, backgroundColor, fontSize, etc.
// Insert & delete elements - appendChild(), removeChild(), etc.
// Classes - classList.add(), classList.remove(), classList.toggle(), etc.

// Example:
// Modifying Properties
heading.tagName = "h2"; // Changes the tag name to h2
heading.innerHTML = "Welcome to DOM Manipulation"; // Changes the inner HTML of the heading
heading.textContent = "Welcome to DOM Manipulation"; // Changes the text content of the heading
heading.innerText = "Welcome to DOM Manipulation"; // Changes the inner text of the heading

// Modifying Attributes
heading.id = "newHeading"; // Changes the id attribute of the heading
heading.className = "newClass"; // Changes the class attribute of the heading
heading.setAttribute("data-info", "This is a heading"); // Adds a new attribute to the heading
console.log(heading); // Output: <h2 id="newHeading" class="newClass" data-info="This is a heading">Welcome to DOM Manipulation</h2>

// Modifying Styles
heading.style.color = "red"; // Changes the color of the heading to red
heading.style.backgroundColor = "yellow"; // Changes the background color of the heading to yellow
heading.style.fontSize = "24px"; // Changes the font size of the heading to 24px
console.log(heading); // Output: <h2 id="newHeading" class="newClass" data-info="This is a heading" style="color: red; background-color: yellow; font-size: 24px;">Welcome to DOM Manipulation</h2>

// Insert & delete elements
let newParagraph = document.createElement("p"); // Creates a new paragraph element
newParagraph.textContent = "This is a new paragraph."; // Sets the text content of the new paragraph
document.body.appendChild(newParagraph); // Appends the new paragraph to the body of the document
document.body.removeChild(newParagraph); // Removes the new paragraph from the body of the document

// Modifying Classes
heading.classList.add("highlight"); // Adds a new class to the heading
heading.classList.remove("newClass"); // Removes the class from the heading
heading.classList.toggle("highlight"); // Toggles the class on the heading
console.log(heading); // Output: <h2 id="newHeading" class="highlight" data-info="This is a heading" style="color: red; background-color: yellow; font-size: 24px;">Welcome to DOM Manipulation</h2>


// HTML required for this whole code to work properly
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM Manipulation</title>
</head>
<body>
    <h1 id="heading">Hello World</h1>
    <p class="paragraph">This is a paragraph.</p>
    <p class="paragraph">This is another paragraph.</p>
    <div>This is a div element.</div>

    <script src="06_DOM.js"></script>
</body>
</html>
*/



// Homework - Explore DOM Manipulation
// 1. Create a new element and append it to the body of the document.
// 2. Change the text content of an existing element.
// 3. Change the style of an existing element.
// 4. Add a new class to an existing element.
// 5. Remove an existing class from an element.
// 6. Toggle a class on an existing element.
// 7. Remove an existing element from the document.


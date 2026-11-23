// Events in JavaScript
// The change in the state of an object is known as an Event.
// Events are fixed to notify code of "interesting changes" that may affect code execution.

// Types of Events:
// 1. Mouse Events - click, dblclick, mouseover, mouseout, mousemove, mousedown, mouseup
// 2. Keyboard Events - keydown, keyup, keypress
// 3. Form Events - submit, reset, change, focus, blur
// 4. Window Events - load, unload, resize, scroll
// 5. Touch Events - touchstart, touchmove, touchend, touchcancel
// 6. Drag and Drop Events - drag, dragstart, dragend, dragenter, dragover, dragleave, drop

// Event Handling in JavaScript
// 1. Inline Event Handling - using HTML attributes to handle events (not recommended)
// 2. Traditional Event Handling - using JavaScript to assign event handlers to elements
// 3. Modern Event Handling - using addEventListener() method to attach event handlers to elements

// Event Handling syntax in JavaScript:
// node.event = function() {
//     // code to be executed when the event occurs
// }

// Event Handling syntax breakdown in JavaScript
// node - It is the HTML element that you want to attach the event to.
// event - It is the type of event you want to listen for (e.g., click, keydown, etc.).
// function() { ... } - It is the event handler function that will be executed when the event occurs. You can write your code inside this function to specify what should happen when the event is triggered.

// Example of Event Handling:
let button = document.getElementById("myButton");
button.onclick = function() {
    alert("Button Clicked!");
};

// Same Example of Event Handling using arrow function
let Button = document.getElementById("anotherButton");
button.onclick = () => {
    alert("Button Clicked!");
};

// Example of Inline Event Handling
// <button onclick="alert('Button Clicked!')">Click Me</button>

// Example of Traditional Event Handling
let button = document.getElementById("myButton");
button.onclick = function() {
    alert("Button Clicked!");
};

// Same Example of Modern Event Handling using arrow function
let yetAnotherButton = document.getElementById("yetAnotherButton");
yetAnotherButton.addEventListener("click", () => {
    alert("Yet Another Button Clicked!");
});


// Benefits of Events:
// 1. Interactivity: Events allow developers to create interactive web pages by responding to user actions, such as clicks, keyboard input, and form submissions.
// 2. Dynamic Content: Events enable developers to dynamically change the content and structure of a web page in response to user interactions, allowing for a more engaging user experience.
// 3. Separation of Concerns: Events allow developers to separate the structure (HTML), presentation (CSS), and behavior (JavaScript) of a web page, making it easier to maintain and update code.
// 4. Cross-Browser Compatibility: Events are designed to be consistent across different web browsers, allowing developers to create interactive web applications that work across various platforms.
// Overall, events are a fundamental part of web development that enables dynamic and interactive web pages by allowing developers to respond to user actions and create engaging user experiences.


// Benefits of DOM and Events:
// 1. Interactivity: The DOM allows developers to create interactive web pages by responding to user actions through events.
// 2. Dynamic Content: The DOM enables developers to dynamically change the content and structure of a web page in response to events, allowing for a more engaging user experience.
// 3. Separation of Concerns: The DOM allows developers to separate the structure (HTML), presentation (CSS), and behavior (JavaScript) of a web page, making it easier to maintain and update code.
// 4. Cross-Browser Compatibility: The DOM is designed to be consistent across different web browsers, allowing developers to create interactive web applications that work across various platforms.
// Overall, the DOM is a fundamental part of web development that enables dynamic and interactive web pages by providing a structured way to access and manipulate the content and structure of a document.


// Event Object
// It is a special object that has details about the event.
// All event handlers ahve access to the Event Object's properties and methods.

// Which types of details does Event Object have?
// 1. Type of event (e.g., click, keydown, etc.)
// 2. Target element (the element that triggered the event)
// 3. Timestamp (the time when the event occurred)
// 4. Event phase (capturing, target, bubbling)
// 5. Mouse coordinates (for mouse events)
// 6. Key code (for keyboard events)
// 7. And many more properties and methods depending on the type of event.

// Event Object Syntax:
// node.event = function(event) {
//     // code to be executed when the event occurs
// }

// Example of Event Object:
let myButton = document.getElementById("myButton");
myButton.onclick = function(event) {
    console.log(event); // Output: MouseEvent { ... }
    console.log(event.type); // Output: "click"
    console.log(event.target); // Output: <button id="myButton">Click Me</button>
};

// Same Example of Event Object using arrow function
let anotherButton = document.getElementById("anotherButton");
anotherButton.onclick = (event) => {
    console.log(event); // Output: MouseEvent { ... }
    console.log(event.type); // Output: "click"
    console.log(event.target); // Output: <button id="anotherButton">Click Me Too</button>
};

// Benefits of Event Object:
// 1. Access to Event Details: The Event Object provides detailed information about the event that occurred, such as the type of event, the target element, and other relevant properties. This allows developers to make informed decisions based on the specific event that was triggered.
// 2. Event Control: The Event Object provides methods that allow developers to control the behavior of the event, such as preventing the default action or stopping the propagation of the event. This gives developers more control over how events are handled and allows for more complex interactions.
// 3. Cross-Browser Compatibility: The Event Object is designed to be consistent across different web browsers, allowing developers to create interactive web applications that work across various platforms without worrying about browser-specific event handling differences.
// Overall, the Event Object is a powerful tool in JavaScript that provides developers with access to detailed information about events and allows for greater control over event handling, making it an essential part of creating dynamic and interactive web applications.

// Event Propagation

// Event Listeners syntax:
// node.addEventListener(event, function, useCapture);

// node - It is the HTML element that you want to attach the event listener to.
// event - It is the type of event you want to listen for (e.g., click, keydown, etc.).
// function - It is the event handler function that will be executed when the event occurs. You can write your code inside this function to specify what should happen when the event is triggered.
// useCapture - It is an optional boolean parameter that specifies whether the event should be captured during the capturing phase (true) or during the bubbling phase (false). The default value is false (bubbling phase).

// Example of Event Propagation:
let parentDiv = document.getElementById("parentDiv");
let childDiv = document.getElementById("childDiv");

parentDiv.addEventListener("click", () => {
    console.log("Parent Div Clicked!");
}, false); // Bubbling phase

childDiv.addEventListener("click", () => {
    console.log("Child Div Clicked!");
}, false); // Bubbling phase

// If you click on the child div, both "Child Div Clicked!" and "Parent Div Clicked!" will be logged to the console due to event bubbling. If you want to stop the event from propagating to the parent div, you can use event.stopPropagation() inside the child div's event handler.
childDiv.addEventListener("click", (event) => {
    console.log("Child Div Clicked!");
    event.stopPropagation(); // This will stop the event from bubbling up to the parent div
}, false); // Bubbling phase

// Benefits of Event Propagation:
// 1. Flexibility: Event propagation allows developers to choose how events are handled in a nested structure of elements, giving them the flexibility to decide whether an event should be handled at the target element or propagated to its ancestors.
// 2. Code Organization: Event propagation can help in organizing code by allowing developers to attach event listeners to parent elements instead of individual child elements, reducing redundancy and improving maintainability.
// 3. Performance: In some cases, using event delegation (attaching a single event listener to a parent element) can improve performance by reducing the number of event listeners attached to individual child elements, especially when dealing with a large number of elements.
// Overall, event propagation is a fundamental concept in JavaScript that provides developers with control over how events are handled in a nested structure of elements, allowing for more flexible and efficient event handling in web applications.

// Html for this whole events code to practice:
// <!--
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Events in JavaScript</title>
// </head>
// <body>
//     <button id="myButton">Click Me</button>
//     <button id="anotherButton">Click Me Too</button>
//     <div id="parentDiv">
//         Parent Div
//         <div id="childDiv">Child Div</div>
//     </div>

//     <script src="07_events.js"></script>
// </body>
// </html>
// -->



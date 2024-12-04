const questions = [
    {
        "questionId": "QS1",
        "quizId": "A101",
        "text": "An HTML label element can be associated with an HTML input element by setting their id attributes to the same value. The resulting effect is that when you click on the label text, the input element receives focus as if you had clicked on the input element itself.",
        "type": "True or False",
        "options": ["True", "False"],
        "correctAnswer": "True",
        "points": 1
    },
    {
        "questionId": "QS2",
        "quizId": "A101",
        "text": "What is the purpose of the 'alt' attribute in an image tag?",
        "type": "Multiple Choice",
        "options": [
            "To specify the image source",
            "To specify alternate text for an image",
            "To specify the width of an image"
        ],
        "correctAnswer": "To specify alternate text for an image",
        "points": 2
    },
    {
        "questionId": "QS3",
        "quizId": "A101",
        "text": "Fill in the blank: HTML is used to create _______.",
        "type": "Fill in the Blank",
        "correctAnswer": "web pages",
        "points": 2
    },
    {
        "questionId": "QS4",
        "quizId": "A101",
        "text": "Which HTML tag is used to define an unordered list?",
        "type": "Multiple Choice",
        "options": ["<ul>", "<ol>", "<li>", "<list>"],
        "correctAnswer": "<ul>",
        "points": 2
    },
    {
        "questionId": "QS5",
        "quizId": "A101",
        "text": "What does HTML stand for?",
        "type": "Multiple Choice",
        "options": [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        "correctAnswer": "Hyper Text Markup Language",
        "points": 2
    },

    // Questions for A102
    {
        "questionId": "QS6",
        "quizId": "A102",
        "text": "Which CSS property is used to change the background color?",
        "type": "Multiple Choice",
        "options": ["color", "background-color", "bg-color"],
        "correctAnswer": "background-color",
        "points": 3
    },
    {
        "questionId": "QS7",
        "quizId": "A102",
        "text": "How do you add a comment in CSS?",
        "type": "Multiple Choice",
        "options": [
            "// This is a comment",
            "/* This is a comment */",
            "<!-- This is a comment -->"
        ],
        "correctAnswer": "/* This is a comment */",
        "points": 2
    },
    {
        "questionId": "QS8",
        "quizId": "A102",
        "text": "Which CSS property controls the text size?",
        "type": "Multiple Choice",
        "options": ["font-style", "text-size", "font-size", "text-style"],
        "correctAnswer": "font-size",
        "points": 4
    },
    {
        "questionId": "QS9",
        "quizId": "A102",
        "text": "Which CSS selector is used to select an element with id 'header'?",
        "type": "Multiple Choice",
        "options": ["#header", ".header", "header", "*header"],
        "correctAnswer": "#header",
        "points": 2
    },
    {
        "questionId": "QS10",
        "quizId": "A102",
        "text": "In CSS, what does the 'float' property do?",
        "type": "Multiple Choice",
        "options": [
            "Positions an element to the left or right of its container",
            "Changes the opacity of an element",
            "Sets the z-index of an element"
        ],
        "correctAnswer": "Positions an element to the left or right of its container",
        "points": 3
    },

    // Questions for A103
    {
        "questionId": "QS11",
        "quizId": "A103",
        "text": "What keyword is used to declare a variable in JavaScript?",
        "type": "Multiple Choice",
        "options": ["var", "let", "const", "All of the above"],
        "correctAnswer": "All of the above",
        "points": 3
    },
    {
        "questionId": "QS12",
        "quizId": "A103",
        "text": "What is the output of: console.log(typeof null)?",
        "type": "Multiple Choice",
        "options": ["null", "object", "undefined", "number"],
        "correctAnswer": "object",
        "points": 2
    },
    {
        "questionId": "QS13",
        "quizId": "A103",
        "text": "Which method is used to add an element to the end of an array in JavaScript?",
        "type": "Multiple Choice",
        "options": ["push()", "pop()", "shift()", "unshift()"],
        "correctAnswer": "push()",
        "points": 2
    },
    {
        "questionId": "QS14",
        "quizId": "A103",
        "text": "Which symbol is used for comments in JavaScript?",
        "type": "Multiple Choice",
        "options": ["//", "/* */", "<!-- -->", "Both // and /* */"],
        "correctAnswer": "Both // and /* */",
        "points": 2
    },
    {
        "questionId": "QS15",
        "quizId": "A103",
        "text": "Which of the following is not a JavaScript data type?",
        "type": "Multiple Choice",
        "options": ["Number", "String", "Boolean", "Character"],
        "correctAnswer": "Character",
        "points": 2
    },

    // Questions for A201
    {
        "questionId": "QS16",
        "quizId": "A201",
        "text": "What is the definition of aerodynamic drag?",
        "type": "Multiple Choice",
        "options": [
            "The lift force acting opposite to the direction of flight",
            "The friction of air molecules against the surface of a moving object",
            "The force that propels an aircraft forward"
        ],
        "correctAnswer": "The friction of air molecules against the surface of a moving object",
        "points": 3
    },
    {
        "questionId": "QS17",
        "quizId": "A201",
        "text": "True or False: Increasing the speed of an aircraft will always decrease the aerodynamic drag.",
        "type": "True or False",
        "options": ["True", "False"],
        "correctAnswer": "False",
        "points": 2
    },
    {
        "questionId": "QS18",
        "quizId": "A201",
        "text": "Fill in the blank: The _______ is the point where the airflow separates from the surface of an object.",
        "type": "Fill in the Blank",
        "correctAnswer": "separation point",
        "points": 2
    },
    // Add more questions for A201 as needed

    // Questions for A202
    {
        "questionId": "QS19",
        "quizId": "A202",
        "text": "What does CFD stand for in flow analysis?",
        "type": "Multiple Choice",
        "options": [
            "Computational Fluid Dynamics",
            "Critical Flow Design",
            "Cyclic Flow Diagram"
        ],
        "correctAnswer": "Computational Fluid Dynamics",
        "points": 3
    },
    {
        "questionId": "QS20",
        "quizId": "A202",
        "text": "True or False: Laminar flow is characterized by smooth and constant fluid motion.",
        "type": "True or False",
        "options": ["True", "False"],
        "correctAnswer": "True",
        "points": 2
    },
    // Add more questions for A202 as needed

    // Questions for A203
    {
        "questionId": "QS21",
        "quizId": "A203",
        "text": "Which law is fundamental in heat transfer analysis?",
        "type": "Multiple Choice",
        "options": [
            "Newton's First Law",
            "Fourier's Law",
            "Ohm's Law",
            "Kepler's Law"
        ],
        "correctAnswer": "Fourier's Law",
        "points": 3
    },
    {
        "questionId": "QS22",
        "quizId": "A203",
        "text": "Fill in the blank: Heat always flows from _______ temperature to _______ temperature.",
        "type": "Fill in the Blank",
        "correctAnswer": "higher, lower",
        "points": 2
    },
    // Add more questions for A203 as needed

    // Questions for A301
    {
        "questionId": "QS23",
        "quizId": "A301",
        "text": "What is the main objective of structural design in engineering?",
        "type": "Multiple Choice",
        "options": [
            "To minimize costs regardless of safety",
            "To ensure structures can withstand loads and forces safely",
            "To create aesthetically pleasing designs"
        ],
        "correctAnswer": "To ensure structures can withstand loads and forces safely",
        "points": 3
    },
    // Add more questions for A301 as needed

    // Questions for A302
    {
        "questionId": "QS24",
        "quizId": "A302",
        "text": "Which of the following is Kepler's First Law?",
        "type": "Multiple Choice",
        "options": [
            "Planets move in elliptical orbits with the Sun at one focus",
            "The square of the orbital period is proportional to the cube of the semi-major axis",
            "An object in motion stays in motion unless acted upon by an external force"
        ],
        "correctAnswer": "Planets move in elliptical orbits with the Sun at one focus",
        "points": 3
    },
    // Add more questions for A302 as needed

    // Questions for A303
    {
        "questionId": "QS25",
        "quizId": "A303",
        "text": "Systems engineering is an interdisciplinary field focusing on how to design and manage complex systems over their life cycles.",
        "type": "True or False",
        "options": ["True", "False"],
        "correctAnswer": "True",
        "points": 2
    },
    // Add more questions for A303 as needed
];

export default questions;

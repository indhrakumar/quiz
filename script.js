const start = document.getElementById("start");
const page = document.getElementById("startpage");
const container = document.getElementById("container");
const q = document.getElementById("q");
const counter = document.getElementById("q-counter");
const end = document.getElementById("end");
const score = document.getElementById("score");
const finalscr = document.getElementById("finalscore");
const questionNo = document.getElementById("numb");

start.addEventListener("click", () => {
  page.classList.add("hidden");
  container.classList.remove("hidden");
});
// just For creating page
// const questions = [
//   {
//     question: "HTML stands for?",
//     a: "Indhra Kumar",
//     b: "Vijay",
//     c: "Dhanush",
//     d: "Ajith",
//     crt: "a",
//   },
//   {
//     question: "Which college i Studied",
//     a: "Amma University",
//     b: "Appa University",
//     c: "Akka University",
//     d: "Anna University",
//     crt: "d",
//   },
//   {
//     question: "Where is Tamil Nadu",
//     a: "Australia",
//     b: "India",
//     c: "China",
//     d: "Mars",
//     crt: "b",
//   },
// ];
const questions = [
  {
    question: "HTML stands for?",
    a: "Hyper Text Markup Language",
    b: "High Text Machine Language",
    c: "Hyper Transfer Markup Language",
    d: "Home Tool Markup Language",
    crt: "a",
  },
  {
    question: "Which tag creates a hyperlink?",
    a: "<img>",
    b: "<a>",
    c: "<link>",
    d: "<href>",
    crt: "b",
  },
  {
    question: "CSS is mainly used for?",
    a: "Database",
    b: "Styling",
    c: "Backend",
    d: "Security",
    crt: "b",
  },
  {
    question: "Which CSS property changes text color?",
    a: "font-color",
    b: "color",
    c: "text-color",
    d: "fg-color",
    crt: "b",
  },
  {
    question: "JavaScript is a?",
    a: "Database",
    b: "Programming Language",
    c: "Operating System",
    d: "Browser",
    crt: "b",
  },
  {
    question: "Which keyword declares a variable in JavaScript?",
    a: "create",
    b: "define",
    c: "let",
    d: "make",
    crt: "c",
  },
  {
    question: "What does DOM stand for?",
    a: "Data Object Model",
    b: "Document Object Model",
    c: "Dynamic Object Method",
    d: "Document Order Method",
    crt: "b",
  },
  {
    question: "Which method selects an element by ID?",
    a: "getElementById()",
    b: "queryId()",
    c: "selectId()",
    d: "getById()",
    crt: "a",
  },
  {
    question: "Which company developed Java?",
    a: "Microsoft",
    b: "Apple",
    c: "Sun Microsystems",
    d: "IBM",
    crt: "c",
  },
  {
    question: "Java is?",
    a: "Interpreted only",
    b: "Compiled and JVM based",
    c: "Database",
    d: "Markup Language",
    crt: "b",
  },
  {
    question: "Which collection does not allow duplicates in Java?",
    a: "ArrayList",
    b: "LinkedList",
    c: "HashSet",
    d: "Vector",
    crt: "c",
  },
  {
    question: "MongoDB is a?",
    a: "SQL Database",
    b: "NoSQL Database",
    c: "Browser",
    d: "Framework",
    crt: "b",
  },
  {
    question: "Which command initializes Git?",
    a: "git start",
    b: "git init",
    c: "git begin",
    d: "git create",
    crt: "b",
  },
  {
    question: "Which command uploads local commits?",
    a: "git upload",
    b: "git send",
    c: "git push",
    d: "git deploy",
    crt: "c",
  },
  {
    question: "GitHub is mainly used for?",
    a: "Video Editing",
    b: "Version Control",
    c: "Gaming",
    d: "Designing",
    crt: "b",
  },
  {
    question: "What does API stand for?",
    a: "Application Programming Interface",
    b: "Application Process Integration",
    c: "Automatic Program Interface",
    d: "Advanced Program Integration",
    crt: "a",
  },
  {
    question: "Which HTTP method retrieves data?",
    a: "POST",
    b: "PUT",
    c: "GET",
    d: "DELETE",
    crt: "c",
  },
  {
    question: "Which HTTP status means Success?",
    a: "200",
    b: "404",
    c: "500",
    d: "301",
    crt: "a",
  },
  {
    question: "Tailwind CSS is a?",
    a: "Database",
    b: "CSS Framework",
    c: "JS Library",
    d: "Browser",
    crt: "b",
  },
  {
    question: "React is mainly used for?",
    a: "UI Development",
    b: "Database",
    c: "Networking",
    d: "Security",
    crt: "a",
  },
  {
    question: "Capital of India?",
    a: "Mumbai",
    b: "Chennai",
    c: "New Delhi",
    d: "Kolkata",
    crt: "c",
  },
  {
    question: "Largest planet in the Solar System?",
    a: "Earth",
    b: "Jupiter",
    c: "Saturn",
    d: "Mars",
    crt: "b",
  },
  {
    question: "National Animal of India?",
    a: "Lion",
    b: "Elephant",
    c: "Tiger",
    d: "Peacock",
    crt: "c",
  },
  {
    question: "Which ocean is the largest?",
    a: "Atlantic",
    b: "Indian",
    c: "Arctic",
    d: "Pacific",
    crt: "d",
  },
  {
    question: "How many continents are there?",
    a: "5",
    b: "6",
    c: "7",
    d: "8",
    crt: "c",
  },
  {
    question: "Who invented the telephone?",
    a: "Newton",
    b: "Edison",
    c: "Alexander Graham Bell",
    d: "Tesla",
    crt: "c",
  },
  {
    question: "Which is the fastest land animal?",
    a: "Tiger",
    b: "Lion",
    c: "Cheetah",
    d: "Leopard",
    crt: "c",
  },
  {
    question: "Which planet is called the Red Planet?",
    a: "Venus",
    b: "Mars",
    c: "Mercury",
    d: "Jupiter",
    crt: "b",
  },
  {
    question: "Binary numbers use?",
    a: "0-9",
    b: "1-8",
    c: "0 and 1",
    d: "A and B",
    crt: "c",
  },
  {
    question: "CPU stands for?",
    a: "Central Processing Unit",
    b: "Computer Processing Unit",
    c: "Central Program Unit",
    d: "Computer Program Unit",
    crt: "a",
  },
];
const options = document.querySelectorAll("[data-option]");
let currentQ = 0;
let scores = 0;

function loadq() {
  let qno = currentQ + 1;
  questionNo.textContent = `Q.${qno})`;
  q.textContent = questions[currentQ].question;

  options[0].textContent = questions[currentQ].a;
  options[1].textContent = questions[currentQ].b;
  options[2].textContent = questions[currentQ].c;
  options[3].textContent = questions[currentQ].d;
  counter.innerHTML = `${qno} / ${questions.length}`;
}
options.forEach((button) => {
  button.addEventListener("click", (e) => {
    let clicked = e.target.dataset.option;
    if (clicked == questions[currentQ].crt) {
      e.target.style.background = "green";
      scores += 10;
      score.innerHTML = `⭐Score: ${scores}`;
      setTimeout(() => {
        e.target.style.background = "";
      }, 500);
    } else {
      e.target.style.background = "red";
      setTimeout(() => {
        e.target.style.background = "";
      }, 500);
    }
    currentQ++;
    setTimeout(() => {
      if (currentQ > questions.length - 1) {
        page.classList.remove("hidden");
        start.classList.add("hidden");
        end.classList.remove("hidden");
        container.classList.add("hidden");
        finalscr.innerHTML = `<h2 class="text-4xl font-bold text-yellow-400">Your Score : ${scores} / ${questions.length * 10}</h2>`;
      } else {
        loadq();
      }
    }, 600);
  });
});
loadq();

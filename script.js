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
const questions = [
  {
    question: "What is my name?",
    a: "Indhra Kumar",
    b: "Vijay",
    c: "Dhanush",
    d: "Ajith",
    crt: "a",
  },
  {
    question: "Which college i Studied",
    a: "Amma University",
    b: "Appa University",
    c: "Akka University",
    d: "Anna University",
    crt: "d",
  },
  {
    question: "Where is Tamil Nadu",
    a: "Australia",
    b: "India",
    c: "China",
    d: "Mars",
    crt: "b",
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

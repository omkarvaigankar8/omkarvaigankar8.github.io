const correctAnswers = ["A", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];

  //checking
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  const paras = document.querySelector("span");
  const see = document.querySelector(".d-none");
  scrollTo(0, 0);
  see.classList.remove("d-none");

  let output = 0;
  const timer = setInterval(() => {
    paras.innerText = output + "%";
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  });
  //console.log(para.innerText);
});
//content.classList.remove("error");

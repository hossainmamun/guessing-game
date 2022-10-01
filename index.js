// dom selection
const inputNumber = document.querySelector("#input-number");
const resultBtn = document.querySelector("#result-btn");
const resetBtn = document.querySelector("#reset-btn");
const reminder = document.querySelector("#reminder");
const win = document.querySelector("#win");
const lost = document.querySelector("#lost");
const remainAttempt = document.querySelector("#remain-attempt");
const totalWin = document.querySelector("#total-win");
const totalLost = document.querySelector("#total-lost");
const finalResult = document.querySelector("#final-result");

let winingArr = [];
let lostArr = [];

// result btn
resultBtn.onclick = () => {
  // check empty field or limit value
  if (inputNumber.value < 1 || inputNumber.value > 5) {
    return (
      alert("input between 1-5"),
      (document.querySelector("#input-number").value = null)
    );
  }

  // generate random number
  const randomNum = Math.floor(Math.random() * 5) + 1;

  // check random number to show win or lost result
  if (randomNum === Number(inputNumber.value)) {
    win.style.display = "block";
    lost.style.display = "none";
    win.innerHTML = "yahoo matched";
    winingArr.push(randomNum);
    totalWin.innerHTML = `Total Win: ${winingArr.length}`;
  } else {
    lost.style.display = "block";
    win.style.display = "none";
    lost.innerHTML = `wrong input random number was: ${randomNum}`;
    lostArr.push(randomNum);
    totalLost.innerHTML = `Total Lost: ${lostArr.length}`;
  }

  // check totalAttempts length to reset form
  const totalAttempts = [...winingArr, ...lostArr];
  if (totalAttempts.length >= 5) {
    reminder.innerHTML = "remaining attempts finished click reset";
    resetBtn.style.display = "block";
    resultBtn.style.display = "none";
  }

  // remain attempts result
  remainAttempt.innerHTML = `remaining attempts: ${5 - totalAttempts.length}`;

  // show final result
  if (winingArr.length >= 3 && totalAttempts.length === 5) {
    finalResult.innerHTML = "congratulation! you won the game";
    finalResult.style.color = "#29bf12";
  }
  if (winingArr.length < 3 && totalAttempts.length === 5) {
    finalResult.innerHTML = "sorry! you lost the game";
    finalResult.style.color = "#e63946";
  }

  document.querySelector("#input-number").value = null;
};

// reset btn
resetBtn.onclick = () => {
  window.location.reload();
};

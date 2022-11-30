const btnCustom = document.querySelector(".form__tip--button-custom");
const btnReset = document.querySelector(".reset-btn");
const inputCustom = document.querySelector(".form__input--custom");
const tipOutput = document.querySelector(".output__value-tip");
const tipCustom = document.querySelector(".form__input--custom");
const totalOutput = document.querySelector(".output__value-total");
const billInput = document.querySelector(".form__input--bill");
const personInput = document.querySelector(".form__input--person");
const form = document.querySelector(".form");
const tip = document.querySelector(".tip");
let tipValue;

btnCustom.addEventListener("click", (e) => {
  inputCustom.classList.toggle("hidden");
});
btnReset.addEventListener("click", (e) => {
  (tipOutput.textContent = "$0.0"), (totalOutput.textContent = "$0.0");
  (billInput.value = ""),
    (personInput.value = ""),
    (tipCustom.value = ""),
    (tip.textContent = "");
});

const showResult = () => {
  const currentTip = tip.textContent ? parseInt(tip.textContent) : 0;
  const currentBill = parseInt(billInput.value);
  const totalPerson = parseInt(personInput.value);
  let tipPerPerson, totalPerPerson, totalTip, totalBill;

  if (!totalPerson || !currentBill) return;
  totalTip = (currentTip / 100) * currentBill;
  totalBill = currentBill + totalTip;
  tipPerPerson = (totalTip / totalPerson).toFixed(2);
  totalPerPerson = (totalBill / totalPerson).toFixed(2);
  totalPerPerson =
    totalPerPerson * totalPerson === totalBill
      ? totalPerPerson
      : Math.trunc(totalPerPerson) + 1;
  tipOutput.textContent = "$" + tipPerPerson;
  totalOutput.textContent = "$" + totalPerPerson;
};

form.addEventListener("click", (e) => {
  const target = e.target.closest(".form__tip--button");
  if (!target) return;
  tip.textContent = target.value;
  showResult();
});
inputCustom.addEventListener("keyup", (e) => {
  tip.textContent = e.target.value;
  showResult();
});
personInput.addEventListener("keyup", (e) => {
  showResult();
});
billInput.addEventListener("keyup", (e) => {
  showResult();
});

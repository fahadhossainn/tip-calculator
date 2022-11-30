const btnCustom = document.querySelector(".form__tip--button-custom");
const btnReset = document.querySelector(".reset-btn");
const inputCustom = document.querySelector(".form__input--custom");
const tipOutput = document.querySelector(".output__value-tip");
const tipCustom = document.querySelector(".form__input--custom");
const totalOutput = document.querySelector(".output__value-total");
const billInput = document.querySelector(".form__input--bill");
const personInput = document.querySelector(".form__input--person");
const form = document.querySelector(".form");
let tipValue;

btnCustom.addEventListener("click", (e) => {
  inputCustom.classList.toggle("hidden");
});
btnReset.addEventListener("click", (e) => {
  (tipOutput.textContent = "$0.0"), (totalOutput.textContent = "$0.0");
  (billInput.value = ""), (personInput.value = ""), (tipCustom.value = "");
});

form.addEventListener("click", (e) => {
  const tip = e.target.closest(".form__tip--button");
  if (!tip) return;
  tipValue = tip.value;
});

personInput.addEventListener("keyup", (e) => {
  const customTip = document.querySelector(".form__input--custom").value;
  const currentTip = parseFloat(customTip ? customTip : tipValue)
    ? parseFloat(customTip ? customTip : tipValue)
    : 0;
  const currentBill = parseInt(billInput.value);
  const totalPerson = parseInt(e.target.value);
  let tipPerPerson, totalPerPerson, totalTip, totalBill;

  if (!currentBill || !totalPerson) return;
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

  personInput.value = "";
});

const button = document.getElementById("calcTotal");
const ansBox = document.getElementById("ans");
const priceElements = document.querySelectorAll(".price");

const getSum = () => {
  let total = 0;
  priceElements.forEach(el => {
    el.textContent = el.textContent.replace(/[^0-9.]/g, "");
    const value = parseFloat(el.textContent.trim());
    el.setAttribute("data-valid", !isNaN(value) && value >= 0);
    if (!isNaN(value) && value >= 0) total += value;
  });
  ansBox.textContent = total.toFixed(0);
};

button.addEventListener("click", getSum);
priceElements.forEach(el => {
  el.addEventListener("input", getSum);
});
const button = document.getElementById("calcTotal");
const ansBox = document.getElementById("ans");

const getSum = () => {
  const priceElements = document.querySelectorAll(".price");
  let total = 0;

  priceElements.forEach(el => {
    const value = parseFloat(el.textContent.trim());
    if (!isNaN(value)) total += value;
  });

  ansBox.textContent = total;
};

button.addEventListener("click", getSum);

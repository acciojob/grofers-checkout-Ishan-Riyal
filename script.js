const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Remove existing total row if already present
  const existingTotal = document.querySelector(".total-row");
  if (existingTotal) {
    existingTotal.remove();
  }

  // Select all price elements
  const priceElements = document.querySelectorAll(".prices");

  let total = 0;

  // Sum up the prices
  priceElements.forEach(price => {
    total += parseFloat(price.textContent) || 0;
  });

  // Create total row and cell
  const totalRow = document.createElement("tr");
  totalRow.classList.add("total-row");

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2;
  totalCell.textContent = `Total Price: ₹${total}`;

  // Style it (optional)
  totalCell.style.fontWeight = "bold";
  totalCell.style.backgroundColor = "#e8f5e9";
  totalCell.style.color = "#2e7d32";

  // Append to table
  totalRow.appendChild(totalCell);
  document.getElementById("groceryTable").appendChild(totalRow);
};

// Attach the event listener
getSumBtn.addEventListener("click", getSum);

let depositAmount = 0;
let withdrawAmount = 0;
let balanceAmount = 0;

// Function to get an element by ID
const getId = id => {
  return document.getElementById(id);
};

// Function to update the display
const Display = (displayId, amount) => {
  const id_display = getId(displayId);
  id_display.innerText = amount; // Update the innerText with the amount passed
};

// Handle Deposit
function HandleDeposit() {
  const inputedValue = getId("input"); // Get the input element
  const value = inputedValue ? parseFloat(inputedValue.value) : 0; // Parse the value as a float

  // Check if the value is a valid number and greater than 0
  if (isNaN(value) || value <= 0) {
    alert("Please enter a valid positive amount for deposit!");
    return;
  }

  depositAmount += value; // Update deposit amount
  balanceAmount += value; // Update the initial balance

  // Display the updated amounts
  Display("displayDiposit", depositAmount);
  Display("displayAmount", balanceAmount);
  inputedValue.value = ""; // Clear input field

  console.log("Deposited: ", value); // Log the deposited value
}

// Handle Withdraw
function HandleWithdraw() {
  const inputedValue = getId("input"); // Get the input element
  const value = inputedValue ? parseFloat(inputedValue.value) : 0;

  // Check if the value is a valid number and greater than 0
  if (isNaN(value) || value <= 0) {
    alert("Please enter a valid positive amount for withdrawal!");
    return;
  }

  if (balanceAmount <= 0) {
    alert("Insufficient funds!");
    return;
  }

  // Check if the withdrawal amount is less than or equal to the balance
  if (value > balanceAmount) {
    alert("Insufficient funds for the withdrawal!");
     
    return;
  }

  withdrawAmount += value; // Update withdraw amount
  balanceAmount -= value; // Update the balance

  // Display the updated amounts
  Display("displayWithdraw", withdrawAmount);
  Display("displayAmount", balanceAmount);
  inputedValue.value = ""; // Clear input field

  console.log("Withdrawn: ", value); // Log the withdrawn value
}

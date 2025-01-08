let depositAmount = 0;
let withdrawAmount = 0;
let balanceAmount = 0;


const getId = id => {
  return document.getElementById(id);
};


const Display = (displayId, amount) => {
  const id_display = getId(displayId);
  id_display.innerText = amount; 
};


function loadDataFromLocalStorage() {
  const storedDepositAmount = localStorage.getItem("depositAmount");
  const storedWithdrawAmount = localStorage.getItem("withdrawAmount");
  const storedBalanceAmount = localStorage.getItem("balanceAmount");

  if (storedDepositAmount && storedWithdrawAmount && storedBalanceAmount) {
    depositAmount = parseFloat(storedDepositAmount);
    withdrawAmount = parseFloat(storedWithdrawAmount);
    balanceAmount = parseFloat(storedBalanceAmount);

    
    Display("displayDiposit", depositAmount);
    Display("displayWithdraw", withdrawAmount);
    Display("displayAmount", balanceAmount);
  }
}


function HandleDeposit() {
  const inputedValue = getId("input"); 
  const value = inputedValue ? parseFloat(inputedValue.value) : 0;

  
  if (isNaN(value) || value <= 0) {
    alert("Amount of Deposited Money Can not be Negative or Zero!");
    return;
  }
  depositAmount += value; 
  balanceAmount += value; 

 
  Display("displayDiposit", depositAmount);
  Display("displayAmount", balanceAmount);
  inputedValue.value = ""; 

 
  localStorage.setItem("depositAmount", depositAmount);
  localStorage.setItem("balanceAmount", balanceAmount);


}


function HandleWithdraw() {
  const inputedValue = getId("input"); 
  const value = inputedValue ? parseFloat(inputedValue.value) : 0;

 
  if (isNaN(value) || value <= 0) {
    alert("Amount of Withdrawn Money Can not be Negative or Zero!");
    return;
  }

  if (balanceAmount <= 0) {
    alert("Please Deposit Money First to Your Wallet");
    return;
  }


 
  if (value > balanceAmount) {
    alert("You don't have enough money in your Wallet to Withdraw.");
    return;
  }

  withdrawAmount += value; 
  balanceAmount -= value; 


  Display("displayWithdraw", withdrawAmount);
  Display("displayAmount", balanceAmount);
  inputedValue.value = ""; 


  localStorage.setItem("withdrawAmount", withdrawAmount);
  localStorage.setItem("balanceAmount", balanceAmount);
  alert("You have successfully withdrawn " + value + " from your Wallet.");


}

loadDataFromLocalStorage();

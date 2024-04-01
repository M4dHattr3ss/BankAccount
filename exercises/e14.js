
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
let wrongBalance = [];
  for(let i = 0; i < array.length; i++){
    let depositsSum = 0;
    let withdrawalsSum = 0;
    let balance = array[i].balance;

    if(array[i].deposits){
      for(let j = 0; j < array[i].deposits.length; j++){
      depositsSum+= array[i].deposits[j];
      }
    }
    if(array[i].withdrawals){
      for(let k = 0; k < array[i].withdrawals.length; k++){
      withdrawalsSum+= array[i].withdrawals[k];
      }
    }


    if(balance !== depositsSum - withdrawalsSum){
      wrongBalance.push(array[i]);
    }
 }
 return wrongBalance;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

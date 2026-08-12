//A closure in JavaScript is a function that remembers and can access variables from its outer function, even after the outer
//  function has finished executing.


function outer() {
    let name = "spiderman";

    function inner() {
        console.log(name);
    }

    return inner;
}

let result = outer();

result(); 


// closure
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const fn = outer();

fn(); // 1
fn(); // 2
fn(); // 3


2 example

function bankAccount() {
  let balance = 1000;

  return function(amount) {
    balance += amount;
    console.log("Balance:", balance);
  };
}

const account = bankAccount();

account(500);  // Balance: 1500
account(-200); // Balance: 1300
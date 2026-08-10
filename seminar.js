//A closure in JavaScript is a function that remembers and can access variables from its outer function, even after the outer
//  function has finished executing.


function outer() {
    let name = "jobin";

    function inner() {
        console.log(name);
    }

    return inner;
}

let result = outer();

result(); 
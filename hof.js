//HOF

function greet(name){
    console.log(name);
    
}
function user(Callback){
    Callback("anu")
}
user(greet)
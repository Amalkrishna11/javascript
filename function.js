function greet(
    {
        console.log("hello");
        
    }
)
greet()


//with parameter
function greet(name){
    console.log(`hello ${name}`);
    
}
greet("anu")

//multiple parameter

function sum(a, b)
{
    console.log(a+b);
    
}
sum(10,30)


//default parameter
function sum(a=10,b){
    console.log(a+b);
    
}
sum(38,10)
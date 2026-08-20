//1.method

// function x(event){
// console.log("x called");
// event()
// }
// x(function(){
//     console.log("y called");
    
// })




//2.method

// function mrng(print){
//     print()
// }
// function greet(){
//     console.log("good mrng");
    
// }
//     mrng(greet)



//call back hell



function step1(callback){
    setTimeout(()=>{
        console.log("step 1 called");
        callback()
        
    })
}
function step2(callback){
    setTimeout(()=>{
        console.log("step 2 called");
        callback()
        
    })
}
function step3(callback){
    setTimeout(()=>{
        console.log("step 3 called");
        callback()
        
    })
}
step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("all the step are complted");
            
        })
    })
})



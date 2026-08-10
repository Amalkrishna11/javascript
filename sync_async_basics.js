// console.log("step1");
// setTimeout(()=>{
//     console.log("step2");
    
// },2000)
// console.log("step3");




//settimeout()
//syntax
//settimeout(functon.delay)

// setInterval(()=>{
//     console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
    
// },1000)

let count =1
let timer= setInterval(()=>{
    console.log(count);
    if(count==5){
        clearInterval(timer)
        console.log("timer stop");
        
    }
    count++
    
},1000)


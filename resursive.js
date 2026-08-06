function count(num){
    if(num==5){
        return;
    }
    console.log(num,"hello");
    count(num+1)
   
    
    
}
count(1)
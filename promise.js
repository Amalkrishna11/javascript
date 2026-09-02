// let myPromise = new Promise((resolve, rejected) => {
//     let success = true
//     setTimeout(() => {
//         if (success) {
//             resolve("success")
//         } else {
//             rejected("rejected")
//         }
//     }, 1000)
// })

// myPromise.then(result => console.log(result))
// .catch(err => console.log(err))


//promise chaning
//is the process of connectin multiple dot then() methods together where of   ones dot then() is passed to to next dot then()


Promise.resolve(10)
  .then(num => {
    return num * 2;
  })
  .then(num => {
    return num + 3;
  })
  .then(result => {
    console.log(result);
  });


//  dot then-sucees
// dot catch eror
// dot finally
// promise dot resolve
// promise dot error
// promise dot reject
// promise dot all  - multiple promise together
// promise dot raise
// promise dor any
// first setelted promise
// first full filled promise 
// promise dot all setelted



// API-Application programing interface
//is a way for too soft ware application to comunicate each other



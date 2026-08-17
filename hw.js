// //1.Print all prime numbers from 1 to 100
// for (let num = 2; num <= 100; num++) {
//     let prime = true;
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             prime = false;
//             break;
//         }
//     }
//     if (prime) {
//         console.log(num);
//     }
// }


// //6. Find the largest element in an array
// // let arr = [15, 42, 7, 89, 23];
// // let largest = arr[0];
// // for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] > largest) {
// //         largest = arr[i];
// //     }
// // }
// // console.log("Largest =", largest);

// //7. Find the smallest element in an array
// // let arr = [15, 42, 7, 89, 23];
// // let smallest = arr[0];
// // for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] < smallest) {
// //         smallest = arr[i];
// //     }
// // }
// // console.log("Smallest =", smallest);

// //12. Pattern: ***** **** *** ** *
// for (let i = 5; i >= 1; i--) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str = str + "*";
//     }
//     console.log(str);
// }
// //13. Print all multiples of 5 from 1 to 100
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// //14. Sum of all even numbers from 1 to 50
// // let sum = 0;
// // for (let i = 1; i <= 50; i++) {
// //     if (i % 2 === 0) {
// //         sum = sum + i;
// //     }
// // }
// // console.log("Sum =", sum);

// //15. Reverse the numbers from 20 to 1
// for (let i = 20; i >= 1; i--) {
//     console.log(i);
// }

// //18. Find the largest number in an array
// // let arr = [15, 42, 7, 89, 23];
// // let largest = arr[0];
// // for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] > largest) {
// //         largest = arr[i];
// //     }
// // }
// // console.log("Largest =", largest);

// //19. Fibonacci series up to 10 terms
// let a = 0;
// let b = 1;
// for (let i = 1; i <= 10; i++) {
//     console.log(a);
//     let c = a + b;
//     a = b;
//     b = c;
// }

// //22. Pattern: * ** *** **** *****
// for (let i = 1; i <= 5; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//         str = str + "*";
//     }
//     console.log(str);
// }

// // 23. Print even and odd numbers from 1 to 20
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " Even");
//     } else {
//         console.log(i + " Odd");
//     }
// }
// // 24. Print numbers from 1 to 50 divisible by 5
// for (let i = 1; i <= 50; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }

// // 25. Count positive and negative numbers in an array
// let arr = [10, -5, 25, -8, 7, -2];
// let positive = 0;
// let negative = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         positive++;
//     } else if (arr[i] < 0) {
//         negative++;
//     }
// }
// console.log("Positive numbers =", positive);
// console.log("Negative numbers =", negative);

// // 26. Find the largest number in an array
// // let arr = [15, 42, 7, 89, 23];
// // let largest = arr[0];
// // for (let i = 1; i < arr.length; i++) {
// //     if (arr[i] > largest) {
// //         largest = arr[i];
// //     }
// // }
// // console.log("Largest number =", largest);

// // 27. Numbers divisible by both 3 and 5 from 1 to 100
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }
// }

// // 28. Numbers divisible by 7 but not by 14
// for (let i = 1; i <= 100; i++) {
//     if (i % 7 === 0 && i % 14 !== 0) {
//         console.log(i);
//     }
// }

// // 29. Find the average of all positive numbers in an array
// // let arr = [10, -5, 30, 20, -8];
// // let sum = 0;
// // let count = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] > 0) {
// //         sum = sum + arr[i];
// //         count++;
// //     }
// // }
// // let average = sum / count;
// // console.log("Average =", average);

// // 30. Find the sum of all even numbers from 1 to 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum = sum + i;
    }
}
console.log("Sum =", sum);
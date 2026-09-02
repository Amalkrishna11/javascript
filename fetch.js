//fecth
// is a bulid in js function  or api used to make http request and comunicate with the server 

// fetch(URL,Option)
// .then(res=>console.log()
// )





// fetch("https://jsonplaceholder.typicode.com/users")
// .then((res)=>res.json())
// .then((data)=>{
//     console.log(data);
//     console.log(data[0]);
    
//     data.forEach((user)=>{
//         console.log(user.name);
        
//     })
    
// })

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

  } catch (err) {
    console.log(err);
  }
}

fetchUsers();
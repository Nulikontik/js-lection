// const p = new Promise((resolve, reject) => {
//   let a = 1 + 1;
//   if (a == 3) {
//     resolve("success");
//   } else {
//     reject("fail");
//   }
// });
// console.log(p);
// p.then((message) => {
//   console.log("this is then " + message);
// })
//   .catch((message) => {
//     console.log("this is the catch " + message);
//   })
//   .finally(() => {
//     console.log("i am finally . i work in both cases");
//   });

//! запросы
//? XMLHttpRequest
// const btn = document.querySelector(".btn");

// const getData = () => {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://reqres.in/api/users?page=2");
//   xhr.send();

//   xhr.onload = () => {
//     const data = JSON.parse(xhr.response);
//     console.log(data);
//   };
// };
// btn.addEventListener("click", getData);

//! fetch - запрос
// fetch("https://reqres.in/api/users?page=2")
//   .then((data) => data.json())
//   .then((unpacked) => console.log(unpacked.data));

//! ==============
const div = document.querySelector("div");

fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((info) => {
    info.data.forEach((person) => {
      div.innerHTML += `<h6>${person.first_name} ${person.last_name}</h6>
        <p>$person.email}</p>
        <img src=${person.avatar} alt="" />`;
    });
  });

localStorage.setItem("name", "surya");
localStorage.setItem("age", 20);

let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

console.log(name, age);

// localStorage.setItem("name", "sheamus");

// name = localStorage.getItem("name");

localStorage.name = "sheamus"
name = localStorage.getItem("name");
localStorage.removeItem("age");
console.log(name,age);



document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

const customer = "Antoni";
let balance = 2000;

console.log(`Hello ${customer}. Your ballance is USD ${balance} `);

balance = balance + 200;

console.log(`Hello ${customer}. Your new ballance is USD ${balance} `);

let num1 = 12;
let num2 = 14;
typeof num1
// alert('Test js code hm');

// function testAlert(message) {
//     alert(message);
// };

// testAlert("Test 1");
// testAlert(5 + 4);

// console.log('New method');

// Selectors

// document.getElementById("greeting").innerHTML = "Hello World!";
// document.getElementsByClassName("product-item")
// // .innerHTML = "Smth new!";
// document.getElementsByTagName("p");
// document.querySelector("p#weather");
// document.querySelector("p#weather").style.color = "red";
// document.querySelector("p#weather").style.color = "#dedede";

// document.querySelector("p#weather").style.margin = "100px";

// ?? Keep in mind that some method parameters cannot be with dashes so instead of 'background-color'
// ?? we have backgroundColor:

// document.querySelector("p#weather").style.backgroundColor = "red";

// document.querySelector("p#weather").classList.add("redbg");
// document.querySelector("p#weather").classList.toggle("redbg");
// document.querySelector("p#weather").classList.remove("redbg");
// document.querySelector("p#weather").classList.toggle("redbg");

// ## Listeners

document.querySelector("#open-nav-menu").addEventListener("click", function(){
    alert("p element clicked")
});


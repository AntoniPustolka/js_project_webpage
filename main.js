// !! Menu Section !!

document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});

document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

// !! Greeting Section !!

function celsiusToFahr(temp){
    return ((parseFloat(temp) * 1.8) + 32);
}


const greetingText = "Good Day Darling";
const weatherCondition = "sunny";
const userLocation = "New York";
let temperature = 22.8221;

let weatherText;

// alert("The temperature outside is " + celsiusToFahr(temperature) + "°F outside.")



// console.log(weatherText); (event.target.id) === "celsius"

// !! Farh to Celsius => Redio Buttons !!

document.querySelector(".weather-group").addEventListener('click', function(event) {
   if  ((event.target.id) == "celsius") {
    weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed()}°C outside.`;
    // console.log(weatherText + "1")
    document.querySelector("p#weather").innerHTML = weatherText;
   } else {
    weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temperature).toFixed()}°F outside.`;
    // §console.log(weatherText + "2");
    document.querySelector("p#weather").innerHTML = weatherText;
   }
});

document.querySelector("#greeting").innerHTML = greetingText;

// !! Clock !!



//  new Date().getHours();
// document.querySelector("span[data-time=hours]").textContent = localTime.getHours();
// // // new Date().getMinutes()
// document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes();
// // // new Date().getSeconds();
// document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds();
// console.log('outside the timeout')

setInterval(function(){
    let localTime = new Date();
    // console.log('inside the timeout');
    document.querySelector("span[data-time=hours]").textContent = localTime.getHours().toString().padStart(2, "0");;
// // // new Date().getMinutes()
    document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes().toString().padStart(2, "0");
// // // new Date().getSeconds();
    document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds().toString().padStart(2, "0");
}, 1000);

// ?? Loop for ??
// let animals = ['dogs', 'cat', 'lion', 'zebra'];
// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);
// }

// let animals = {"name":"dog", "color":"white"};
// for (let i in animals) {
//     console.log(i + ": " + animals[i]);
// }
// let bankAccounts = ["EX_983746", "US_233478", "UK_098765", "EX_098777", "PT_002544"];

// function printEXAccounts() {
//     for (let i in bankAccounts) {
//         if (bankAccounts[i][0] == "E" && bankAccounts[i][1] == "X") {
//             console.log(bankAccounts[i]);
//         }
//     }
//    }
   
//    printEXAccounts();

// !! Galery !!
// src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1"

// const galleryImages = [
//     {
//         src: "./assets/gallery/image1.jpg",
//         alt: "Thumbnail Image 1"
//     },
//     {
//         src: "./assets/gallery/image2.jpg",
//         alt: "Thumbnail Image 2"
//     },
//     {
//         src: "./assets/gallery/image2.jpg",
//         alt: "Thumbnail Image 2"
//     }
// ];

// for (img in galleryImages) {
//     console.log(img);
// };
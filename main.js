// const weatherURL = `https://api.tomorrow.io/v4/weather/forecast?location={lat},{lon}&apikey={API key}`;
// let weatherAPIKey = "6cOHZzzEFiQieivQ837knnxT0r9QXYAl";
// console.log(APIKey);
//  `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`

// const { userInfo } = require("os");

const galleryImages = [
  {
    src: "./assets/gallery/img1.png",
    alt: "Thumbnail Image 4",
  },
  {
    src: "./assets/gallery/image1.jpg",
    alt: "Thumbnail Image 1",
  },
  {
    src: "./assets/gallery/image2.jpg",
    alt: "Thumbnail Image 2",
  },
  {
    src: "./assets/gallery/image3.jpg",
    alt: "Thumbnail Image 3",
  },
];

const product = [
  {
    title: "AstroFiction",
    author: "John Doe",
    price: 49.9,
    image: "./assets/products/img6.png",
  },
  {
    title: "Space Odissey",
    author: "Marie Anne",
    price: 35,
    image: "./assets/products/img1.png",
  },
  {
    title: "Doomed City",
    author: "Jason Cobert",
    price: 0,
    image: "./assets/products/img2.png",
  },
  {
    title: "Black Dog",
    author: "John Doe",
    price: 85.35,
    image: "./assets/products/img3.png",
  },
  {
    title: "My Little Robot",
    author: "Pedro Paulo",
    price: 0,
    image: "./assets/products/img5.png",
  },
  {
    title: "Garden Girl",
    author: "Ankit Patel",
    price: 45,
    image: "./assets/products/img4.png",
  },
];

// !! Menu Section !!
function manuHandler() {
  document
    .querySelector("#open-nav-menu")
    .addEventListener("click", function () {
      document.querySelector("header nav .wrapper").classList.add("nav-open");
    });

  document
    .querySelector("#close-nav-menu")
    .addEventListener("click", function () {
      document
        .querySelector("header nav .wrapper")
        .classList.remove("nav-open");
    });
}
// Temperature conversion
function celsiusToFahr(temp) {
  return parseFloat(temp) * 1.8 + 32;
}

// !! Greeting Section !!
function greetingHandler() {
  let currentHour = new Date().getHours();
  console.log(currentHour);
  let greetingText;
  if (currentHour < 12) {
    greetingText = "Good Morning";
  } else if (currentHour < 19) {
    greetingText = "Good Afternoon";
  } else if (currentHour < 24) {
    greetingText = "Good Evening";
  } else {
    greetingText = "Welcome!";
  };

  document.querySelector("#greeting").innerHTML = greetingText;
}

// Weather text 

const accuWeatherAPI = "t7uryi24HH0MYjzBPi94qWYlEDFBPUGq";
let URL1 = `http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey={API key}&q={lat}%2C{lon}`;
let URL2 = `http://dataservice.accuweather.com/currentconditions/v1/{locationKey}?apikey={API key}`;
// let locationKey = 0;
// let userLocation = '';
// // let weatherText = '';
// // let temp = 0;
// let latitude = 0;
// let longitude = 0;
// let newUrl = '';
// let locationKey
let userLocation;

function getPosition() {
navigator.geolocation.getCurrentPosition(position => {
//   console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  let newURL = URL1
    .replace("{lat}", latitude)
    .replace("{lon}", longitude)
    .replace("{API key}", accuWeatherAPI);
    fetch(newURL)
    .then(response => response.json())
    .then(function(data){
      const locationKey = data.Key;
      userLocation = data.EnglishName;
      return userLocation, locationKey;
    }).then(function(locationKey) {
        // console.log(locationKey);
        let updatedUrl = URL2.replace("{locationKey}", locationKey)
        .replace("{API key}", accuWeatherAPI);
      fetch(updatedUrl)
        .then(response => response.json())
        .then(function(data, userLocation) {
          const weatherCondition = data[0].WeatherText;
          const temp = data[0].Temperature.Metric.Value;
                 
          const celsiusText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temp.toFixed()}°C outside.`;
          const fahrText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(temp).toFixed()}°F outside.`;

          document.querySelector("p#weather").innerHTML = celsiusText;

          console.log(weatherCondition, temp);
          document
          .querySelector(".weather-group").addEventListener("click", function (event) {
            if (event.target.id == "celsius") {
              document.querySelector("p#weather").innerHTML = celsiusText;
            } else if (event.target.id == "fahr") {
              document.querySelector("p#weather").innerHTML = fahrText;
            }
          });
          
          })
          .catch(err => {
            document.querySelector("p#weather").innerHTML = "Error getthing the weather temperature. Please refresh the page";    
      });
    });
  });
}

  // const greetingText = "Good Day Darling";
  // const weatherCondition = "sunny";
  // const userLocation = "New York";
  // let temperature = 22.8221;

  // let weatherText;

  // alert("The temperature outside is " + celsiusToFahr(temperature) + "°F outside.")
  // console.log(weatherText); (event.target.id) === "celsius"
  // !! Farh to Celsius => Redio Buttons !!

//   document
//     .querySelector(".weather-group")
//     .addEventListener("click", function (event) {
//       if (event.target.id == "celsius") {
//         const weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${temperature.toFixed()}°C outside.`;
//         // console.log(weatherText + "1")
//         document.querySelector("p#weather").innerHTML = weatherText;
//       } else {
//         const weatherText = `The weather is ${weatherCondition} in ${userLocation} and it's ${celsiusToFahr(
//           temperature
//         ).toFixed()}°F outside.`;
//         // §console.log(weatherText + "2");
//         document.querySelector("p#weather").innerHTML = weatherText;
//       }
//     });

//   document.querySelector("#greeting").innerHTML = greetingText;
// }
// !! Clock !!

//  new Date().getHours();
// document.querySelector("span[data-time=hours]").textContent = localTime.getHours();
// // // new Date().getMinutes()
// document.querySelector("span[data-time=minutes]").textContent = localTime.getMinutes();
// // // new Date().getSeconds();
// document.querySelector("span[data-time=seconds]").textContent = localTime.getSeconds();
// console.log('outside the timeout')
function clockHandler() {
  setInterval(function () {
    let localTime = new Date();
    // console.log('inside the timeout');
    document.querySelector("span[data-time=hours]").textContent = localTime
      .getHours()
      .toString()
      .padStart(2, "0");
    // // // new Date().getMinutes()
    document.querySelector("span[data-time=minutes]").textContent = localTime
      .getMinutes()
      .toString()
      .padStart(2, "0");
    // // // new Date().getSeconds();
    document.querySelector("span[data-time=seconds]").textContent = localTime
      .getSeconds()
      .toString()
      .padStart(2, "0");
  }, 1000);
}
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

/* for (let i in galleryImages) {
    console.log(galleryImages[i]);
} */

// ?? ForEach loop ??

/* <img src="./assets/gallery/image1.jpg" alt="Thumbnail Image 1" data-array-index="0" data-selected="true">
<img src="./assets/gallery/image2.jpg" alt="Thumbnail Image 2" data-array-index="1" data-selected="false">
<img src="./assets/gallery/image3.jpg" alt="Thumbnail Image 3" data-array-index="2" data-selected="false"> */

// console.log(mainImage);
function galleryHandler() {
  let mainImage = document.querySelector("#gallery > img");
  let thumbnail = document.querySelector("#gallery .thumbnails");
  // console.log(thumbnail);
  mainImage.src = galleryImages[0].src;
  mainImage.alt = galleryImages[0].alt;
  galleryImages.forEach(function (image, index) {
    let thumb = document.createElement("img");
    thumb.src = image.src;
    thumb.alt = image.alt;
    thumb.dataset.arrayIndex = index;
    // Ternary Conditional
    thumb.dataset.selected = index === 0 ? true : false;
    thumb.addEventListener("click", function (e) {
      let selectedIndex = e.target.dataset.arrayIndex;
      let selectedImage = galleryImages[selectedIndex];
      mainImage.src = selectedImage.src;
      mainImage.alt = selectedImage.alt;
      thumbnail.querySelectorAll("img").forEach(function (img) {
        img.dataset.selected = false;
      });

      e.target.dataset.selected = true;
      console.log(selectedIndex);
    });
    // console.log(thumb)
    /* if (index === 0) {
        thumb.dataset.selected = true;
    } else {
        thumb.dataset.selected = false;
    } */
    // console.log(thumb);
    thumbnail.appendChild(thumb);
  });
}

// Product section

/* <div class="product-item">
<img src="./assets/products/img6.png" alt="AstroFiction">
<div class="product-details">
   <h3 class="product-title">AstroFiction</h3>
   <p class="product-author">John Doe</p>
   <p class="price-title">Price</p>
   <p class="product-price">$ 49.90</p>
</div>
</div> */
function populateProducts(productList) {
  let productSection = document.querySelector(".products-area");
  // Run a looop through the products and create an HTML element ("product-iteem") for each of them

  productSection.textContent = "";

  productList.forEach(function (product, index) {
    // Create the HTML elements for the individual products
    let productElm = document.createElement("div");
    productElm.classList.add("product-item");

    // Create product images
    let productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = "Image for " + product.title;

    // Create product details
    let productDetails = document.createElement("div");
    productDetails.classList.add("product-details");

    // Create product title, author, price-title and price
    let productTitle = document.createElement("h3");
    productTitle.classList.add("product-title");
    productTitle.textContent = product.title;

    let productAuthor = document.createElement("p");
    productAuthor.classList.add("product-author");
    productAuthor.textContent = product.author;

    let productPriceTitle = document.createElement("p");
    productPriceTitle.classList.add("price-title");
    productPriceTitle.textContent = "Price";

    let productPrice = document.createElement("p");
    productPrice.classList.add("price");
    productPrice.textContent =
      product.price == 0 ? "Free" : "$" + product.price.toFixed(2);

    // Append product details
    productDetails.append(productTitle);
    productDetails.append(productAuthor);
    productDetails.append(productPriceTitle);
    productDetails.append(productPrice);

    // Add all child HTML elements of the product
    productElm.append(productImage);
    productElm.append(productDetails);

    // Add the complete individual product to the product section
    productSection.append(productElm);
  });
}

function productHandler() {
  // products-filter

  let totalPaid = product.filter((item) => item.price > 0);
  // console.log(totalPaid.length);

  let free = product.filter((item) => !item.price || item.price <= 0);

  populateProducts(product);

  document.querySelector(
    ".products-filter label[for=free] span.product-amount"
  ).textContent = free.length;
  document.querySelector(
    ".products-filter label[for=paid] span.product-amount"
  ).textContent = totalPaid.length;
  document.querySelector(
    ".products-filter label[for=all] span.product-amount"
  ).textContent = product.length;

  let productFilter = document.querySelector("div.products-filter");
  productFilter.addEventListener("click", function (e) {
    if (e.target.id === "all") {
      populateProducts(product);
    } else if (e.target.id === "paid") {
      populateProducts(totalPaid);
    } else if (e.target.id === "free") {
      populateProducts(free);
    }
  });
}

function footerHandler() {
  let currentYear = new Date().getFullYear();
  document.querySelector(
    "footer"
  ).textContent = `© ${currentYear} - ALl rights reserved`;
}

/// ACCUWEATHER API

// function getLocationKey() {
//   fetch(URLv1)
//     .then(response => response.json())
//     .then(data1 => {
//       console.log(data1);
//       let locationKey = data1.Key;
//       let userLocation = data1.EnglishName;
//       console.log(locationKey, userLocation);
//       return locationKey, userLocation;
//     });
// };


// function getCurrentCondition() {
//       let updatedUrl = URL2.replace("{locationKey}", locationKey)
//         .replace("{API key}", accuWeatherAPI);
//       console.log(updatedUrl);
//       fetch(updatedUrl)
//         .then((response) => response.json())
//         .then(data2 => {
//           console.log(data2);
//           weatherText = data2.WeatherText;
//           temp = data2.Temperature.Metric.Value;
//           console.log(weatherText, temp);
//           return weatherText, temp;
//       });
//   }

// let numbers = [1,3,4,5,5,6,7,4,2,6];

// let greaterThan4 = numbers.filter(function(item){
//     return item > 4;
// })

// console.log(greaterThan4);

// Geolocation
// const open_api = `https://api.open-meteo.com/v1/forecast?latitude={lat}longitude={lon}hourly=temperature_2m`;

// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position);
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     let URL = open_api
//         .replace("{lat}",latitude.toFixed(2))
//         .replace("{lon}",longitude.toFixed(2))
//     fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data));
// })
// var requestOptions = {
//   method: 'GET',
// };

// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position);
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
//     let URL = weatherURL
//         .replace("{lat}",latitude)
//         .replace("{lon}",longitude)
//         .replace("{API key}", weatherAPIKey)
//     console.log(URL);
//     fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       const weatherCondition = data.timelines.daily[0].values.humidityAvg;
//       const userLocation = "New York";
//       let temperature = data.timelines.daily[0].values.temperatureAvg;
//       console.log(weatherCondition, userLocation, temperature);
//     });
// })

// var requestOptions = {
//   method: 'GET',
// };

// const geoapfiyURL = `https://api.geoapify.com/v1/geocode/reverse?lat={lat}&lon={lon}&apiKey={API key}`;
// let geoapfiyAPI = '732429ae42074f3894c7c52c7206a8ac';

// navigator.geolocation.getCurrentPosition(position => {
//     // console.log(weatherAPIKey);
//     let latitude = position.coords.latitude;
//     let longitude =u position.coords.longitude;
//     let URL = geoapfiyURL
//         .replace("{lat}",latitude)
//         .replace("{lon}",longitude)
//         .replace("{API key}", geoapfiyAPI)
//     console.log(URL);
//     fetch(URL)
//     .then(response => response.json())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// });

// Page Load
manuHandler();
greetingHandler();
getPosition();
clockHandler();
galleryHandler();
productHandler();
footerHandler();
getPosition();
// getLocationKey();
// getCurrentCondition();
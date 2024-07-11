const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.querySelector('.navbar');


if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Select the <h2> element with class "price"

// Add an event listener to the <select> element

// Get all the necessary elements
const price = document.getElementById("price");
const tx = document.getElementById("tx");
const items = document.getElementById("items");
var tag = document.createElement("h2"); // create a new paragraph element
var text = document.createTextNode(""); // create a text node


// Add a click event listener to each of the li elements
items.addEventListener("click", (event) => {
  // Get the selected size from the li element that was clicked
  const selectedSize = event.target.textContent;

  // Set the text of the p element to the selected size
  tx.textContent = `${selectedSize}`;
  

  // Set the price based on the selected size
  switch (selectedSize) {
    case "Small":
      price.textContent = "$99.00"; 
      break;
    case "Medium":
      price.textContent = "$119.00";
      break;
    case "Large":
      price.textContent = "$129.00";
      break;
    default:
      price.textContent = "$139.00";
  }
    

});


document.getElementById('option').addEventListener('click', () => {
    const item = document.querySelector('.select .items');
    if (!item.classList.contains('open')) {
        item.classList.add('open')
    }
    else {
        item.classList.remove('open')
    }
})

var swiper = new Swiper(".swiper", {
  effect: "cube",
  grabCursor: true,
  loop: true,
  speed: 1000,
  cubeEffect: {
      shadow: false,
      slideShadows: true,
      shadowOffset: 10,
      shadowScale: 0.94,
  },
  autoplay: {
      delay: 2600,
      pauseOnMouseEnter: true,
  },
});
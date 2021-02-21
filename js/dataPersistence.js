'use strict';

let totalVotes = 0;
let votesAuthorized = 25;
let allProducts = [];
let indexArray = [];
let uniqueImageCount = 6;

let firstImage = document.querySelector('section img:first-child');
let secondImage = document.querySelector('section img:nth-child(2)');
let thirdImage = document.querySelector('section img:nth-child(3)');
let myContainer = document.querySelector('section');

function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
  allProducts.push(this);
}
//                                                               <<<      SETTING UP LOCAL STORAGE
// 1. Get the data from the local storage using it's key
var retrieveProducts = localStorage.getItem('products');

//  Use local storage in a way that doesn't bReAk your existing code!
if (retrieveProducts) {
  //  2. Make that data usable again by parsing it
  let parsedProducts = JSON.parse(retrieveProducts);
  allProducts = parsedProducts;
} else {
  new Product('bag');
  new Product('banana');
  new Product('bathroom');
  new Product('boots');
  new Product('breakfast');
  new Product('bubblegum');
  new Product('chair');
  new Product('cthulhu');
  new Product('dog-duck');
  new Product('dragon');
  new Product('pen');
  new Product('pet-sweep');
  new Product('scissors');
  new Product('shark');
  new Product('sweep', 'png');
  new Product('tauntaun');
  new Product('unicorn');
  new Product('usb', 'gif');
  new Product('water-can');
  new Product('wine-glass');
}

function getRandomIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderProduct() {

  while (indexArray.length < uniqueImageCount) {
    let randomIndex = getRandomIndex();
    while (!indexArray.includes(randomIndex)) {
      indexArray.push(randomIndex);
    }
  }

  let firstProductIndex = indexArray.shift();
  let secondProductIndex = indexArray.shift();
  let thirdProductIndex = indexArray.shift();

  firstImage.src = allProducts[firstProductIndex].src;
  firstImage.title = allProducts[firstProductIndex].name;
  allProducts[firstProductIndex].views++;

  secondImage.src = allProducts[secondProductIndex].src;
  secondImage.title = allProducts[secondProductIndex].name;
  allProducts[secondProductIndex].views++;

  thirdImage.src = allProducts[thirdProductIndex].src;
  thirdImage.title = allProducts[thirdProductIndex].name;
  allProducts[thirdProductIndex].views++;
}

function handleClick(event) {
  if (event.target === myContainer) {
    alert('Please click on an image.');
  }
  totalVotes++;
  let productClicked = event.target.title;

  for (let i = 0; i < allProducts.length; i++) {
    if (productClicked === allProducts[i].name) {
      allProducts[i].votes++;
    }
  }
  renderProduct();
  if (totalVotes === votesAuthorized) {
    myContainer.removeEventListener('click', handleClick);
    renderChart();
  }
  //                                                     <<<      STRINGIFY THE DATA
  // STRINGIFY the data!!!
  let stringifiedProducts = JSON.stringify(allProducts);
  // console.log(stringifiedProducts);
  //                                                     <<<      S A V E to L O C A L Storage
  localStorage.setItem('products', stringifiedProducts);
}
renderProduct();

function renderChart() {
  let productNames = [];
  let ProductViews = [];
  let ProductVotes = [];
  for (let i = 0; i < allProducts.length; i++) {
    productNames.push(allProducts[i].name);
    ProductViews.push(allProducts[i].views);
    ProductVotes.push(allProducts[i].votes);
  }

  var chartObject = {
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [{
        label: 'Views',
        data: ProductViews,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 3
      },
      {
        label: 'Votes',
        data: ProductVotes,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 3
      }]
    },
    responsive: false,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };

  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, chartObject);
}
myContainer.addEventListener('click', handleClick);

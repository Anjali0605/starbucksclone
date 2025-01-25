// Constants for buttons
const star25Btn = document.getElementById("25star");
const star100Btn = document.getElementById("100star");
const star200Btn = document.getElementById("200star");
const star300Btn = document.getElementById("300star");
const star400Btn = document.getElementById("400star");

// Constants for reward divs
const star25div = document.getElementsByClassName("25-star")[0];
const star100div = document.getElementsByClassName("100-star")[0];
const star200div = document.getElementsByClassName("200-star")[0];
const star300div = document.getElementsByClassName("300-star")[0];
const star400div = document.getElementsByClassName("400-star")[0];

// Function to hide all reward divs
function hideAllRewards() {
    star25div.style.display = "none";
    star100div.style.display = "none";
    star200div.style.display = "none";
    star300div.style.display = "none";
    star400div.style.display = "none";
}

// Functions to show specific reward divs
function showStar25() {
    hideAllRewards();
    star25div.style.display = "block";
}

function showStar100() {
    hideAllRewards();
    star100div.style.display = "block";
}

function showStar200() {
    hideAllRewards();
    star200div.style.display = "block";
}

function showStar300() {
    hideAllRewards();
    star300div.style.display = "block";
}

function showStar400() {
    hideAllRewards();
    star400div.style.display = "block";
}

// Attach event listeners to buttons
star25Btn.onclick = showStar25;
star100Btn.onclick = showStar100;
star200Btn.onclick = showStar200;
star300Btn.onclick = showStar300;
star400Btn.onclick = showStar400;

// Set default view (optional)
hideAllRewards();
star25div.style.display = "block";

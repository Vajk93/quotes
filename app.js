"use strict";

const idNumber = document.querySelector(".numberOfQuote");
const advice = document.querySelector("h2");
const dice = document.querySelector(".dice-container");

const renderQuote = function (id, quote) {
  idNumber.innerHTML = id;
  advice.innerHTML = `"${quote}"`;
};

const fetchData = function () {
  let response = fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      // handle the response
      // alert("jó");
      return response.json();
    })
    .then((data) => {
      console.log(data.slip); // goooooooooood
      renderQuote(data.slip.id, data.slip.advice);
    })
    .catch((error) => {
      // handle the error
      alert("nem jó");
    });
};
fetchData();

dice.addEventListener("click", fetchData);

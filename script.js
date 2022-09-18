"use strict";
const inputEl = document.querySelector(".input");
const outputEl = document.querySelector(".output");
const button = document.querySelector(".button");

const serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(text) {
  const translationURL = serverURL + "?" + "text=" + text;
  console.log(translationURL);
  return translationURL;
}

const errorHandler = function () {
  alert("Error Occured try after some time!!");
};
function getTranslation() {
  const inputText = inputEl.value;
  const newTranslationURL = getTranslationURL(inputText);
  console.log(newTranslationURL);

  fetch(newTranslationURL)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      console.log(json.contents.translated);
      outputEl.innerHTML = json.contents.translated;
    })
    .catch(errorHandler);
}

button.addEventListener("click", getTranslation);

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
    });
}

button.addEventListener("click", getTranslation);

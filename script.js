import {translateFromEng} from "./translator.js";

const englishInput = document.querySelector(".english-Input");
const englishCode = document.getElementById("englishCode")
const englishSubmit = document.getElementById("englishToMorse__submit-btn");
const morseOutput = document.getElementById("morse-Translation");




const englishToMorse = () => {
    const input = englishInput.englishCode.value;
    englishInput.englishCode.value = "";
    const morseConfig = translateFromEng(input).split("   ").join("   ");
    morseOutput.innerHTML = morseConfig
};

englishSubmit.addEventListener("click", englishToMorse)
import { alphabet } from "./alphabet.js";

// 1. Make input all lowercase to match 'alphabet' (.toLowerCase)
// 2. Split input and map it onto a new array, so it can be translated index by index
// 3. Map characters from "alphabet" that match array just created, into array (etc ["a", "b", "c"] = [".-", "-...", "-.-."])

const translateFromEng = (input) => {
  const inputWord = input
    .toLowerCase()
    .split(" ")
    .map((inputWord) =>
      inputWord
        .split("")
        .map((character) => alphabet[character])
        .join(" ")
    )
    .join("   ");
  return inputWord;
};

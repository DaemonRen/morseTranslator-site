import { alphabet } from "./alphabet.js";

// 1. Make input all lowercase to match 'alphabet' (.toLowerCase)
// 2. Split input and map it onto a new array using (" "), so it can splits words up, but not letters
// 3. Map characters from "alphabet" that match array just created, into array (etc ["a", "b", "c"] = [".-", "-...", "-.-."])
// 4. Map from alphabet
// 5. Reconcatenate array strings (again using (" "))
// 6. .join without gaps ("   ")
// 7. Return the modified word
// 8. Call const in script.js (on submit button?)
// 9. Do the same backwards for morse to english?

export const translateFromEng = (input) => {
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

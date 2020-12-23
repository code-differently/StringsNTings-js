class StringsAndTings {
  // @return string with identical content, and the first character capitalized
  camelCase(str) {
    let strSplit = str.split(" ");
    for (let i = 0; i < strSplit.length; i++) {
      let word = strSplit[i];
      strSplit[i] = word[0].toUpperCase() + word.substring(1);
    }
    return strSplit.join(" ");
  }

  //  @return string with identical contents, with each word individually in reverse order
  reverseString(str) {
    let result = str.split("").reverse().join("");
    return result;
  }

  //  @return string with identical contents, with each word individually in reverse order
  reverseInPlaceString(str) {
    let words = str.split(" ");
    let result = "";
    for (let i = 0; i < words.length; i++) {
      let reversedWord = words[i].split("").reverse().join("");
      words[i] = reversedWord;
    }
    result = words.join(" ");
    return result;
  }

  // @return string with identical contents, in reverse order, with first character capitalized
  reverseThenCamelCase(str) {
    let reversed = str.toLowerCase().split("").reverse();
    reversed = reversed.join("").split(" ");
    let newArr = [];
    for (let i = 0; i < reversed.length; i++) {
      let firstLetter = reversed[i].charAt(0).toUpperCase();
      let restOfWord = reversed[i].slice(1);
      newArr[i] = firstLetter + restOfWord;
    }
    return newArr.join(" ");
  }

  // @return string with identical contents excluding first and last character
  removeFirstAndLastCharacter(str) {
    let result = str.substr(1, str.length - 2);
    return result;
  }

  // @return string with identical characters, each with opposite casing
  invertCasing(str) {
    let countChanges = 0;
    let isLetter = (c) => c.toLowerCase() !== c.toUpperCase();
    let isLowerCase = (c) => c.toLowerCase() === c;

    let flippedMessage = Array.from(str)
      .map((c) => {
        if (!isLetter(c)) {
          return c;
        }
        countChanges++;
        // return uppercase character if c is a lowercase char
        if (isLowerCase(c)) {
          return c.toUpperCase();
        }
        // Here, we know c is an uppercase character, so return the lowercase
        return c.toLowerCase();
      })
      .join("");
      return flippedMessage  }
}
module.exports = StringsAndTings;

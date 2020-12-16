class StringsAndTings {

    // @return string with identical content, and the first character capitalized
    camelCase(str) {
        let result = "";
        for (let i = 0; i < str.length; i++) {
            if (i == 0 || str[i - 1] == " ") {
                result += str[i].toUpperCase();
            } else {
                result += str[i];
            }
        }
        return result;
    }

    //@return string with identical contents, with each word individually in reverse order
    reverseString() {
        return null;
    }

    reverseWords(str) {
        return null;
    }

    // @return string with identical contents, in reverse order, with first character capitalized
    reverseThenCamelCase(str) {
        return null;
    }

    // @return string with identical contents excluding first and last character
    removeFirstAndLastCharacter(str) {
        return null;
    }

    // @return string with identical characters, each with opposite casing
    invertCasing(str) {
        return null;
    }
}

module.exports = StringsAndTings;
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

    reverseString(str) {
        // Strings in js are immutable. Need to split it into a new array to modify it.
        let result = str.split("");
        let length = result.length;
        // You would think you'd need to do -1 here, but that does not work. This method seems to work for even and odd lengthed inputs.
        const halfIndex = Math.floor(length / 2);
        for (let i = 0; i < halfIndex; i++) {
            let rightLetter = result[length - i - 1];
            result[length - i - 1] = result[i];
            result[i] = rightLetter;
        }
        result = result.join("");
        return result.toString();
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
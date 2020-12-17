class StringsAndTings {
    
    // @return string with identical content, and the first character capitalized
    camelCase(str){
        let strSplit = str.split(" ");
        for (let i = 0; i < strSplit.length; i++) {
           let word = strSplit[i];
            strSplit[i] = word[0].toUpperCase() + word.substring(1);     
            }
        return strSplit.join(" ");
    }

    //@return string with identical contents, with each word individually in reverse order
    reverseString(str){
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        return reversed;
    }

    reverseWords(str){
        let words = [];
        words = str.match(/\S+/g);
        let result = "";
        for (let i = 0; i < words.length; i++) {
            result += words[i].split("").reverse().join("") + " ";
        }
        return result.trim();
    }
    // @return string with identical contents, in reverse order, with first character capitalized
    reverseThenCamelCase(str){
        let reversed = "";
        for (let i = str.length - 1; i >= 0; i--) {
            reversed += str[i];
        }
        let upperCase = reversed.split(" ");
        for (let i = 0; i < upperCase.length; i ++) {
            let word = upperCase[i];
            upperCase[i] = word[0].toUpperCase() + word.substring(1);
        }
        return upperCase.join(" ");
    }

    // @return string with identical contents excluding first and last character
    removeFirstAndLastCharacter(str){
        let result = str.slice(1, -1);
        return result;
    }

    // @return string with identical characters, each with opposite casing
    invertCasing(str){
       let newWord = [];
       for ( let i = 0; i < str.length; i++) {
           if ( str[i] == str[i].toLowerCase()) {
               newWord[i] = str[i].toUpperCase();
           } else {
               newWord[i] = str[i].toLowerCase();
        }
            }
            return newWord.join("");
        }
    }
module.exports = StringsAndTings;
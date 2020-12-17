class StringsAndTings {
    
    // @return string with identical content, and the first character capitalized
    camelCase(str){
        let strSplit= str.split(" ");
        for(let i = 0; i < strSplit.length; i++){
            let word = strSplit[i];
            strSplit[i] = word[0].toUpperCase() + word.substring(1);
        }
        return strSplit.join(" ");
    }

    //@return string with identical contents, with each word individually in reverse order
    reverseString(str){
        let revStr = "";
        for( let i = str.length -1; i >= 0; i--) {
            revStr += str[i];
        }
        return revStr;
    }

    //@return string with identical contents, with each word individually in reverse order
    reverseWords(str){
        let revWords = str.split(" ");
        for( let i = revWords.length -1; i >= 0; i--) {
            revWords += str[i];
        }
        return str.split("").reverse().join("");
    }

    // @return string with identical contents, in reverse order, with first character capitalized
    reverseThenCamelCase(str){
        let revCamel = this.reverseString(str);
        return this.camelCase(revCamel);
    }

    // @return string with identical contents excluding first and last character
    removeFirstAndLastCharacter(str){
        let result = str.substring(1, str.length-1);
        return result;
    }

    // @return string with identical characters, each with opposite casing
    invertCasing(str){
        let invert = "";
        let i = 0;
        while (i < str.length) {
            let m = str.charAt(i);
                if (m === m.toUpperCase()) {
                    m = m.toLowerCase();
                } else {
                    m = m.toUpperCase();
                } 
                i += 1
                invert += m;
            }
            return invert;
    }

    
}

module.exports = StringsAndTings;
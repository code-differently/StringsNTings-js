class StringsAndTings {
    
    // @return string with identical content, and the first character capitalized
    camelCase(str){
        let strSplit = str.split(" ");
            for (let i=0; i < strSplit.length; i++){
            let word = strSplit[i];
            strSplit[i] = word[0].toUpperCase() + word.substring(1);
        }

            return strSplit.join(" ");
    }

    //@return string with identical contents, with each word individually in reverse order
    reverseString(str){
        let strSplit = str.split(" ");
            for (let i=0; i < strSplit.length; i++) {
                let word = strSplit[i];
                strSplit[i] = word[i].toUpperCase() + word.substring(1);
            }
            return str.split("").reverse().join("");        
    }
   
    

    // @return string with identical contents, in reverse order, with first character capitalized
    reverseThenCamelCase(str){
    
        let reverseCamel = this.reverseString(str);
            return this.camelCase(reverseCamel);
    }


    // @return string with identical contents excluding first and last character
    removeFirstAndLastCharacter(str){
        let removeChar = str.substring(1, str.length-1);
            return removeChar;
    }

    // @return string with identical characters, each with opposite casing
    invertCasing(str){
        let string = '';
        let i = 0;
        while (i < str.length) {
            let n = str.charAt(i);
            if (n == n.toUpperCase()) {
                // *Call* toLowerCase
                n = n.toLowerCase();
            }else {
                // *Call* toUpperCase
                n = n.toUpperCase();
            }
            i += 1;
            string += n;
        }
            return string;
        }

    reverseWords(str){
        let words = str.split(" ");
        let result ="";
            for (let i = 0; i < words.length; i++) {
               result += words[i].split('').reverse().join('') + " ";
        }
            return result.trim();
    }
}

module.exports = StringsAndTings;
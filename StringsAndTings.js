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
        let strSplit = str.split(" ");
            for (let i=0; i < strSplit.length; i++) {
                let word = strSplit[i];
                strSplit[i] = word[i] + word.substring(1);
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
        let remove = str.substring(1, str.length-1);
        return remove;
    }

    // @return string with identical characters, each with opposite casing
    invertCasing(str){
        let stringNew = "";
        let i = 0;
        while (i < str.length) {
            let k = str.charAt(i);
            if (k == k.toUpperCase()) {
                k = k.toLowerCase();
            } else {
                k = k.toUpperCase();
            }
            i += 1;
            stringNew += k; 
        }
        return stringNew;
        }

       // reverse words
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
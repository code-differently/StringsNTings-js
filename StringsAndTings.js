class StringsAndTings {
    
    // @return string with identical content, and the first character capitalized
    camelCase(str){
        let output = str.split(" ");
        for(let i = 0; i < output.length; i++){
            let word = output[i];
            output[i] = word[0].toUpperCase() + word.substring(1);
        }

        return output.join(" ");
    }

    //@return string with identical contents, with each word individually in reverse order
    reverseString(str){
        let copy = str;
        let splitStr = copy.split("");
        let reverseStr = splitStr.reverse();
        let joinStr = reverseStr.join("");
        return joinStr;
    }

    reverseWords(str){
        let copy = str;
        let output = "";
        let words = copy.split(" ");
        for(let i = 0; i < words.length; i++){
            let reverse = this.reverseString(words[i]);
            output += ` ${reverse}`;
        }
        return output.trim();
    }

    // @return string with identical contents, in reverse order, with first character capitalized
    reverseThenCamelCase(str){
        let reverse = this.reverseString(str);
        let reverseCamel = this.camelCase(reverse);
        return reverseCamel;
    }

    // @return string with identical contents excluding first and last character
    removeFirstAndLastCharacter(str){
        let copy = str;
        let remove = copy.substr(1, copy.length - 2);
        return remove;
    }

    // @return string with identical characters, each with opposite casing
    invertCasing(str){
        let copy = str;
        let output = "";
        for(let i = 0; i < copy.length; i++){
            let character = copy[i];
            if(character == character.toLowerCase()){
                output += character.toUpperCase();
            } else if(character == character.toUpperCase()){
                output += character.toLowerCase();
            }
        }
        return output;
    }
}

module.exports = StringsAndTings;
class StringsAndTings {
    
    // @return string with identical content, and the first character capitalized
    camelCase(str){
        let string = str.split(" ");
        for (let i = 0; i < string.length; i++) {
            let word = string[i];
            string[i] = word[0].toUpperCase() + word.substring(1);
        }
        return string.join(" ");
    }

    //@return string with identical contents, with each word individually in reverse order
    reverseString(str){

        return str.split("").reverse().join("");
    }

    //return string with each word reversed but still in same order
    reverseWords(str){
        let stringSplit = str.split(" ");
        let newArr = [];
        for (let i = 0; i < stringSplit.length; i++){
            stringSplit[i] = stringSplit[i].split("").reverse()
            let rejoin = stringSplit[i].join("") + " "
            newArr += rejoin;
        }
        return newArr.trim();
    }

    // @return string with identical contents, in reverse order, with first character capitalized
    reverseThenCamelCase(str){
        let reverseCap = str.split("").reverse().join("");
        let string = reverseCap.split(" ");
        for (let i = 0; i < string.length; i++) {
            let word = string[i];
            string[i] = word[0].toUpperCase() + word.substring(1);
        }
        return string.join(" ");
    }

    // @return string with identical contents excluding first and last character
    removeFirstAndLastCharacter(str){
        let firstLastChar = str.substring(1, str.length - 1);
        return firstLastChar;

    }

    // @return string with identical characters, each with opposite casing
    invertCasing(str){
        var output = "";
        for(var i = 0; i < str.length; i++){
            if(str[i] == str[i].toUpperCase()){
                output += str[i].toLowerCase();
            }else {
                output += str[i].toUpperCase();
            }           
        }
        return output;
    }
}

module.exports = StringsAndTings;
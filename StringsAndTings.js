class StringsAndTings {
    
    // @return string with identical content, and the first character capitalized
    // camelCase(str){
    //     let input = "she sells sea shells";
    //     let string = input.split(" ");
    //     for (let i = 0; i <string.length; i++) {
    //         string[i] = string[i][0].toUpperCase() + string[i].substr(1);

    //     }

    //     return string.join(" ");
    // }


    camelCase(str){
        let string = str.split(" ");
        for (let i = 0; i <string.length; i++) {
            string[i] = string[i][0].toUpperCase() + string[i].substring(1);
        }
        return string.join(" ");
    }



    //@return string with identical contents, with each word individually in reverse order
    reverseString(str){
        let rString = "";
        for (let i = str.length-1; i >= 0; i--){
            rString += str[i];
        }
        return rString;
    }



    //reverse each word in a string
    reverseWords(str){
        let rWordString = "";
        let rWords = "";
        for(let i = str.length-1; i >=0; i--){
            if (str[i] === " "){
                rWordString = " " + rWords + rWordString;
                rWords = "";
            }else {rWords += str[i]}
           
        }
        return rWords + rWordString;
    }


//@return string with identical contents, in reverse order, with first character capitalized

    reverseThenCamelCase(str){
        let rString = this.reverseString(str);
        let reverseString = rString;
        reverseString = this.camelCase(rString);
     
        return reverseString;
    }
 
    // @return string with identical contents excluding first and last character
    removeFirstAndLastCharacter(str){
        let newString = "";
        for (let i=1; i<str.length-1; i++){
            newString += str[i];
        }
        return newString;
    }

    // @return string with identical characters, each with opposite casing
    invertCasing(str){
        let charCase = [];
        let inverseString = "";
        for(let i=0; i<=str.length-1;i++){
            charCase += str[i];
        if(charCase[i] === charCase[i].toUpperCase()){
            inverseString += charCase[i].toLowerCase();
         }else {inverseString += charCase[i].toUpperCase();
         }    
    }
        return inverseString;
    }
}

module.exports = StringsAndTings;
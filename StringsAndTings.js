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
    reverseTest(str){
        let strSplit = str.split("");
        let reverseArray = strSplit.reverse();
        let joinArray= reverseArray.join('');
        return joinArray;
    }

    // @return string with identical contents, in reverse order, with first character capitalized
    reverseWordsTest(str){
        let wordArray = str.split(" ");
        let word = '';
        let reversedString = '';
        for(let i = 0; i < wordArray.length; i++){
            word = wordArray[i];
            let characterArray = word.split("");
            let reversedCharacterArray = characterArray.reverse();
            let reversedWord = reversedCharacterArray.join('');
            wordArray[i] = reversedWord;
        }
        reversedString = wordArray.join(' ');
        return reversedString;
    }

    // @return string with reverse words, then camel case
    reverseThenCamelCaseTest(){}

    // @return string with identical contents excluding first and last character
    firstAndLastCharacterTest(str){
        let stringSplit = str.split('');
        
        stringSplit.pop();
        stringSplit.shift();
        let joinString = stringSplit.join('');
        return joinString;
    }

    // @return string with identical characters, each with opposite casing
    invertCasing(str){
        let strSplit = str.split('');
        let product = '';
        for(let i = 0; i < strSplit.length; i++){
            let word = strSplit[i];
                if(word === word.toLowerCase()){
                    // Check if lowercase
                    product = product + word.toUpperCase()
                }else{
                    // Check if uppercase
                    product = product + word.toLowerCase()
            }
        }
        return product;
    }
}

module.exports = StringsAndTings;
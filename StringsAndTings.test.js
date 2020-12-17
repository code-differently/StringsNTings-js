const { TestScheduler } = require('jest');
const StringsAndTings = require('./StringsAndTings');


test("camelCaseTest", () => {

    let stringsAndTings = new StringsAndTings();
    let input = "she sells sea shells";
    let expected = "She Sells Sea Shells";

    let actual = stringsAndTings.camelCase(input);

    expect(actual).toEqual(expected);
});

test("reverseTest", () => {

    let stringsAndTings = new StringsAndTings();
    let input = "she sells sea shells";
    let expected = "sllehs aes slles ehs";

    let actual = stringsAndTings.reverseString(input);

    expect(actual).toEqual(expected);
});

test("reverseWordsTest", () => {

    let stringsAndTings = new StringsAndTings();
    let input = "she sells sea shells";
    let expected = "ehs slles aes sllehs";

    let actual = stringsAndTings.reverseWords(input);

    expect(actual).toEqual(expected);
});

test("reverseThenCamelCaseTest", () => {

    let stringsAndTings = new StringsAndTings();
    let input = "she sells sea shells";
    let expected = "Sllehs Aes Slles Ehs";

    let actual = stringsAndTings.reverseThenCamelCase(input);

    expect(actual).toEqual(expected);
});

test("removeFirstAndLastCharacterTest", () => {

    let stringsAndTings = new StringsAndTings();
    let input = "she sells sea shells";
    let expected = "he sells sea shell";

    let actual = stringsAndTings.removeFirstAndLastCharacter(input);

    expect(actual).toEqual(expected);
});


test("invertCasingTest1", () => {

    let stringsAndTings = new StringsAndTings();
    let input = "shE sells SEA sHeLlS";
    let expected = "SHe SELLS sea ShElLs";

    let actual = stringsAndTings.invertCasing(input);

    expect(actual).toEqual(expected);
});


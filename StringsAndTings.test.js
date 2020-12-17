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

    let actual = stringsAndTings.reverseTest(input);

    expect(actual).toEqual(expected);
});

test("reverseWordsTest", () => {

    let stringsAndTings = new StringsAndTings();
    let input = "she sells sea shells";
    let expected = "ehs slles aes sllehs";

    let actual = stringsAndTings.reverseWordsTest(input);

    expect(actual).toEqual(expected);
});

test("reverseThenCamelCaseTest", () => {

    let stringsAndTings = new StringsAndTings();
    let input = "she sells sea shells";
    let expected = "Sllehs Aes Slles Ehs";

    let actual = stringsAndTings.reverseThenCamelCaseTest(input);

    expect(actual).toEqual(expected);
});

test("removeFirstAndLastCharacterTest", () => {

    let stringsAndTings = new StringsAndTings();
    let input = "she sells sea shells";
    let expected = "he sells sea shell";

    let actual = stringsAndTings.firstAndLastCharacterTest(input);

    expect(actual).toEqual(expected);
});


test("invertCasing", () => {

    let stringsAndTings = new StringsAndTings();
    let input = "shE sells SEA sHeLlS";
    let expected = "SHe SELLS sea ShElLs";

    let actual = stringsAndTings.invertCasing(input);

    expect(actual).toEqual(expected);
});


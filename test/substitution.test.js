// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect

describe('substitution()', () =>{
    it("Should return false if the given alphabet is less than 26 characters long.", () => {
        const input = 'code';
        const alphabet = 'gkleoawp';
        const expected = false;
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    })
    it("Should return false if the given alphabet is more than 26 characters long.", () => {
        const input = 'coding';
        const alphabet = 'xoyqmcgrukswaflnthdjpzibeva';
        const expected = false;
        const actual = substitution(input, alphabet)
        expect(actual).to.equal(expected);
    })
    it("Should return false if there are any duplicate characters in the given alphabet..", () => {
        const input = 'coding';
        const alphabet = 'xocqmygrukswaflnthdjpzibeva';
        const expected = false;
        const actual = substitution(input, alphabet)
        expect(actual).to.equal(expected);
    })
    it("Should maintain any spaces in the message when encoding.", () => {
        const input = 'lets code';
        const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
        const expected = 'wmjd ylqm';
        const actual = substitution(input, alphabet)
        expect(actual).to.equal(expected);
    })
    it("Should maintain any spaces in the message when decoding.", () => {
        const input = 'wmjd ylqm';
        const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
        const expected = 'lets code';
        const actual = substitution(input, alphabet, false)
        expect(actual).to.equal(expected);
    })
    
    it("Should ignore capital letters, treating them as lower case character.", () => {
        const input = 'Rxnne';
        const alphabet = 'xoyqmcgrukswaflnthdjpzibev';
        const expected = 'happy';
        const actual = substitution(input, alphabet, false);
        expect(actual).to.equal(expected);
    })
    it("Should encode the message given", () => {
        const input = 'message';
        const alphabet = 'plmoknijbuhvygctfxrdzeswaq';
        const expected = 'ykrrpik';
        const actual = substitution(input, alphabet);
        expect(actual).to.equal(expected);
    })
})


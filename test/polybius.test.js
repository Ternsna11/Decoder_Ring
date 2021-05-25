// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect

describe('polybius()', () =>{
    it('should take inputs with any characters capitalized should be treated as lower case', () => {
        const input = 'Come On You Spurs';
        const expected = '31432351 4333 454354 3453542434';
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    })
    it('should take inputs with spaces when encoding and it should maintain the space in the result', () => {
        const input = 'come on you spurs';
        const expected = '31432351 4333 454354 3453542434';
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    })
    // it('should take inputs with spaces when decoding and it should maintain the space in the result', () => {
    //     const input = 'come on you spurs';
    //     const expected = '31432351 4333 454354 3453542434';
    //     const actual = polybius(input, false);
    //     expect(actual).to.equal(expected);
    // })
    it('If a word has a character i and or j the both return the value 42', () => {
        const input = 'high jinx';
        const expected = '32422232 42423335';
        const actual = polybius(input);
        expect(actual).to.equal(expected);
    })
    it('Should when decoding an input that has the number 42, i/j are returned', () => {
        const input = '32422232 42423335';
        const expected = 'h(i/j)gh (i/j)(i/j)nx';
        const actual = polybius(input, false);
        expect(actual).to.equal(expected);
    })
})

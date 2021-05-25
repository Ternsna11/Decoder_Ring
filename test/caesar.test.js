const {caesar} = require("../src/caesar");
const expect = require("chai").expect

// Write your tests here!
describe('caesar()', () =>{
    it('should return false if the shift amount is 0', () => {
        const input = 'happy';
        const shift = 0;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it('should return false if the shift amount is greater than 25', () => {
        const input = 'happy';
        const shift = 32;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it('should return false if the shift amount is less than -25', () => {
        const input = 'happy';
        const shift = -27;
        const expected = false;
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it('Spaces should be maintained throughout, as should other non-alphabetic symbols when results are returned', () => {
        const input = '#coys !!';
        const shift = 1;
        const expected = '#dpzt !!';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it('Inputs with any characters capitalized should be treated as lower case', () => {
        const input = 'Tottenham';
        const shift = 3;
        const expected = 'wrwwhqkdp';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it('If a shifted letter goes "off" the alphabet it should wrap around. ie a shift of 3 on z = c', () => {
        const input = 'zebra';
        const shift = 2;
        const expected = 'bgdtc';
        const actual = caesar(input, shift);
        expect(actual).to.equal(expected);
    })
})

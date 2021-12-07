import { isPrime } from "./prime.js";

describe("Testing isPrime()", () => {
    it("Should return true is a numner is prime", () => {
        expect(isPrime(7)).toBe(true);
        expect(isPrime(2)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(3)).toBe(true);
    });

    it("Should return false is a numner is negetive", () => {
        expect(isPrime(-7)).toBe(false);
        expect(isPrime(-2)).toBe(false);
        expect(isPrime(-1)).toBe(false);
        expect(isPrime(0)).toBe(false);
    });

    it("Should return false if a number is not a prime number", () => {
        expect(isPrime(4)).toBe(false);
        expect(isPrime(120)).toBe(false);
        expect(isPrime(66)).toBe(false);
    });

    it("Should throw an error is input is not a number", () => {
        expect(() => isPrime("8")).toThrow();
        expect(() => isPrime("fish")).toThrow();
        expect(() => isPrime([])).toThrow();
    });

    it("Should throw an error is input is a decimal", () => {
        expect(() => isPrime(8.3)).toThrow();
        expect(() => isPrime(4.6)).toThrow();
        expect(() => isPrime(66.88)).toThrow();
    });

    it("Should throw an error is input is NaN", () => {
        expect(() => isPrime(NaN)).toThrow();
    });

});

import { sum } from "./sum.js"

//Set up a group of tests
describe("Testing sum()", () => {
    //Set up individual test
    it("Should add two numbers together", () => {
        expect(sum(3,5)).toBe(8);
        expect(sum(2,40)).toBe(42);
        expect(sum(8000,-600)).toBe(7400);

    })
})
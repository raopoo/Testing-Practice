import { calculateRectangle } from "./area.js";

describe("Testing calculateRectangle()", () => {

    it("Should calculate area", () => {
        expect(calculateRectangle (7,7)).toBe(49);
        expect(calculateRectangle (5,7)).toBe(35);
        expect(calculateRectangle (12,5)).toBe(60);
    });

    it("Should throw an error if the inputs are not numbers(NaN)", () =>  {
        expect(() => calculateRectangle ("2", "lkj")).toThrow();
        expect(() => calculateRectangle ("fdsf", "5")).toThrow();
    });

    it("Should throw an error if the inputs are negative numbers", () => {
        expect(() => calculateRectangle (-3, 5)).toThrow();
        expect(() => calculateRectangle (-3, -5)).toThrow();
    })

    it("should assume it as a square if there is one valid number and other invalid", () =>{
        expect(calculateRectangle (7,undefined)).toBe(49);
        expect(calculateRectangle (2)).toBe(4);
    })

});

//empty strings
//numbers as strings- calculate like numbers
//empty strings

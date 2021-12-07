import { filterByLength } from "./arr.js"

describe("Testing filterByLength()", () => {
    it("Filter array for names less that 6 characters", () =>{
        expect(filterByLength(["pooja", "pratiti", "prashant"])).toEqual(["pooja"]);

    });

    it("Testing empty string", () => {
            expect(filterByLength([])).toBe("Sorry, no valid names supplied");
    })

    it("Testing numbers as input()", () =>{
        
        expect(filterByLength([2323,65656,"gdgfdgfdh","fdsgdsgdsg"])).toBe("Sorry, no valid names supplied");
    })
        // expect(filterByLength([])).toBe("Sorry, no valid names supplied");
        // expect(filterByLength(["","",""])).toBe("Sorry, no valid names supplied");
        // expect(filterByLength([2323,65656,"gdgfdgfdh","fdsgdsgdsg"])).toBe("Sorry, no valid names supplied");
    })

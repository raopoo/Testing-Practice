export const calculateRectangle = (x, y) => {
    if (typeof x === NaN || typeof y === NaN) throw new Error("calculateRectangle only accepts numbers");
    if(x <= 0) throw new Error("calculateRectangle accepts only numbers greater than 0");
    
};
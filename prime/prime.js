export const isPrime = (x) => {
    if (typeof x !== "number") throw new Error("isPrime only accepts numbers");
    if (Number.isNaN(x)) throw new Error("isPrime does not accept NaN");
    if (!Number.isInteger(x))
        throw new Error("isPrime only accepts whole numbers");

    for (let i = 2; i < x; i++) {
        if (x % i === 0) return false;
    }
    return x > 1;
};
/**
 * A function that takes and array, filters out names with more than 6 characters it and returns a new array
 * @param {array} names
 * @returns {array | string} array of valid names or a string "Sorry, no valid names supplied"
 */
 export const filterByLength = (names) => {
    const validNames = names.filter((name) => name.length <= 6);
    if (validNames[0]) {
        return validNames;
    } else {
        return "Sorry, no valid names supplied";
    }
};
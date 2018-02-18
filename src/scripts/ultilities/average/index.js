/**
 * @param {Array} a
 * @returns {Number | null}
 */

const average = (a) => {
    if (a.length) {
        const total = a.reduce((accumulator, currentValue) => accumulator + currentValue);
        return total / a.length;
    }

    return null;
};

export default average;

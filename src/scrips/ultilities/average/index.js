function average(a) {
    if (a.length) {
        const { length } = a;
        const total = a.reduce((accumulator, currentValue) => accumulator + currentValue);
        return total / length;
    }

    return undefined;
}

module.exports = average;

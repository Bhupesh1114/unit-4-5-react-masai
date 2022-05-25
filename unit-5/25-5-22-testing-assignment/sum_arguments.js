function sum(...args) {
    let total = args.reduce((a, b) => {
        return a + b;
    }, 0);
    return total;
}

module.exports = sum;
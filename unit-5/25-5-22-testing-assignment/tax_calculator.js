function taxCalculator(income) {
    if (income < 250000) {
        return "no tax";
    } else if (income >= 250000 && income < 500000) {
        return income * 0.1 + " rupees tax"; 
    } else if (income >= 500000 && income < 1000000) {
        return income * 0.2 + " rupees tax";
    } else {
        return income * 0.3 + " rupees tax";
    }
}

module.exports = taxCalculator;
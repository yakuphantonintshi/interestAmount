function calculateInterest(amount, percentage) {
    let percentageValue = parseFloat(percentage.replace('%', ''));
    let interestAmount = (amount * percentageValue) / 100;
    return interestAmount;
}
function calculateAndDisplay() {
    let amount = document.getElementById('amount').value;
    let percentage = document.getElementById('percentage').value;
    if (amount && percentage) {
        amount = parseFloat(amount);
        let result = calculateInterest(amount, percentage);
        document.getElementById('result').textContent = `Interest Amount: R${result.toFixed(2)}`;
    } else {
        document.getElementById('result').textContent = 'Please enter valid inputs.';
    }
}
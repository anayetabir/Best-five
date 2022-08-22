// Player Expenses
document.getElementById('btn-calculate').addEventListener('click', function () {

    const calculateField = document.getElementById('calculate-field');
    const newCalculateFieldString = calculateField.value;
    const newCalculateField = parseInt(newCalculateFieldString);

    const selectTotalElement = document.getElementById('total-added-player');
    const previousSelectTotalString = selectTotalElement.innerText;
    const previousSelectTotal = parseInt(previousSelectTotalString);

    const currentPlayerTotal = newCalculateField * previousSelectTotal;

    const calculateTotalElement = document.getElementById('player-total');
    calculateTotalElement.innerText = currentPlayerTotal;
})




// Total
document.getElementById('btn-totalCalculate').addEventListener('click', function () {

    const managerField = document.getElementById('manager-field');
    const newManagerFieldString = managerField.value;
    const newManagerField = parseInt(newManagerFieldString);

    const coachField = document.getElementById('coach-field');
    const newCoachFieldString = coachField.value;
    const newCoachField = parseInt(newCoachFieldString);

    const calculateTotalElement = document.getElementById('player-total');
    const newCalculateTotalElementString = calculateTotalElement.innerText;
    const newCalculateTotalElement = parseInt(newCalculateTotalElementString);


    const totalAmountAll = newManagerField + newCoachField + newCalculateTotalElement;

    const calculateTotalAmountAll = document.getElementById('total-amount');
    calculateTotalAmountAll.innerText = totalAmountAll;





})
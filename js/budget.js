document.getElementById('btn-calculate').addEventListener('click', function () {

    const calculateField = document.getElementById('calculate-field');
    const calculateFieldString = calculateField.value;
    // const previousCalculateField = parseInt(calculateFieldString);

    const playerTotalElement = document.getElementById('player-total');
    const playerTotal = playerTotalElement.innerText;
    playerTotalElement.innerText = calculateFieldString;  


})



document.getElementById('btn-totalCalculate').addEventListener('click',function(){

    console.log('button clicked');
})
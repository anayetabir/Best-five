const playerArray = [];

function playerSelection(element){

    // console.log(element.parentNode.children[1].innerText);

    const playerName = element.parentNode.children[1].innerText;
    playerArray.push(playerName);
    console.log(playerArray);
}
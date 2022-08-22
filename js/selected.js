const playerArray = [];

function playerList(playerArray) {
    console.log(playerArray);
    const tableBody = document.getElementById('player-name');
    tableBody.innerHTML = "";

    for (let i = 0; i < playerArray.length; i++) {

        if (i > 4) {
            alert("Limit Over");
            break;
        }

        const name = playerArray[i].playerName;
        const tr = document.createElement('tr');
        tr.innerHTML =
            `
        <th>${i + 1}</th>
        <td>${name}</td>
        
        `;
        tableBody.appendChild(tr);
    }

}



function playerSelection(element) {

    const playerName = element.parentNode.children[1].innerText;

    const playerObj = {
        playerName: playerName,
    }

    playerArray.push(playerObj);

    document.getElementById("total-added-player").innerText = playerArray.length;

    playerList(playerArray);
}
var PlayerHP = document.getElementById('playerHP');
var ComputerHP = document.getElementById('computerHP');

var PlayerHP = 160;
var ComputerHP = 130;




function pickElement(pickedElement) {
    console.log('PickElement ' + pickedElement)
    if (pickedElement === 'ground'
    || pickedElement === 'electric' 
    || pickedElement === 'water') {
        var computerChoise = Math.floor(Math.random() * 9 + 1);
        console.log('ComputerChoice ' + computerChoise);
        computerChoise <= 3 
        ? computerChoise = 'ground' :
        computerChoise >= 4 && computerChoise <= 6 
        ? computerChoise = 'electric' 
        : computerChoise = 'water';
        console.log('ComputerChoice ' + computerChoise);
    }
    
     result =
    pickedElement === computerChoise
    ? "Tie Game!"
    : pickedElement === "ground" && computerChoise === "water"
    ? `<div  >Player picked:<div style="color: red;" > ${pickedElement}.</div>Computer picked ${computerChoise}. Opponent Wins!</div>`

    : pickedElement === "water" && computerChoise === "electric"
    ? `Player picked: ${pickedElement}. Computer picked: ${computerChoise}. Opponent Wins!`

    : pickedElement === "electric" && computerChoise === "ground"
    ? `Player picked: ${pickedElement}. Computer picked: ${computerChoise}. Opponent Wins!`

    : `Player picked: ${pickedElement}. Computer picked: ${computerChoise}. You Win!`
    console.log(result);
    render();
}

// function textColor(pickedElement) {
//     console.log(pickedElement, 'i bytt farge');
//     if(pickedElement === "ground") {
    

//         document.body.style.color = "red";
//     }
 
// }


// if(pickedElement == 'ground'){
//     result = `Player picked: <div style="color: red;" > ${pickedElement}</div>`
//     if(pickedElement == 'ground' && comp == 'water'){
//         result += `Computer picked ${comp}. Opponent Wins!`
//     }
//     if(pickedElement == 'ground' && comp == 'electric'){
//         result += `Computer picked ${comp}. You Win!`
//     }
//     else result += `Draw`
// }
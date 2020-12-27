const gameDIV = document.getElementById("game");
const imgSrc = '/static/img/';
const height = 120;
const width = 90;

function addCardOnScreen(){
    /* Create a new span, then give it a class name that equals
    the card### pattern */

    const newSpan = document.createElement("span");

    newSpan.className = `card${window.user.card[window.user.card.length - 1]}`;
    gameDIV.appendChild(newSpan);

    const card_Input = document.createElement("input");

    card_Input.id = window.user.card[window.user.card.length - 1];
    card_Input.type = "image";
    card_Input.src = imgSrc.concat(`${card_Input.id}.jpeg`);
    card_Input.className = "clickCard";
    card_Input.height = height;
    card_Input.width = width;
    newSpan.appendChild(card_Input)
    newSpan.appendChild(card_Input);
}

function removeCardOnScreen(id){
    let spanToRemove = document.getElementsByClassName(`${id}`);
    spanToRemove.remove();
}

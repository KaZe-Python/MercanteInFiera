const gameDIV = document.getElementById("game");
const imgSrc = '/static/img/';
const height = 120;
const width = 90;

function addCardOnScreen(){
    const newSpan = document.createElement("span");
    newSpan.className = `card${window.user.card[window.user.card.length - 1]}`;
    const card_Input = document.createElement("input");
    card_Input.id = window.user.card[window.user.card.length - 1];
    card_Input.type = "image";
    card_Input.src = imgSrc.concat(`${card_Input.id}.jpeg`)
    card_Input.height = height;
    card_Input.width = width;
}

function removeCardOnScreen(id){
    let spanToRemove = document.getElementsByClassName(`${id}`);
    spanToRemove.remove();
}
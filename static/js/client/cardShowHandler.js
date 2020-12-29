const gameDIV = document.getElementById("game");
const imgSrc = '/static/img/';
const height = 120;
const width = 90;

function addCardOnScreen(){
    /* Create a new span, then give it a class name that equals
    the card### pattern */
    let localCardArray = window.user.card.split(",");
    const newSpan = document.createElement("span");

    newSpan.className = `card${localCardArray.slice(-1).pop()}`;
    gameDIV.appendChild(newSpan);

    const card_Input = document.createElement("input");

    card_Input.id = localCardArray.slice(-1).pop();
    card_Input.type = "image";
    card_Input.src = imgSrc.concat(`${card_Input.id}.jpeg`);
    card_Input.className = "clickCard";
    card_Input.height = height;
    card_Input.width = width;
    newSpan.appendChild(card_Input);
}

function removeCardFromScreen(id){
    let spanToRemove = document.getElementsByClassName(`card${id}`)[0];
    let localCardArray = window.user.card.split(",");
    console.log(id)
    spanToRemove.remove();
    const i = localCardArray.indexOf(id);
    if(i > -1)
	localCardArray.splice(i,1);
    window.user.card = localCardArray.toString()
    
}

function addSpecCardOnScreen(e){
	let localCardArray = window.user.card.split(",");
	const newSpan = document.createElement("span");
	newSpan.className = `card${e}`;
	gameDIV.appendChild(newSpan);
	const card_Input = document.createElement("input");
	card_Input.id = e;
	card_Input.type = "image";
	card_Input.src = imgSrc.concat(`${e}.jpeg`);
	card_Input.className = "clickCard";
	card_Input.height = height;
	card_Input.width = width;
	newSpan.appendChild(card_Input);
	localCardArray.push(e);
	window.user.card = localCardArray.toString();

}

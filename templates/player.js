let textValues = {};
function processForm(form){
    let inputs = form.getElementsByTagName("input");
    for(let x = 0; x < inputs.length; x++){
        if(inputs[x].type != "text"){
            continue;
        }
        textValues[inputs[x].name] = inputs[x].value;
    }
    checkUser();
}

function checkUser(){
    let req = new XMLHttpRequest();
    let url = "http://127.0.0.1:5000/api/User"
    let name = document.getElementById('fname').val
    req.open("POST", url);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify(textValues));
}
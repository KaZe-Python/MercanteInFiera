let textValues = {};
let json_Response;
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
    req.onreadystatechange = function(){
        if(req.readyState == XMLHttpRequest.DONE){
            if(json_Response !== req.responseText){
                json_Response = req.responseText;
            }else{}
        }
    }
    req.open("POST", url);
    req.responseType("json");
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify(textValues));
}

function hypotetical(){
    //Call this one
}

window.setInterval(checkUser,5000);
/* I have to decide how
    to let it works */
let result;
let users = Array();
window.addEventListener('load', function(){

});

setInterval(function(){
    fetch('http://127.0.0.1:5000/api/User')
        .then(response => response.json())
        .then(data => result = data);
        users.push(result.data);
        users.forEach(function(v,i,a){
            v.forEach(function(v_v,i_v,a_v){
                v_v.forEach(function(x,y,z){
                    card = x;
                })
            })
        });
        /*
    result.items.forEach(function(value, index, array){
        console.log(value);
    })*/

},10000);
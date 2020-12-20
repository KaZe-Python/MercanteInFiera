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
        try {
            users.push(result.data);
            users.forEach(function(v,i,a){
            v.forEach(function(a,x,y){
                let user_ = y[x];
                if(user_.id === window.user.id){
                   if(user_.card !== window.user.card){
                       let cardArray = user_.card.split(",");
                       window.user.card = cardArray;
                   }else{
                       ;
                   }
                }else{
                    ;
                }
            })
        });
        } catch (error) {
            console.log("An error occured, wait 10 sec and the func will run again successfully")
        }
        /*
    result.items.forEach(function(value, index, array){
        console.log(value);
    })*/

},10000);
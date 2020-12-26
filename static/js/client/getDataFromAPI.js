let result;
let users = Array();

setInterval(function(){
    fetch(window.user_api_url)
        .then(response => response.json())
        .then(data => result = data);
        try {
            users.push(result.data);
            users.forEach(function(v){
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
},5000);

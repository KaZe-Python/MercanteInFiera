let result;
let users = Array();

setInterval(function(){
    fetch(window.user_api_url)
        .then(response => response.json())
        .then(data => result = data);
        try {
	    if(users !== null){
		    users = Array();
	    }
            users.push(result.data);
            users.forEach(function(v){
                v.forEach(function(a,x,y){
                    let user_ = y[x];
                    if(user_.id === window.user.id){
                    if(user_.card !== window.user.card){
                        let cardArray = user_.card.split(",");
                        window.user.card = cardArray;
			console.log(window.user.card)
			addCardOnScreen();
                    }else{
                        console.log(window.user.card)
                    }
                    }else{
			//console.log(users);
                    }
                })
            });
        } catch (error) {
            //console.log("An error occured, wait 10 sec and the func will run again successfully")
	    console.log("Error: ", error)
        }
},5000);

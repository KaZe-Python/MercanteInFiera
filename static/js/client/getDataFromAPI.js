let result;
let users = Array();

function sleep(mil){
	const date = Date.now();
	let currentDate = null;
	do{
		currentDate = Date.now();
	}while (currentDate - date < mil);
}

setInterval(function(){
    fetch(window.user_api_url)
        .then(response => response.json())
        .then(data => result = data);
        try {
	    const anyCard = document.getElementById("");
	    if(users !== null){
		    users = Array();
	    }
            users.push(result.data);
            users.forEach(function(v){
                v.forEach(function(a,x,y){
                    let user_ = y[x];
                    if(user_.id === window.user.id){
			    sleep(300);
                    if(user_.card !== window.user.card){
                        let cardArray = user_.card.split(",");
                        window.user.card = cardArray;
			addCardOnScreen();
                    }else{
			console.log("No card changes were made")
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

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
		    let cardArray = user_.card.split(",");
		    cardArray = (cardArray.length === 1 && cardArray[0] === "") ? Array() : cardArray;
		    let lCardArray = window.user.card.split(",");
		    lCardArray = (lCardArray.length === 1 && lCardArray[0] === "") ? Array() : lCardArray;
                    if(user_.id === window.user.id){
			    sleep(300);/*
			    let slCardArray = lCardArray.slice().sort();
			    let diff = cardArray.length === lCardArray.lenght && cardArray.slice().sort().every((val, ind) => val === slCardArray[ind])*/
			    let areEquals = cardArray.length === lCardArray.length && cardArray.slice().sort().every(function(v,i){ return v === lCardArray.slice().sort()[i]; })
			    console.log(areEquals)
			    console.log(cardArray)
			    console.log(lCardArray)
                    	if(!areEquals){
				if(cardArray.length < 1){
					if(lCardArray.length < 1){
						;
					}else{

						for(let i = 0; i<40; i--){
							if(document.getElementsByClassName(i.toString())[0] !== null){
								removeCardFromScreen(i.toString());
							}else{
								continue;
							}
								continue;
						}
					}
				}else if(cardArray.length < lCardArray.length){
						let cardToRemove = lCardArray.filter(function(v){
							return cardArray.indexOf(v) == -1;
						});

						cardToRemove.forEach(function(v){
							removeCardFromScreen(v);
						});
				}else if(cardArray.length > lCardArray.length){
					cardArray.forEach(function(v){
						let isInLocal = lCardArray.includes(v);
						if(isInLocal){
							;
						}else{
							addSpecCardOnScreen(v);
						}
					});
				}
		    	}else{
				lCardArray.forEach(function(v){
					let bol = document.getElementsByClassName(`card${v}`);
					if(typeof(bol[0]) !== 'undefined'){
						if(bol.length > 1){
							for(let i = 0; i<=bol.length-1; i++)
								removeCardFromScreen(v);
						}else{
							;
						}
					}else{
						addSpecCardOnScreen(v);
					}
				})
                    	}
                    }else{
			//console.log(users);
                    }
                });
            });
        } catch (error) {
            //console.log("An error occured, wait 10 sec and the func will run again successfully")
	    console.log("Error: ", error)
        }
},10000);

function dealCardToPlayers(){
    let cardsToBeDealt = Array();
    let cardsAlrdDealt = Array();
    let __var__ = Array();
    let result;
    let n;
    fetch(window.user_api_url)
        .then(response => response.json())
        .then(data => result = data);
        try{
            __var__.push(result.data);
            __var__.forEach(function(val){
                val.forEach(function(v,i,a){
                    let __user__ = a[i];
                    let temp = __user__.card.split(",");
                    if(temp){
                        temp.forEach(function(v){
                            if(v !== ","){
                                cardsAlrdDealt.push(v);
                            }else{
                                ;
                            }
                        })
                    }else{
                        ;
                    }
                })
            });
            for(let i; i<__var__.length; i++){
                n = Math.floor(Math.random() * 41);
                if(n in cardsAlrdDealt){
                    continue;
                }else{
                    cardsToBeDealt.push(n);
                }
            }
        }catch(error){
            ;
        }
}

function dealBadCardToPlayers(){

}

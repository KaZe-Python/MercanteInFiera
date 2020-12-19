window.addEventListener('load', function(){
    /*
    function GetRequestAPI(){
        let cardButton = document.getElementsByClassName("img_btn");
        let response;
        cardButton.addEventListener('click', async function(e){
            e.preventDefault();
            await fetch('http://127.0.0.1:5000/api/User')
                .then(response => response.json())
                .then(json => response);
        });
        console.log(response);
    }
    GetRequestAPI();*/
    function GetRequestAPI(){
        let cards = document.getElementsByClassName('card');
        for (let i = 0, len = cards.length; i < len; i++){
            cards[i].onclick = function(){
                confirm("Card Clicked");
            }
        }
    }
    GetRequestAPI();
});

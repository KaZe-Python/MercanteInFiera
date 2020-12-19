window.addEventListener('load', function(){
    function GetRequestAPI(){
        let cards = document.getElementsByClassName('card');
        for (let i = 0, len = cards.length; i < len; i++){
            cards[i].onclick = function(){
                console.log("Card Clicked")
            }
        }
    }
    GetRequestAPI();
});

window.addEventListener('load', function(){
    function checkCardClicked(){
        let cards = document.getElementsByClassName('clickCard');
        for (let i = 0, len = cards.length; i < len; i++){
            cards[i].onclick = function(){
		    console.log("Card Clicked")
            }
        }
    }
    checkCardClicked();
});

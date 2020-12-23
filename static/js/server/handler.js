window.addEventListener('load', function(){
    const buttonDeal = document.getElementsByName('deal');
    const buttonDealB = document.getElementsByName('dealb');
    buttonDeal.addEventListener('click',function(e){
        e.preventDefault();
        dealCardToPlayers();
    });
    buttonDealB.addEventListener('click',function(e){
        e.preventDefault();
        dealBadCardToPlayers();
    })

});
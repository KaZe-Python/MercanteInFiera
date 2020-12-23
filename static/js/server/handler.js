window.addEventListener('load', function(){
    const buttonDeal = document.getElementsByName('deal');
    const buttonDealB = document.getElementsByName('dealb');
    buttonDeal.addEventListener('click', async function(e){
        e.preventDefault();
        await dealCardToPlayers();
    });
    buttonDealB.addEventListener('click', async function(e){
        e.preventDefault();
        await dealBadCardToPlayers();
    })

});
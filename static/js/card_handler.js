window.addEventListener('load', function(){
    function GetRequestAPI(){
        let cardButton = document.getElementById("close-CSS");
        let response;
        cardButton.addEventListener('click', async function(e){
            e.preventDefault();
            await fetch('http://127.0.0.1:5000/api/User')
                .then(response => response.json())
                .then(json => response);
        });
        console.log(response);
    }
    GetRequestAPI();
});

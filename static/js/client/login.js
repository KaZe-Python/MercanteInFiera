/* Makes a post request to my API
    if the user exist, the code is 400 
    and I'll now that I should check which
    card the player has, else if the user
    doesn't exist the backend will make
    the user without any cards */
    
window.addEventListener('load', function(){
    function PostRequestAPI(){
        const thisForm = document.getElementById('form');
        thisForm.addEventListener('submit', async function(e){
            e.preventDefault();
            const formData = new FormData(thisForm).entries();
            const response = await fetch('http://127.0.0.1:5000/api/User',{
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData))
            });
            const result = await response.json();
            const user = JSON.parse(result.user);
            if(user){
                let div = document.getElementById('loginform');
                if(div.className === "show"){
                    div.className = "hidden";
                }else{
                    ;
                }
            }
            console.log(user)
            window.user = user;
        });
    }
    PostRequestAPI();
    
});

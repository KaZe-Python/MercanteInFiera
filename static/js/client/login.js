/* Makes a post request to my API
    if the user exist, the code is 400 
    and I'll now that I should check which
    card the player has, else if the user
    doesn't exist the backend will make
    the user without any cards */
window.addEventListener('load', function(){
    window.user_api_url = "http://192.168.1.5:5000/api/User"
    function PostRequestAPI(){
	const thisForm = document.getElementById('form');
        thisForm.addEventListener('submit', async function(e){
            e.preventDefault();
            const formData = new FormData(thisForm).entries();
            const response = await fetch(window.user_api_url,{
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

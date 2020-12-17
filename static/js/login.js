window.addEventListener('load', function(){
    function fetchDataFromAPI(){
        const thisForm = document.getElementById('form');
        thisForm.addEventListener('submit', async function(e){
            e.preventDefault();
            const formData = new FormData(thisForm).entries();
            const response = await fetch('http://127.0.0.1:5000/api/User',{
                method: 'POST',
                body: JSON.stringify(Object.fromEntries(formData))
            });
            const result = await response.json();
            console.log(result)
        });
    }
    
});

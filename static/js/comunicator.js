$(document).ready(function(){
    $('.button').click(function(){
        $.ajax({
            type:"POST",
            url: "http://localhost:5000/static/php/handler.php",
            data: {'action': $(this).val()}
        }).done(function(){
            alert("No Error");
        });
    });
});
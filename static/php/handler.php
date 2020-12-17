<?php
    $url_api = "http://127.0.0.1/api/User";

    if(isset($_POST['action'])){
        switch($_POST['action']){
            case 'deal':
                dealCard();
                break;
            case 'dealb':
                dealBadCard();
                break;
            case 'mP':
                makePrizes();
                break;
        }
    }

    

    function generateNumbers($min, $max, $quant){
        $numbers = range($min, $max);
        shuffle($numbers);
        return array_slice($numbers, 0, $quant);
    }

    function retriveData(){
    }

    function dealCard(){

    }

    function dealBadCard(){

    }

    function makePrizes(){

    }

?>
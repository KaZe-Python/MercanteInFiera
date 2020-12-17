<?php
    $url_api = "http://127.0.0.1/api/User";
    function generateNumbers($min, $max, $quant){
        $numbers = range($min, $max);
        shuffle($numbers);
        return array_slice($numbers, 0, $quant);
    }

    function retriveData(){
    }

?>
<?php

function is_palindrome($input) {
    $invertida = strrev($input);
    $ispal = false;
    if($input == $invertida){
        $ispal = true;
    }
    return true;
}

$input = "Allí por la tropa portado, traído a ese paraje de maniobras, una tipa como capitán usar boina me dejara, pese a odiar toda tropa por tal ropilla";
var_dump(is_palindrome($input));

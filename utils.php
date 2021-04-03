<?php

function messageException(Exception $e){
    $error = explode(":", $e->getMessage());
    echo substr($error[2], 6);
}
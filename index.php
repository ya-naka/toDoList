<?php
session_start();
require("config.php");
require("db_connect.php");

function uri($path){
    global $config;
    return $config["uri_prefix"].$path;
}

$requestURI = explode("?", $_SERVER["REQUEST_URI"]);
$requestURI = substr($requestURI[0], strlen($config["uri_prefix"]));
//$handler = $routes[$requestURI];

//if(!isset($handler)){
if(!isset($routes[$requestURI])){
    require("{$routes['/page_not_found']}.php");
    //$handler = $routes["/page_not_found"];
}else{
    require("{$routes[$requestURI]}.php");
}

//require("$handler.php");
//require("handlers/$handler.php");
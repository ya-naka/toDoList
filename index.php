<?php
session_start();
require("utils.php");
require("config.php");
require("db_connect.php");

function uri($path){
    global $config;
    return $config["uri_prefix"].$path;
}

function render($view, $data){
    extract($data);
    ob_start();
    require("views/$view.php");
    $content = ob_get_contents();
    ob_end_clean();
    require("views/layout.php");
}

$requestURI = explode("?", $_SERVER["REQUEST_URI"]);
$requestURI = substr($requestURI[0], strlen($config["uri_prefix"]));

if(!isset($routes[$requestURI])){
    $handler = $routes["/error"];
}else{
    $handler = $routes[$requestURI];
}

require("handlers/$handler.php");
<?php
$config["uri_prefix"] = "/ProjetTuteure";

$config["db_host"] = "localhost";
$config["db_name"] = ""; //A DEFINIR
$config["db_port"] = "3306";
$config["db_user"] = "root";
$config["db_password"] = "";

$routes = array(
    "/" => "signin",
    "/signin" => "signin",
    "/signout" => "signout",
    "/signup" => "signup",
    "/page_not_found" => "page_not_found",
);
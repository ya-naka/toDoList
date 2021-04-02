<?php
$config["uri_prefix"] = "/ProjetTuteure";

$config["db_host"] = "localhost";
$config["db_name"] = "toDoList";
$config["db_port"] = "3306";
$config["db_user"] = "root";
$config["db_password"] = "";

$routes = [
    "/" => "home",
    "/home" => "home",
    "/signin" => "signin",
    "/verify_user" => "verify_user",
    "/signout" => "signout",
    "/signup" => "signup",
    "/forgot_password" => "forgot_password",
    "/settings" => "settings",
    "/add_list" => "add_list",
    "/add_task" => "add_task",
    "/add_step" => "add_step",
    "/add_user" => "add_user",
    "/delete_step" => "delete_step",
    "/delete_task" => "delete_task",
    "/delete_list" => "delete_list",
    "/update_mail" => "update_mail",
    "/update_password" => "update_password",
    "/get_lists" => "get_lists",
    "/get_tasks" => "get_tasks",
    "/get_steps" => "get_steps",
    "/error" => "error",
];
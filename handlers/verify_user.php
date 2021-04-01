<?php

if(!isset($_POST["email"]) || !isset($_POST["password"])){
    $message = "remplir tous les champs";
    goto relocation;
}

$request = $db->prepare("SELECT * FROM users WHERE Email=?");
$request->execute([$_POST["email"]]);
$user = $request->fetch();

if (!$user){
    $message = "user inconnu";
    goto relocation;
}

$ok = password_verify($_POST["password"], $user["Password"]);

if(!$ok){
    $message = "mauvais mdp";
    goto relocation;
}

$_SESSION["user"] = $user;
$message = "OK";

relocation:

header("Content-Type: application/json; charset=UTF-8");
echo json_encode("");

//header("Location: ".uri("/signin"));
//exit;
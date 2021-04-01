<?php

if(!isset($_POST["email"]) || !isset($_POST["password"]) || !isset($_POST["password_conf"])){
    $error = "veuillez remplir tous les champs";
    goto relocation;
}

if($_POST["password"] !== $_POST["password_conf"]){
    $error = "les mdp ne correspondent pas";
    goto relocation;
}

$password = password_hash($_POST["password"], PASSWORD_BCRYPT);

try{
    $request = $db->prepare("CALL InsertUser(?,?)");
    $request->execute([$_POST["email"], $password]);
    $error = "none";
}catch(Exception $e){
    //ajouter une requête pour savoir si l'email existe déjà dans la base
    $error = "erreur lors de la création du compte";
}

relocation:
header("Location:".uri("/signup?error=$error"));
exit;
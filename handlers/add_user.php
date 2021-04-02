<?php

if(!isset($_POST["email"]) || !isset($_POST["password"]) || !isset($_POST["password_conf"])){
    $message = "veuillez remplir tous les champs";
    goto relocation;
}

if($_POST["password"] !== $_POST["password_conf"]){
    $message = "les mdp ne correspondent pas";
    goto relocation;
}

$password = password_hash($_POST["password"], PASSWORD_BCRYPT);

try{
    $request = $db->prepare("CALL InsertUser(?,?)");
    $request->execute([$_POST["email"], $password]);
    $message = "none";
}catch(Exception $e){
    $request = $db->prepare("SELECT Email FROM users WHERE Email=?");
    $request->execute([$_POST["email"]]);
    $email = $request->fetch();
    var_dump($email);
    if($email !== null){
        $message = "Cet email est deja utilise";
    }else{
        $message = "erreur lors de la creation du compte";
    }
}

$message = "Votre compte a bien été cree et un email de confirmation vous a ete envoye";

relocation:
header("Content-Type: application/json; charset=UTF-8");
echo json_encode([
    "message" => $message,
]);
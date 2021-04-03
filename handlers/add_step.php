<?php
header("Content-Type: application/json; charset=UTF-8");
//ajouter un trigger ifTitleIsNull dans la base 
if(!isset($_GET["Title"]) || strlen($_GET["Title"]) === 0){
    echo json_encode(["message" => "veuillez saisir un titre"]);
    exit;
}

$title = substr($_GET["Title"], 0, $parameters["Title"]);
$description = !isset($_GET["Description"]) ? "" : $_GET["Description"];
$description = substr($description, 0, $parameters["Description"]);

$request = $db->prepare("CALL InsertList(?,?,?)");
$request->execute([$_SESSION["user"]["IdUser"],$_GET["Title"], $description]);
$verify_request = $request->rowCount();

if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de l'ajout de la liste dans la base de donnees"]);
    exit;
}

echo json_encode(["message" => "La liste a bien ete ajoutee"]);
exit;
<?php
if(!isset($_GET["IdList"])){
    echo json_encode(["message" => "Liste introuvable"]);
    exit;
}
if(!isset($_GET["Title"]) || !isset($_GET["Deadline"])){
    echo json_encode(["message" => "veuillez saisir tous les champs"]);
    exit;
}

$deadlineDate=date_create($_GET["Deadline"]);
if(!$deadlineDate){
    echo json_encode(["message" => "veuillez choisir une date valide"]);
    exit;
}

$title = substr($_GET["Title"], 0, $parameters["Title"]);
$description = !isset($_GET["Description"]) ? "" : substr($_GET["Description"], 0, $parameters["Description"]);
try{
    $request = $db->prepare("CALL InsertTask(?,?,?,?)");
    $request->execute([$_GET["IdList"], $title, $description, date_format($deadlineDate, "Y-m-d")]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}
$verify_request = $request->rowCount();

if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de l'ajout de la tache dans la base de donnees"]);
    exit;
}

echo json_encode(["message" => "La tache a bien ete ajoutee"]);
exit;
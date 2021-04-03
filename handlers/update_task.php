<?php
if(!isset($_GET["IdTask"])){
    echo json_encode(["message" => "Tache introuvable"]);
    exit;
}

if(!isset($_GET["Title"]) && !isset($_GET["Description"]) && !isset($_GET["Deadline"])){
    echo json_encode(["message" => "veuillez modifier au moins un champ"]);
    exit;
}

$title = !isset($_GET["Title"]) ? "" : substr($_GET["Title"], 0, $parameters["Title"]);
$description = !isset($_GET["Description"]) ? "" : substr($_GET["Description"], 0, $parameters["Description"]);
$deadlineDate=date_create($_GET["Deadline"]);
if(!$deadlineDate){
    echo json_encode(["message" => "veuillez choisir une date valide"]);
    exit;
}

try{
    $request = $db->prepare("CALL setTitleTask(?,?,?)");
    $request->execute([$_GET["IdTask"], $title, $description, date_format($deadlineDate, "Y-m-d")]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

$verify_request = $request->rowCount();
if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de la modification de la liste"]);
    exit;
}

echo json_encode(["message" => "La liste a bien ete modifiee"]);
exit;
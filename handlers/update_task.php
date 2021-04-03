<?php

header("Content-Type: application/json; charset=UTF-8");
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
if(!isset($_GET["Deadline"]) || sizeof($_GET["Deadline"]) === 0){
    $deadlineDate = null;
}else{
    $date= !isset($_GET["Deadline"]) ? "" : date_create($_GET["Deadline"]);
    if(!$deadlineDate){
        echo json_encode(["message" => "veuillez choisir une date valide"]);
        exit;
    }
    $deadlineDate = date_format($deadlineDate, "Y-m-d");
}

try{
    $request = $db->prepare("CALL setTask(?,?,?,?)");
    $request->execute([$_GET["IdTask"], $title, $description, $deadlineDate]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

echo json_encode(["message" => "La tache a bien ete modifiee"]);
exit;
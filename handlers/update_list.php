<?php

header("Content-Type: application/json; charset=UTF-8");
if(!isset($_GET["IdList"])){
    echo json_encode(["message" => "Liste introuvable"]);
    exit;
}

if(!isset($_GET["Title"]) && !isset($_GET["Description"])){
    echo json_encode(["message" => "veuillez modifier au moins un champ"]);
    exit;
}

$title = !isset($_GET["Title"]) ? "" : substr($_GET["Title"], 0, $parameters["Title"]);
$description = !isset($_GET["Description"]) ? "" : substr($_GET["Description"], 0, $parameters["Description"]);

try{
    $request = $db->prepare("CALL setList(?,?,?)");
    $request->execute([$_GET["IdList"],$title, $description]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

echo json_encode(["message" => "La liste a bien ete modifiee"]);
exit;

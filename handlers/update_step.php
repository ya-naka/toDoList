<?php

header("Content-Type: application/json; charset=UTF-8");
if(!isset($_GET["IdStep"])){
    echo json_encode(["message" => "Etape introuvable"]);
    exit;
}

if(!isset($_GET["Title"]) && !isset($_GET["Description"]) && !isset($_GET["Checked"])){
    echo json_encode(["message" => "veuillez modifier au moins un champ"]);
    exit;
}

$title = !isset($_GET["Title"]) ? "" : substr($_GET["Title"], 0, $parameters["Title"]);
$description = !isset($_GET["Description"]) ? "" : substr($_GET["Description"], 0, $parameters["Description"]);
$checked = !isset($_GET["Checked"]) ? "" : substr($_GET["Checked"], 0, $parameters["Checked"]);

try{
    $request = $db->prepare("CALL setStep(?,?,?)");
    $request->execute([$_GET["IdStep"],$title, $description]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

echo json_encode(["message" => "L'etape a bien ete modifiee"]);
exit;

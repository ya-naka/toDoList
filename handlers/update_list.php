<?php
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
    $request = $db->prepare("CALL setTitleList(?,?, ?)");
    $request->execute([$_GET["IdList"],$title, $description]);
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

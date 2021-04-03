<?php
if(!isset($_GET["IdStep"])){
    echo json_encode([
        "message" => "Etape introuvable",
    ]);
    exit;
}

try{
    $request = $db->prepare("CALL deleteStep(?)");
    $request->execute([$_GET["IdStep"]]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

$verify_request = $request->rowCount();
if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de la suppression de l'etape"]);
    exit;
}

echo json_encode(["message" => "L'etape a bien ete supprimee"]);
exit;
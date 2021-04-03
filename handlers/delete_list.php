<?php
if(!isset($_GET["IdList"])){
    echo json_encode([
        "message" => "Liste introuvable",
    ]);
    exit;
}

try{
    $request = $db->prepare("CALL deleteList(?)");
    $request->execute([$_GET["IdList"]]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

$verify_request = $request->rowCount();
if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de la suppression de la liste"]);
    exit;
}

echo json_encode(["message" => "La liste a bien ete supprimee"]);
exit;
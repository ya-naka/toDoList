<?php
if(!isset($_GET["IdUser"])){
    echo json_encode([
        "message" => "Utilisateur introuvable",
    ]);
    exit;
}

try{
    $request = $db->prepare("CALL deleteUser(?)");
    $request->execute([$_GET["IdUser"]]);
}catch(Exception $e){
    echo json_encode(["message" => messageException($e)]);
    exit;
}

$verify_request = $request->rowCount();
if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de la suppression de l'utilisateur"]);
    exit;
}

echo json_encode(["message" => "L'utilisateur a bien ete supprime"]);
exit;
<?php
header("Content-Type: application/json; charset=UTF-8");

//ajouter un trigger ifTitleIsNull dans la base 
if(!isset($_GET["Title"]) || !isset($_GET["IdList"]) || !isset($_GET["Deadline"])){
    echo json_encode(["message" => "veuillez saisir un titre"]);
    exit;
}

$deadlineDate=date_create($_GET["Deadline"]);
if(!$deadlineDate){
    echo json_encode(["message" => "veuillez choisir une date valide"]);
    exit;
}else{
    //echo date_format($deadlineDate,"Y-m-d");
}

if(date_format($deadlineDate,"Y-m-d") < date("Y-m-d")){
    echo json_encode(["message" => "la tache ne peut etre termine avant sa date de creation"]);
    exit;
}

$title = substr($_GET["Title"], 0, $parameters["Title"]);
$description = !isset($_GET["Description"]) ? "" : substr($_GET["Description"], 0, $parameters["Description"]);
try{
    $request = $db->prepare("CALL InsertTask(?,?,?,?)");
    $request->execute([$_GET["IdList"], $title, $description, date_format($deadlineDate,"Y-m-d")]);
}catch(Exception $e){
    echo $e->getMessage();
    echo json_encode(["message" => "erreur lors de l'ajout de la tache dans la base de donnees"]);
    exit;
}
$verify_request = $request->rowCount();

if($verify_request <= 0){
    echo json_encode(["message" => "erreur lors de l'ajout de la tache dans la base de donnees"]);
    exit;
}

echo json_encode(["message" => "La tache a bien ete ajoutee"]);
exit;
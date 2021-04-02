<?php

if(!isset($_GET["email"])){
    echo json_encode(["message" => "utilisateur inconnu"]);
    exit;
}

$request = $db->prepare("SELECT getUserLists(getUserId(?))");
$request->execute([$_GET["email"]]);
$lists = $request->fetch();
var_dump($lists);

if(!$lists[0]){
    echo json_encode(["message" => "Vous n'avez pas encore cree de liste"]);
    exit;
}

$list = explode("£", $lists[0]);
for($i = 0; $i < sizeof($list); $i++){
    $list[$i] = explode("¤", $list[$i]);
    $list[$i] = [
        "IdList" => $list[$i][0],
        "Title" => $list[$i][1],
        "Description" => $list[$i][2],
        "CreatedDate" => $list[$i][3],
    ];
}


//$message = "";

relocation:
echo json_encode([
    "lists" => $list,
    "message" => $message,
]);
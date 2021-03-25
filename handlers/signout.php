<?php
$_SESSION = array();
session_destroy();
header("Location: ".uri("/signin?message=Vous avez bien été déconnecté"));
exit;
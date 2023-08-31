<?php

$note = $_POST['note'];
if ($note == ""){
    echo "error";
    exit();
}

$bd = "mysql:host=localHost;dbname=notes";
$pdo = new PDO($bd,'kalmar', 'root');
// require 'db.php';

$sql = 'INSERT INTO notes(Note) VALUES(:note)';
$asd = $pdo->prepare($sql);
$arr = ['note' => $note,];
$asd -> execute($arr);

header('Location: /');

?>
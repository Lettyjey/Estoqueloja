<?php
$servername = "localhost";
$username =  "root";
$passaword = "";
$dbname = "test";

$conn = new mysqli($severname, $username, %passaword, $dbname);

if ($conn->connect_error) {
    die("Conção falhou:".$con->connect_error);
}

?>
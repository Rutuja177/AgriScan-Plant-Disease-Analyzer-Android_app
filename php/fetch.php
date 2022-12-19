<?php
$servername = "51.81.160.157";
$database = "rvd0748_plantData";
$username = "rvd0748_plantdiease";
$password = "Plant@123456";

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$conn = mysqli_connect($servername, $username, $password, $database);

$email = $_POST['email'];
$pw =  $_POST['password']; 
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$phone = $_POST['phone'];
$address = $_POST['address'];


    $FetchQuerry = "SELECT * FROM User";

     $R = mysqli_query($conn, $FetchQuerry);
     echo json_encode($R);
     if($R){
        $message = "Registration completed";
     }
     else {
        $message = "Error";
     }






?>
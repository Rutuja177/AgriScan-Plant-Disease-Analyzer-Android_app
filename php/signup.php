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


    $InsertQuerry = "INSERT INTO User (email, password, firstname, lastname, phone,address) VALUES ('$email', '$pw','$firstname', '$lastname', '$phone', '$address')";

     $R = mysqli_query($conn, $InsertQuerry);
     echo json_encode($R);
     if($R){
        $message = "Registration completed";
     }
     else {
        $message = "Error";
     }






?>
<?php
$servername = "51.81.160.157";
$database = "rvd0748_plantData";
$username = "rvd0748_plantdiease";
$password = "Plant@123456";

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$email = $_POST['email'];
$password = $_POST['password']; 

$SQL = "SELECT * FROM User WHERE email = '$email'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['password'] != $password) {
        $Message = "WRONG Password";
    } else {
        $Message = "Success";
    }
} else {
    $Message = "No account yet";
}

$response[] = array("Message" => $Message);
echo json_encode($response);
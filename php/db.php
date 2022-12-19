<?php
$servername = "51.81.160.157";
$database = "rvd0748_plantData";
$username = "rvd0748_plantdiease";
$password = "Plant@123456";
 
// Create connection
 
$conn = mysqli_connect($servername, $username, $password, $database);

$encodedData = file_get_contents('php://input');  // take data from react native fetch API
$decodedData = json_decode($encodedData, true);
 
// Check connection
 
if (!$conn) {
 
    die("Connection failed: " . mysqli_connect_error());
 
}
echo "Connected successfully";

?>
<?php

// the below header will provide the requested page details about what this page returns
header("Content-Type:application/json");

// the below header allows the specific domain to access the content or use "*" to allow access for all
header("Access-Control-Allow-Origin:*");

//this is to ensure that only requests with post methods are allowed
header("Access-Control-Allow-Methods:POST");


// the below header is for security purposes
//it ensures that only the defined headers are allowed and also it ensures that only XMLHttprequest
//is allowed to access the server 
header("Access-Control-Allow-Headers:Access-Control-Allow-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Origin,Content-Type,Authorization,X-Requested-With");

$user_ip = $_POST['userip'];
$conn = mysqli_connect("localhost", "root", "", "userinfo");
if ($conn && $user_ip) {
    // echo "conection successful<br>";

    $statement = " insert into userip (ip) values ('$user_ip')  ";
    $query = mysqli_query($conn, $statement) or die("no rows found");

    if ($query) {

        echo "Data inserted successfully";

    }
}
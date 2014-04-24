<?php

//Connect to Mongo
$mongo = new Mongo();
$mdb = $mongo->selectDb("mddappDB")->selectCollection("restaurants");

$result = array();

//Check to make sure the required fields have been filled in
if(isset($_GET["restaurant-name"]) && isset($_GET["address"]) && isset($_GET["discount"])) {
    //Insert the Restaurant Info into an empty array
    $restInfo = array();
    $restInfo["_id"] = uniqid();
    $restInfo["restaurant-name"] = $_GET["restaurant-name"];
    $restInfo["address"] = $_GET["address"];
    $restInfo["discount"] = $_GET["discount"];

    //Get the info from the array and save it to the MongoDB
    $mdb->save($restInfo);

    $result["success"] = true;
}else {
    $result["success"] = false;
}

echo json_encode($result);


?>
<?php

    require __DIR__ . '/../../../vendor/autoload.php';
    //create instance of MongoDB client
    session_start();
    $collections = (new MongoDB\Client)->ecommerce->Orders;

    $orders = $_POST;
    $CustomerID = $_SESSION['user'];

    var_dump($orders);


    $dataArray = [
        "orders" => $orders, 
        "customerEmail" => $CustomerID
    ];

    $cursor = $collections->find($dataArray);

    /*if($cursor){

    }*/

    var_dump($dataArray);

    $orderData = $collections->findOne($dataArray);

    if ($_SESSION){

        $result = $collections->insertOneResult($dataArray);
        echo json_encode($result);
    }

?>
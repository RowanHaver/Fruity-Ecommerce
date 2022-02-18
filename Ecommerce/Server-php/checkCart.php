<?php

    require __DIR__ . '/../../../vendor/autoload.php';
    //create instance of MongoDB client
    $collections = (new MongoDB\Client)->ecommerce->Cart;

    //Create a PHP array with our search criteria
    $findCriteria = [
        "customerID" => $_GET['customerID'], 
    ];

    var_dump($findCriteria);

    //Find all of the customers that match  this criteria
    $cursor = $collections->find($findCriteria);

    //var_dump(iterator_to_array($cursor));



    echo json_encode(iterator_to_array($cursor));


?>
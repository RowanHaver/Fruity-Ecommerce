<?php

    require __DIR__ . '/../../../vendor/autoload.php';
    //create instance of MongoDB client
    $collections = (new MongoDB\Client)->ecommerce->Products;

    //Create a PHP array with our search criteria
    $findCriteria = [
        "name" => $_GET['search'], 
    ];

    //Find all of the customers that match  this criteria
    $cursor = $collections->find($findCriteria);

    //var_dump(iterator_to_array($cursor));




    echo json_encode(iterator_to_array($cursor));


?>
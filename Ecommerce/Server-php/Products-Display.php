<?php 
    require __DIR__ . '/../../../vendor/autoload.php';
    //create instance of MongoDB client
    $collections = (new MongoDB\Client)->ecommerce->Products;
    
    //Find all products
    $products = $collections->find();

    
    //Echo final string
    echo json_encode(iterator_to_array($products));
    
?>
<?php

    require __DIR__ . '/../../../vendor/autoload.php';
    //create instance of MongoDB client
    $collections = (new MongoDB\Client)->ecommerce->Customers;

    //getting email input
    $email= filter_input(INPUT_POST, 'email');
    //getting password input
    $password = filter_input(INPUT_POST, 'password');

    
    $check = $collections->findOne(['email' => $email, "password" => $password,]);
    

    if($check != null){
        session_start();
        $_SESSION['user'] = $email;
        echo json_encode('Logged in');
    }
    else{
        echo json_encode('Email or Password is incorrect');
    }

?>
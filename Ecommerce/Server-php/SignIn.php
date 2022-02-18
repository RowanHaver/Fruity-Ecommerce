<?php

    require __DIR__ . '/../../../vendor/autoload.php';
    //create instance of MongoDB client
    $collections = (new MongoDB\Client)->ecommerce->Customers;


    $email= filter_input(INPUT_POST, 'email');
    $password = filter_input(INPUT_POST, 'password');

    //var_dump($email, $telephone, $address, $password, $confirmPassword);
/*
    $dataArray = [
        "email" => $email,
        "password" => $password,
    ];*/

    $check = $collections->findOne(['email' => $email, "password" => $password,]);
    //$passwordCheck = $collections->findOne(['password' => $password]);

    if($check != null){
        session_start();
        $_SESSION['user'] = $email;
        echo json_encode('Logged in');
    }
    else{
        echo json_encode('Email or Password is incorrect');
    }

?>
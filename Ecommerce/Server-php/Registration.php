<?php

    require __DIR__ . '/../../../vendor/autoload.php';
    //create instance of MongoDB client
    $collections = (new MongoDB\Client)->ecommerce->Customers;


    $email= filter_input(INPUT_POST, 'email');
    $telephone = filter_input(INPUT_POST, 'telephone');
    $address = filter_input(INPUT_POST, 'address');
    $password = filter_input(INPUT_POST, 'password');
    $confirmPassword = filter_input(INPUT_POST, 'confirmPassword');

    //var_dump($email, $telephone, $address, $password, $confirmPassword);

    $dataArray = [
        "email" => $email,
        "telephone" => $telephone,
        "address" => $address,
        "password" => $password,
        "confirmPassword" => $confirmPassword
    ];

    $cursor = $collections->findOne(['email' => $email]);

    if($cursor == null){
        $result = $collections->insertOne($dataArray);
        echo json_encode($dataArray);
    }
    else{
        echo json_encode('Email has been used');
    }

?>
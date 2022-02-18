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




    /*$cursor = $collections->findOne(['email' => $email]);*/
    //var_dump($cursor);

    //var_dump(validation());

    
    /*if($cursor == null) {
        if(validation($password,$confirmPassword,$email) == true){*/
            //var_dump('perfect');
            
        /*}
    
    }
    else{
        
    }*/


    //echo json_encode(iterator_to_array());

    /*
    function validation($password,$confirmPassword,$email){
        $uppercase = preg_match('#[A-Z]+#', $password);
        $lowercase = preg_match('#[a-z]+#', $password);
        $number    = preg_match('#[0-9]+#', $password);
        $specialChars = preg_match('#[^\w]+#', $password);
        //$emailValidation = preg_match('#[^\w]+#', $password);

        $error = '';
        
        $count = 0;

        if(!$uppercase){
            //var_dump('Password needs uppercase');
            $error .= 'Password needs uppercase<br>';
            $count++;
        }
        if(!$lowercase){
            //var_dump('Password needs lowercase');
            $error .= 'Password needs lowercase<br>';
            
            $count++;
        }
        if(!$number){
            //var_dump('Password needs a number');
            $error .= ' Password needs a number<br>';
            
            $count++;
        }
        if(!$specialChars){
            //var_dump('Password needs special chars');
            $error .= 'Password needs special chars<br>';
            
            $count++;
        }
        if(strlen($password) < 8){
            //var_dump('Password needs to be atleast 8');
            $error .= 'Password needs to be atleast 8<br>';
            
            $count++;
        }
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            //var_dump('Not valid email');
            $error .= 'Email format incorrect<br>';
            
            $count++;
        }
        if($password != $confirmPassword){
            //var_dump('password not the same');
            $error .= 'Password not the same<br>';
            
            $count++;
        }
        if($password == ""){
            //var_dump("Password empty");
            $error .= "Password empty<br>";
            $count++;
        }
        if($email == ""){
            //var_dump('Email empty');
            $error .= 'Email is empty<br>';
            //var_dump($error);
            $count++;
        }
        
        
        if($count > 0){
            //var_dump('Errors');
            echo json_encode($error);
            
            return false;
        }
        else{
            //var_dump('No errors');
            return true;
        }

    }
    */




?>
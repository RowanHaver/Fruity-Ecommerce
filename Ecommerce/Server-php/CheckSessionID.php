<?php

    if( array_key_exists("user", $_SESSION) ){
        echo true;
    }else{
        echo false;
    }


?>
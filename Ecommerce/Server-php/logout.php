<?php

    //Start session management
    session_start();

    //Remove all session variables
    session_unset();

    session_destroy();

    echo 'ok';

?>
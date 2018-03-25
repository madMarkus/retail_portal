<?php
    $link = mysqli_connect('localhost', 'root', '', 'retail_db');

    if (mysqli_connect_errno()) {
        echo 'Database connection error: '.mysqli_connect_errno().' '.mysqli_connect_error();
        exit();
    }

    mysqli_set_charset($link, 'utf8');
?>
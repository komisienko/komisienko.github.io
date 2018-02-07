<?php
    $botToken="538675880:AAEpH-eMwHyQ804TqvhHy2y52Xa7SP91FuA";
    $website = "php//input".$botToken;
    
    $update = file_get_contents($website."/getupdates");
    print_r($update);
    
?>
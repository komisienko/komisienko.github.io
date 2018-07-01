<?php
$add = (@$_POST['add']);


if(isset($add)){

$baseUrl = 'https://crm.cdlcrypto.com/api/v6';
$token = 'JDJ5JDEwJDBLb1NTblpGQmY4O'; 

$postData = array(
  'arguments' => array(
        'campaign_id' => '25',
    'fname' => $FirstName,
    'lname' => 'lname',
    'country' => $IP_Iso,
        'city' => $IP_City,
        'state' => $IP_Region,
    'phone' => $PhoneNumeral,
    'email' => $Email,
    'password' => '3343434',
    'currency' => 'USD',
    'language' => 'RU',
        'ip_address' => $IP,
        'a_aid' => 'tradeeducation.net',
        'b_bid' => tradeeducation.net
  )
);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $baseUrl ."/action/Customer/CreateNew/execute/?token=".$token);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
curl_setopt($ch, CURLOPT_HEADER, FALSE);

curl_setopt($ch, CURLOPT_POST, TRUE);
$post= str_replace(" ","+",json_encode($postData,JSON_UNESCAPED_UNICODE));
curl_setopt($ch, CURLOPT_POSTFIELDS,$post);

curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "Content-Type: application/json"
));
$response = json_decode(curl_exec($ch));

curl_close($ch);
}
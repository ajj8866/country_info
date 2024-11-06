<?php

function fetchUrl($url_in, $data_path) {
    $file_content = trim(file_get_contents('../../text_files/api_info.txt'));


    $url = "http://api.geonames.org/". $url_in. "&username=".$file_content;

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);

    $result=curl_exec($ch);

    curl_close($ch);

    $decode = json_decode($result,true);	

    $output['status']['code'] = "200";
    $output['status']['name'] = "ok";
    $output['status']['description'] = "success";
    $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";

    if ($data_path) {
        $output['data'] = $decode[$data_path];
    } else {
        $output['data'] = $decode;
    }

    header('Content-Type: application/json; charset=UTF-8');

    echo json_encode($output); 
}
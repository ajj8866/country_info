<?php
include 'utility_func.php';
fetchUrl("timezoneJSON?lat=".$_REQUEST["lattitude"]."&lng=".$_REQUEST["longitude"], null);
?>
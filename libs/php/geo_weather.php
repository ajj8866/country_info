<?php

include 'utility_func.php';
fetchUrl("weatherJSON?north=".$_REQUEST['north']."&south=".$_REQUEST['south']."&east=".$_REQUEST['east']."&west=".$_REQUEST['west'], 'weatherObservations');
?>
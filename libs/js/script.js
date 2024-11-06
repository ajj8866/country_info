// ENDPOINT FOR NEIGHTBOURS INFORMATion
$('#neighbours-submit').on('click' ,function() {
    $.ajax({
        url: 'libs/php/geo_neighbours.php',
        type: "POST",
        dataType: "json",
        data: {
            country: $('#selCountryNeighbours').val()
        },
        success: function(response) {
            console.log(JSON.stringify(response));
            $neighboursLs = $("#neighbours-list");
            $neighboursLs.html('');
            $responseItem = response['data'];
            $.each($responseItem, function(idx, item) {
                const listItem = $("<li>").text(item['countryName']);
                $neighboursLs.append(listItem);
            })            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
})


// ENDPOINT FOR TIMEZONE INFORMATION 
$('#timezone-submit').on('click', function(e) {
    e.preventDefault();
    $.ajax({
        url: 'libs/php/geo_timezone.php',
        type: "POST",
        dataType: "json",
        data: 'json',
        data: {
            // Example of valid logitude and lattitude values
            // lattitude: 47 longitude: 10
            // lattitude: 20 longitude: 10
            // lattitude: 20 longitude: 60
            // lattitude: 20 longitude: 40
            longitude: $('#longitude-timezone').val(),
            lattitude: $('#lattitude-timezone').val()
        },
        success: function(response) {
            console.log(JSON.stringify(response['data']));
            $("#country-tz").html(response['data']["countryName"]);
            $("#tz-id").html(response['data']["timezoneId"]);
            $("#sunrise").html(response['data']['sunrise']);
            $("#sunset").html(response['data']['sunset']);
        }
    })
})


// ENDPOINT FOR WEATHER INFORMATION 
$('#weather-submit').on('click', function(e) {
    e.preventDefault();
    $.ajax({
        url: 'libs/php/geo_weather.php',
        type: "POST",
        dataType: "json",
        data: 'json',
        data: {
            north: $('#north-weather').val(),
            south: $('#south-weather').val(),
            east: $("#east-weather").val(),
            west: $("#west-weather").val()
        },
        success: function(response) {
            console.log(JSON.stringify(response['data']));
            $stationHolder = $("#weather-list");
            $stationHolder.html('');
            const responseData = response['data'];
            $.each(responseData, function(idx, item) {
                const listItem = $('<li>').text(item['stationName']);

                $stationHolder.append(listItem)
            })
        }
    })
})
// ENDPOINT FOR NEIGHTBOURS INFORMATion
$('neighbours-submit').on('click' ,function() {
    $.ajax({
        url: 'libs/php/geo_neighbours.php',
        type: "POST",
        dataType: "json",
        data: {
            country: $('#selCountryNeighbours').val()
        },
        success: function(response) {
            $neighboursLs = $("#neighbours-list");
            $responseItem = response['data'];
            $.each($responseItem, function(idx, item) {
                $neighboursLs.append($responseItem['countryName']);
            })            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
})


// ENDPOINT FOR TIMEZONE INFORMATION 
$('timezone-submit').on('click', function(e) {
    e.preventDefault();
    $.ajax({
        url: 'libs/php/geo_timezone.php',
        type: "POST",
        dataType: "json",
        data: 'json',
        data: {
            longitude: $('#longitude-timezone').val(),
            lattitude: $('#lattitude-timezone').val()
        },
        success: function(response) {
            $("#country-tz").html(response['data']["countryName"]);
            $("#tz-id").html(response['data']["timezoneId"]);
            $("sunrise").html(response['data']['sunrise']);
            $("sunset").html(response['data']['sunset']);
        }
    })
})


// ENDPOINT FOR WEATHER INFORMATION 
$('weather-submit').on('click', function(e) {
    e.preventDefault();
    $.ajax({
        url: 'libs/php/geo_weather.php',
        type: "POST",
        dataType: "json",
        data: 'json',
        data: {
            north: $('#north-weather').val(),
            south: $('#south-weather').val(),
            east: $("east-weather").val(),
            west: $("west-weather").val()
        },
        success: function(response) {
            $stationHolder = $("#weather-output");
            const responseData = response['data'];
            $.each(responseData, function(idx, item) {
                const listItem = $('<li>').text(item['stationNames']);

                $stationHolder.append(listItem)
            })
        }
    })
})
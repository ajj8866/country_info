$('neighbours-submit').on('click' ,function() {
    $.ajax({
        url: 'libs/php/geo_neighbours.php',
        type: "POST",
        dataType: "json",
        data: {
            country: $('#selCountryNeighbours').val()
        },
        success: function(response) {
            $('#neighbour-list').html(response['data'][0]['name'])
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    })
})
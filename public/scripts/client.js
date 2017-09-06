console.log( 'js' );

function readyNow () {
    $('#requestButton').on('click', requestButtonClicked);
    $.ajax({
        method: 'GET',
        url: '/waterBottles',
        success: function(response) {
            console.log('back from server with', response);
        }
    })
}
function requestButtonClicked () {
    $.ajax( {
        method: 'GET',
        url: '/glasses',
        success: function(response) {
            console.log('back from server with', response);
        }
    })
}
$(document).ready(readyNow);
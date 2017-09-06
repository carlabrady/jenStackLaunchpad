console.log( 'js' );

function readyNow () {
    $('#requestButton').on('click', requestButtonClicked);
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
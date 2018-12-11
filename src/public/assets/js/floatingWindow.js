$(document).ready(function(){

    $(".infoButton, .infoWindow").hover(function() {
        $('.infoWindow').show('slow')
    },function() {
        setTimeout(function() {
            if(!($('.infoWindow:hover').length > 0))
                $('.infoWindow').hide('slow');
        }, 300);
    });
});

// navigation bar 

$(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
        $(".navbar").addClass("sticky-navbar");
    } else {
        $(".navbar").removeClass("sticky-navbar");
    }
});

// Google maps

function myMap() {
    var test = {
        lat: 28.734425,
        lng: 77.133816
    };
    var map = new google.maps.Map(document.getElementById("map-container"), {
        zoom: 4,
        center: test
    });
}
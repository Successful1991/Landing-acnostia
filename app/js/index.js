function initMap() {
    var kiev = {lat: 50.450945, lng: 30.522571};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: kiev
    });
    var marker = new google.maps.Marker({
        position: kiev,
        map: map
    });
}
$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: 'true',
        anchors: ['home', 'services', 'about', 'work', 'contacts'],
        menu: '#menu',
        scrollOverflow: 'true',
        scrollingSpeed: '1000',
        slidesNavigation: 'true',
        continuousHorizontal: 'true',
        fitToSection: 'true',
        responsiveWidth: '767px'
    });
    $.fn.fullpage.reBuild();
});
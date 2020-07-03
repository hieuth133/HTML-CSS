// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 21.061514, lng: 105.911385};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.querySelector('.map'), {zoom: 14, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

// Sticky menu background
window.addEventListener('scroll', function(){
    if (window.scrollY > 150){
        document.querySelector('#navbar').style.opacity = 0.6;
    }
    else{
        document.querySelector('#navbar').style.opacity = 1;
    }
});

//   Smooth Scrolling
$('#navbar a, .btn').on('click', function(event){
    if (this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});
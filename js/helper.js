// HTML HELPERS
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills"></ul>';
var HTMLskills = '<li><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


// CONSOLE LOG CLICK LOCATION
clickLocations = [];
function logClicks(x,y) {
        clickLocations.push({ x: x, y: y }
    );
    console.log('x location: ' + x + '; y location: ' + y);
}
$(document).click(function(loc) {
    var x = loc.pageX,
    y = loc.pageY;
    logClicks(x,y);
});


// GOOGLE MAP
// https://developers.google.com/maps/documentation/javascript/reference
var map;
function initializeMap() {
    var locations,
        mapOptions = {
            disableDefaultUI: true
        };
    map = new google.maps.Map(document.querySelector('#gmap'), mapOptions);
    function locationFinder() { // returns an array of every location string from the JSONs
        var locations = [];
        locations.push(bio.contacts.location); // adds bio locations to array
        for (var school in education.schools) { // schools
            locations.push(education.schools[school].location);
        }
        for (var job in work.jobs) { // work
            locations.push(work.jobs[job].location);
        }
        return locations;
    }
    // reads Google Places search results to create map pins.
    // placeData is the object returned from search results containing information about a single location.
    function createMapMarker(placeData) {
        var lat = placeData.geometry.location.lat(),
            lon = placeData.geometry.location.lng(),
            name = placeData.formatted_address,
            bounds = window.mapBounds,
            marker = new google.maps.Marker({ // object with additional data about the pin for a single location
                map: map,
                position: placeData.geometry.location,
                title: name
            }),
            infoWindow = new google.maps.InfoWindow({ // pop up "tooltip" on click
                content: name
            });
        bounds.extend(new google.maps.LatLng(lat, lon)); // this is where the pin actually gets added to the map.
        map.fitBounds(bounds); // fit the map to the new marker
        map.setCenter(bounds.getCenter()); // center the map
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(map, marker);
        });
    }
    function callback(results, status) { // checks search returned results for a location before creating a new map marker
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }
    function pinPoster(locations) { // takes locations array created by locationFinder() and fires off Google place searches for each location
        var service = new google.maps.places.PlacesService(map); // PlacesService does the work of actually searching for location data
        for (var place in locations) { // creates a search object for each location
            var request = {
                query: locations[place]
            };
            service.textSearch(request, callback); // Actually searches the Google Maps API for location data
        }
    }
    window.mapBounds = new google.maps.LatLngBounds();  // Sets the boundaries of the map based on pin locations
    locations = locationFinder();
    pinPoster(locations);
}
window.addEventListener('load', initializeMap);
window.addEventListener('resize', function(e) { // adjust map bounds on window resize
    map.fitBounds(mapBounds);
});
var map = L.map('map').fitWorld();
var brutArgs = window.location.search.slice(1)
var usableArgs = brutArgs.split("&")
console.log(usableArgs)

var geo
var markers

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on("click", (e) => {
    console.log(map.mouseEventToLatLng(e.originalEvent))
})

L.control.scale().addTo(map)

database.ref().once("value").then((data) => {
    console.log(data.val()[usableArgs[0]])
    useJSON(data.val()[usableArgs[0]])
})

function update() {

    database.ref().once("value").then((data) => {
        console.log(data.val()[usableArgs[0]])
        updateJSON(data.val()[usableArgs[0]])
    })
}

function useJSON(data) {
    map.setView(data.center, data.zoom)
    updateJSON(data)
}

function updateJSON(data) {
    document.getElementById("description").innerHTML = data.description;
    document.getElementById("legend").innerHTML = data.legend;

    //posage des marqueurs
    if (markers != [] && markers) {
        markers.forEach(element => {
            element.remove()
        })
        markers = []
    } else {
        markers = []
    }
    data.locations.forEach(element => {
        var marker = L.marker(element.center, )
        var popup = L.popup().setContent("<h3>" + element.name + "</h3><p>" + element.description + "</p>");
        marker.bindPopup(popup)
            //.addTo(map)
        markers.push(marker)
    });
    markers.forEach(element => {
        element.addTo(map)
    })

    //geoJson TODO
    if (geo) {
        geo.remove()
    }
    geo = L.geoJSON(data.features, {
        onEachFeature: (feature, layer) => {
            if (feature.properties.color) {
                layer.setStyle({ color: feature.properties.color })
            } else {
                layer.setStyle({ color: "#000000" })
            }

            var popup = L.popup().setContent("<h3>" + feature.properties.name + "</h3><p>" + feature.properties.description + "</p>");
            layer.bindPopup(popup)
        }
    })
    geo.addTo(map)
}
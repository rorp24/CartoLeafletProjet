var monJson
var map = L.map('map').fitWorld();
var brutArgs = window.location.search.slice(1)
var usableArgs = brutArgs.split("&")
console.log(usableArgs)
var donnees = usableArgs[0]

var modePointeur = false

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

map.on("click", (e) => {
    console.log(map.mouseEventToLatLng(e.originalEvent))
})

L.control.scale().addTo(map)



console.log()
    //"?GBN"
    /*var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            useJSON(this.responseText)
        }

    }
    xmlhttp.open("GET", "./GrenobleByNight.json", true);
    xmlhttp.send();*/
database.ref().once("value").then((data) => {
    console.log(data.val())
    useJSON(data.val()[donnees])
})



function useJSON(data) {
    monJson = data;
    console.log("Json récupéré:", monJson)
    document.getElementById("description").innerHTML = monJson.description;
    document.getElementById("legend").innerHTML = monJson.legend;
    map.setView(monJson.center, monJson.zoom)
        //posage des marqueurs
    monJson.locations.forEach(element => {
        var marker = L.marker(element.center, )
        var popup = L.popup().setContent("<h3>" + element.name + "</h3><p>" + element.description + "</p>");
        marker.bindPopup(popup)
        marker.addTo(map)
    });
    //geoJson TODO
    L.geoJSON(monJson.features, {
        onEachFeature: (feature, layer) => {
            if (feature.properties.color) {
                layer.setStyle({ color: feature.properties.color })
            } else {
                layer.setStyle({ color: "#000000" })
            }

            var popup = L.popup().setContent("<h3>" + feature.properties.name + "</h3><p>" + feature.properties.description + "</p>");
            layer.bindPopup(popup)
        }
    }).addTo(map)



}
var monJson
var map = L.map('map').fitWorld();

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; Openstreetmap France | &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.control.scale().addTo(map)

function EnterThePage() {
    if (window.location.search == "?GBN") {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                useJSON(this.responseText)
            }

        }
        xmlhttp.open("GET", "./GrenobleByNight.json", true);
        xmlhttp.send();
    } else if (window.location.search == "?demo") {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                useJSON(this.responseText)
            }

        }
        xmlhttp.open("GET", "./demo.json", true);
        xmlhttp.send();
    }
}

function useJSON(text) {
    monJson = JSON.parse(text);
    console.log("Json récupéré:", monJson)
    document.getElementById("description").innerHTML = monJson.description;
    map.setView(monJson.center, monJson.zoom)
}
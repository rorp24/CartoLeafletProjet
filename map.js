var monJson

function EnterThePage() {
    if (window.location.search == "?GBN") {
        alert("Grenoble by night")
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                monJson = JSON.parse(this.responseText);
                console.log("Json récupéré:", monJson)
                document.getElementById("description").innerHTML = monJson.description;
            }
            xmlhttp.open("GET", "./GrenobleByNight.json", true);
            xmlhttp.send();
        }
    } else if (window.location.search == "?demo") {
        alert("demo")
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                monJson = JSON.parse(this.responseText);
                console.log("Json récupéré:", monJson)
                document.getElementById("description").innerHTML = monJson.description;
            }
            xmlhttp.open("GET", "./demo.json", true);
            xmlhttp.send();
        }
    }
}
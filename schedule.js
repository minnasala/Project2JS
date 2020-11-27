/*toimii, mutta ei ole erityisen kaunis. Aika ei riittänyt ehtolausekkeiden
ja vaihtuvien url -osoitteiden kanssa. Jos jatkan tätä kolmanteen projektiin,
haluan luoda asemien metadatasta listan, josta poimin vaihtuvat asema-avaimet
muuttujiksi jotenkin, kun jokaisen linkin täytyy hakea json omasta osoitteesta. */

var data; // muuttujien määrittely
var olio;

var li = document.getElementsByTagName("li").value;

function stSearch() { // searchbar toiminta, jokainen kirjain tekee uuden haun
    // muuttujat
    var input = document.getElementById("tStations");
    var filter = input.value.toUpperCase(); // tämä siksi, että etsiessä ei tarvi isoja kirjaimia
    var ul = document.getElementById("stations");
    var li = ul.getElementsByTagName("li");
    
    //looppi, joka kiertää kirjoittaessa ja tuo esille sopivat linkit
    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0]; // linkkimuuttuja
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function trains(olio) { //taulukkofunktio, jota käytän taulukon luomiseen hakufunktioissa

    var tableData = olio; //taulukkodata json -oliosta

    
    //luon taulukon
    var table = "<table>";
    //header -rivi erikseen, koska json nimet eivät olleet hyviä taulukkoon
    table += "<tr><th>Number</th> <th>Operator</th> <th>Type</th> <th>Category</th> <th>ID</th> <th>Version</th></tr>";
    //looppi, jolla luodaan taulukko json -olion datasta
    for(var i = 0; i < tableData.length; i++) {
        table += "<tr>";
        table += "<td>" + tableData[i].trainNumber + "</td>";
        table += "<td>" + tableData[i].operatorShortCode + "</td>";
        table += "<td>" + tableData[i].trainType + "</td>";
        table += "<td>" + tableData[i].trainCategory + "</td>";
        table += "<td>" + tableData[i].commuterLineID+ "</td>";
        table += "<td>" + tableData[i].version + "</td>";
        table += "</tr>"

    }

    table += "</table>";

    document.getElementById("table").innerHTML = table;

}
// tein näihin funktioihin eventlistenerit kokeeksi, että html näyttäisi kivemmalta
document.getElementById("avp").addEventListener("click", function () {
    //json -datan request, jokainen on samanlainen, paitsi url, kömpelö ratkaisu, mutta toimii
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/AVP?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText; //data -muuttuja
            olio = JSON.parse(data); //parsin datan ja teen siitä olio -muuttujan
            console.log(olio); //otan konsoliin, tämä on lähinnä itselle, että näin mitä tapahtuu

            trains(olio); //luon datasta taulukon
        }
    }
    
});

document.getElementById("epo").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/EPO?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("hki").addEventListener("click", function () {  
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/HKI?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});
    
document.getElementById("hkh").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/HKH?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("hpl").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/HPL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("ila").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/ILA?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("jrs").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/JRS?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("kan").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/KAN?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("klh").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/KLH?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("kni").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/KNI?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("kea").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/KEA?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("ke").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/KE?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("kil").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/KIL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("kkn").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/KKN?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("ktö").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/KTÖ?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("kvh").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/KVH?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("kvy").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/KVY?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("krs").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/KRS?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("käp").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/KÄP?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("lnä").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/LNÄ?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("len").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/LEN?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("lpv").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/LPV?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("loh").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/LOH?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("ml").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/ML?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("mlo").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/MLO?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("mrl").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/MRL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("mas").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/MAS?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("myr").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/MYR?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("mäk").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/MÄK?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("olk").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/OLK?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("psl").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/PSL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("pjm").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/PJM?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("poh").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/POH?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("pla").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/PLA?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("pmk").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/PMK?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("rkl").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/RKL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("sav").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/SAV?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("sti").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/STI?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("tna").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/TNA?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("tkl").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/TKL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("tol").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/TOL?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("vmo").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/VMO?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});

document.getElementById("veh").addEventListener("click", function () {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","https://rata.digitraffic.fi/api/v1/live-trains/station/VEH?minutes_before_departure=0&minutes_after_departure=0&minutes_before_arrival=30&minutes_after_arrival=0",true);
    xmlhttp.send();

    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){   
            data = document.getElementsByTagName("table").innerHTML = xmlhttp.responseText;
            olio = JSON.parse(data);
            console.log(olio);

            trains(olio);
        }
    }
});


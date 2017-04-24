
function News(id) {
  var filnews = document.getElementById(id);
var content = filnews.getAttribute("data-news");
document.getElementById('newscontent').innerHTML=content;
document.getElementById('idnews').style.display='block';
}

// Used to toggle the menu on smaller  screens when clicking on the menu button
function openNav() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    myFunction(this);
    }
};
xhttp.open("GET", "https://www.lequipe.fr/rss/actu_rss_Rugby.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    for (i=0; i<3; i++) {
    var news = document.getElementById("titre"+i);
    var tlt = xmlDoc.getElementsByTagName("title")[i+2].childNodes[0].nodeValue;
    var res = tlt.substr(8);
    news.innerHTML = res;
    news.setAttribute('href', xmlDoc.getElementsByTagName("link")[i+2].childNodes[0].nodeValue );
    news.setAttribute('target', '_blank');
    news.setAttribute('title', xmlDoc.getElementsByTagName("description")[i+1].childNodes[0].nodeValue );
  };
};

var mymap = L.map('mapid').setView([48.8566, 2.3515], 11);
        

L.tileLayer('https://tile.jawg.io/jawg-streets/{z}/{x}/{y}.png?access-token=8ylar0mFu8qjfOjkoE0EE43LnGLBR3F8MuB9S4QuVl0Vw7lmQ5qyVaqRlKacMN5q', {}).addTo(mymap);

mymap.attributionControl.addAttribution("<a href=\"https://www.jawg.io\" target=\"_blank\">&copy; Jawg</a> - <a href=\"https://www.openstreetmap.org\" target=\"_blank\">&copy; OpenStreetMap</a>&nbsp;contributors")
 
function mainUpdate(type) {
    if (type == "battery") {
        document.getElementById('status').innerHTML = (batteryCharging) ? "Plugged, " : "Unplugged, ";
        document.getElementById('batterylevel').innerHTML = batteryPercent + "%";

        document.getElementById('status2').innerHTML = (batteryCharging) ? "Plugged, " : "Unplugged, ";
        document.getElementById('batterylevel2').innerHTML = batteryPercent + "%";
    }

    if (type == 'music') {
        document.getElementById('title').innerHTML = title;
        document.getElementById('artist').innerHTML = artist;

        if (isplaying) {
            document.getElementById('notplaying').style.display = 'none';
            document.getElementById('playing').style.display = 'block';
        } else {
            document.getElementById('notplaying').style.display = 'block';
            document.getElementById('playing').style.display = 'none';
        }
    }
}

function previous() {
    window.location = 'xeninfo:prevtrack'
}
function pP() {
    window.location = 'xeninfo:playpause'
}
function next() {
    window.location = 'xeninfo:nexttrack'
}
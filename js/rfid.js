/**
 * Created by gasstan on 8.4.2016.
 */
// Connects with Server
var socket = io('http://192.168.1.100:8500/');

socket.on('rfid', function (data) {
    switch (data) {
        case 'e342b100':
            console.log("e342b100");
            break;
        default:
            console.log(data);
            break;
    }
    var old = document.getElementsByClassName("middle-center")[0].innerHTML;
    document.getElementsByClassName("middle-center")[0].innerHTML = "<h1>Hi, " + data + "!</h1>";

    setTimeout(function () {
        document.getElementsByClassName("middle-center")[0].innerHTML = old;
    }, 2500);
});
var net = require('net')

function add0(number) {
    return number < 10 ? '0' + number : number;
}
// "2013-07-06 17:42"  

var server = net.createServer(function (socket) {
    var date = new Date();
    var time = date.getFullYear() + "-" + add0(date.getMonth() + 1) + "-" + add0(date.getDate()) + " " + add0(date.getHours()) + ":" 
    + add0(date.getMinutes()) + '\n';
    socket.end(time);
})

server.listen(process.argv[2]);	
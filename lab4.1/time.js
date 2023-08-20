var output = document.querySelector(".output");

 
 const timer = setInterval( function today(){
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    output.innerHTML = h + ":" + m + ":" + s; 
 }, 1000);
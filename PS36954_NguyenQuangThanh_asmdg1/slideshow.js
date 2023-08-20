var images = [];
for (let i = 0; i < 6 ; i++){
    images[i] = new Image();
    images[i].src = "img/img" + i + ".webp";

}

var index = 0 ;
 function first(){
    index = 1; 
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
 }
  
 function last(){
    index = images.length -1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;

 }
 
 function next(){
    index++;
    if( index >= images.length ){
        index = 1;
    }
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
 }

 function prev(){
    index--;
    if( index <= 0 ){
        index = images.length ;
    }
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
 }
 var index = 0;
 function slide(){
   var anh = document.getElementById("anh");
   anh.style.opacity = 0;
 }
 
 setInterval(next, 1000);
var output = document.querySelector(".output");
var left = document.querySelector(".leftbtn");
var right = document.querySelector(".rightbtn");
var input = document.querySelector("input");

left.addEventListener("click",function(){
    var kq =0 (input.value-1)*12000;
    output.innerHTML = kq;
});
right.addEventListener("click", function(){
    var kq =0 (input.value+1)*12000;
    output.innerHTML = kq;
})
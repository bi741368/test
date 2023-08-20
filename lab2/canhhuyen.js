let canh1 = document.getElementById("canh1");
let canh2 = document.getElementById("canh2");
let action = document.getElementById("action");
let output = document.getElementById("output");
let loicanh1 = document.getElementById("loicanh1");
let loicanh2 = document.getElementById("loicanh2");
action.addEventListener("click", function () {
  let a = parseFloat(canh1.value);
  let b = parseFloat(canh2.value);
  let all = Math.sqrt(a * a + b * b);
  let xuat = all.toFixed(2);
  output.innerHTML = xuat;
  if(a<0 ){
    loicanh1.innerHTML = "Không được nhỏ hơn 1";
    loicanh1.style.color="red";
    output.innerHTML ="";
   
}
else if(b<0){
    loicanh2.innerHTML = "Không được nhỏ hơn 1";
    loicanh2.style.color="red";
    output.innerHTML ="";
}
else{
    loicanh1.innerHTML = "";
    loicanh2.innerHTML = "";    
}
});

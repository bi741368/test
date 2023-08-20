var ten = localStorage.getItem("ten");
var gia = localStorage.getItem("gia");
var soluong = localStorage.getItem("soluong");
let text = "";
text+= '<h1>'+ten+'</h1>';
text+='<p>Bạn đã mua được sản phẩm trên với giá 1 cái là: '+gia+' và số lượng là '+soluong+'</p>';
document.getElementById("kq").innerHTML = text;

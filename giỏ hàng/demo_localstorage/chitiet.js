var id = localStorage.getItem("id");
var ten = localStorage.getItem("ten");
var gia = localStorage.getItem("gia");
var hinh = localStorage.getItem("hinh");
//show chi tiết của sp đó
let text = "";
    text+='<img src="'+hinh+'">';
    text+='<h2>'+ten+'</h2>';
    text+='<p>'+gia+'</p>';
    text+='<input type="number" id="soluong" value="1">';
    text+='<button onclick="mua()">Mua ngay</button>';
// thêm text vô div kq
document.getElementById("kq").innerHTML = text;
//định nghĩa hàm mua
function mua(){
    localStorage.setItem("id",id);
    localStorage.setItem("ten",ten);
    localStorage.setItem("gia",gia);
    localStorage.setItem("hinh",hinh);
    //set thêm số lượng
    var soluong = document.getElementById("soluong").value;
    localStorage.setItem("soluong",soluong);
    //chuyển qua trang giỏ hàng
    window.location = "giohang.html"
}
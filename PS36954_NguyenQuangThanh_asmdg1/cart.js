var ten = localStorage.getItem("ten");
var gia = localStorage.getItem("gia");
var soluong = localStorage.getItem("soluong");
var hinh = localStorage.getItem("hinh");
var size = localStorage.getItem("size");
var mainimg = localStorage.getItem("mainimg");
let text = "";

text += '<input type="checkbox" class="tick">';
text += '<img src="' + mainimg + '">';
text += '<div class="column1">';
text += '<span>' + ten + '</span>';
text += '<span>Size: ' + size + '</span>';
text += '</div>';
text += '<div class="column1">';
text += '<input type="number" value="' + soluong + '" id="count" min="1">';
text += '<button class="remove">remove</button>';
text += '</div>';
text += '<span>Detail: ' + gia + 'VND</span>';

document.getElementById("kq1").innerHTML = text;

document.querySelector(".remove").addEventListener("click", function() {
  document.getElementById("kq1").remove();
  document.getElementById("kq2").remove();
  let emty = "";
  emty = '<h1>Lắp đầy giỏ hàng của mình nào ^^</h1>';
  document.getElementById("empty").innerHTML = emty;
});

document.querySelector(".tick").addEventListener("click", function() {
  var quantity = document.getElementById("count").value;
  var totalPrice = quantity * gia;  
  let text1 = "";
  text1 += '<h1>Total</h1>';
  text1 += '<div class="total1">'
  text1 +='<div>Subtotal</div>';
  text1 += '<div class="price">' + totalPrice + 'VND</div>';
  text1 += '</div>';
  text1 +='<div>Estimated Shipping & Handling</div>';
  text1 +='<div>Order Protection.com  </div>';
  text1 +='<button>CHECK OUT</button>';
  document.getElementById("kq2").innerHTML = text1;
  add();
});

function add() {
  document.getElementById("count").addEventListener("change", function() {
    var quantity = document.getElementById("count").value;
    var totalPrice = quantity * gia;
    let text1 = "";
    text1 += '<h1>Total</h1>';
    text1 += '<div class="total1">'
    text1 +='<div>Subtotal</div>';
    text1 += '<div class="price">' + totalPrice + 'VND</div>';
    text1 += '</div>';
  text1 +='<div>Estimated Shipping & Handling</div>';
  text1 +='<div>Order Protection.com  </div>';
  text1 +='<button>CHECK OUT</button>';
  document.getElementById("kq2").innerHTML = text1;
  });
}

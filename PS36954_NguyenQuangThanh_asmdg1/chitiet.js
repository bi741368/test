var id = localStorage.getItem("id");
var ten = localStorage.getItem("ten");
var gia = localStorage.getItem("gia");
var hinh = localStorage.getItem("hinh");
var kt = "";
//show chi tiết của sp đó
let text = "";
text += '<div class="img">';
text += '<img src="' + hinh + '" id="mainimg">';
text += "</div>";
text += '<div class="info">';
text += "<h2>" + ten + "</h2>";
text += "<p>" + gia + "</p>";
text += ' <div class="list">';
text +=
  '<div><img src="img/img1.webp" onclick="changimg(this.id)" id="one"></div>';
text +=
  '<div><img src="img/img3.webp" onclick="changimg(this.id)" ></div>';
text += " </div>";
text += '<div class="size">';
// text +='<button onclick="laysize(`S`)">S</button>';  s trong hàm là lấy giá trị tĩnh luôn nên nút s có giá trị là s
text += '<button onclick="laysize(`S`)">S</button>';
text += '<button onclick="laysize(`M`)">M</button>';
text += '<button onclick="laysize(`L`)">L</button>';
text += '<button onclick="laysize(`XL`)">XL</button>';
text += "</div>";
text += '<div id="baoloi"></div>';
text += '<div class="buy">';
text += '<input type="number" id="soluong" value="1" min="1">';
text += '<button onclick="mua()">Mua ngay</button>';
text += "</div>";
text += " <p>100% Cotton Pocket Tee</p>";
text += "<p>Ripndip x World Industries Limited Edition Collab Release</p>";
text += "<p>Screen Printed Front Wet Willy Graphic Inside Pocket</p>";
text += "</div>";
text += '<div class="des">';
text += "</div>";
// thêm text vô div kq
document.getElementById("kq").innerHTML = text;
//định nghĩa hàm mua

function mua() {
  localStorage.setItem("id", id);
  localStorage.setItem("ten", ten);
  localStorage.setItem("gia", gia);
  localStorage.setItem("hinh", hinh);
  //set thêm số lượng
  var soluong = document.getElementById("soluong").value;
  localStorage.setItem("soluong", soluong);
  if (kt === "") {
    document.getElementById("baoloi").innerText = "Vui lòng nhập size";
  }
  //chuyển qua trang giỏ hàng
  else window.location = "cart.html";
}
function laysize(size) {
  kt = size;
  localStorage.setItem("size", size);
}
function changeImage(event) {
  let image = event.target;
  let src = image.src;
  document.getElementById("mainimg").src = src;
  localStorage.setItem("mainimg", src);
}
document
  .querySelectorAll(".list img")
  .forEach((image) => image.addEventListener("click", changeImage));

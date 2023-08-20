function sanpham(id, ten, gia, anh, seller) {
  this.id = id;
  this.ten = ten;
  this.gia = gia;
  this.anh = anh;
  this.seller = seller;
}

// Khởi tạo 4 object sản phẩm -->> mảng listsanpham chứa 4 object
const sp1 = new sanpham(
  1,
  "TEE 4 SUMMER",
  12000,
  "img/img1.webp",
  "BEST SELLER"
);
const sp2 = new sanpham(2, "ENERGY TEE", 14000, "img/img3.webp", "BEST SELLER");

const danhSachSP = [];
danhSachSP.push(sp1);
danhSachSP.push(sp2);

// Foreach hiển thị 4 sản phẩm lên html
function showDSSP(danhSachSP) {
  let text = "";

  // Foreach
  danhSachSP.forEach((sp) => {
    text += `<div class="sp" onclick="showChiTiet(${sp.id})">`;
    text += `<img src="${sp.anh}">`;
    text += `<h2>${sp.ten}</h2>`;
    text += `<p>${sp.gia}</p>`;
    text += `<h3>${sp.seller}</h3>`;
    text += `</div>`;
  });

  // Thêm text vô div kq
  document.getElementById("kq").innerHTML = text;
}

showDSSP(danhSachSP);

const mainImage = document.getElementById("myImg");
const originalImageSrc = mainImage.src;

mainImage.addEventListener("mouseover", function () {
  mainImage.src = "img/img1.webp";
});

mainImage.addEventListener("mouseout", function () {
  mainImage.src = originalImageSrc;
});

function showChiTiet(id) {
  localStorage.setItem("id", id);

  danhSachSP.forEach((sp) => {
    if (sp.id === id) {
      console.log("giống đó");
      console.log(sp.ten);
      // localStorage.setItem("id", sp.id);
      localStorage.setItem("ten", sp.ten);
      localStorage.setItem("gia", sp.gia);
      localStorage.setItem("hinh", sp.anh);
    }
  });

  // Chuyển qua trang chi tiết
  window.location = "info1.html";
}

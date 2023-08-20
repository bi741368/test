function sanpham(id, ten, gia, anh) {
    this.id = id;
    this.ten = ten;
    this.gia = gia;
    this.anh = anh;
}

const sp1 = new sanpham(1, "sản phẩm 1", 12000, "bi.jpg");
const sp2 = new sanpham(2, "sản phẩm 2", 22000, "bi.jpg");
const sp3 = new sanpham(3, "sản phẩm 3", 52000, "bi.jpg");
const sp4 = new sanpham(4, "sản phẩm 4", 62000, "bi.jpg");

const danhSachSP = [];
danhSachSP.push(sp1);
danhSachSP.push(sp2);
danhSachSP.push(sp3);
danhSachSP.push(sp4);

function showDSSP(dssp) {
    let text = "";

    dssp.forEach(sp => {
        text += '<a href="#" onclick="showchitiet(' + sp.id + ')">';
        text += '<img src="' + sp.anh + '">';
        text += '<h2>' + sp.ten + '</h2>';
        text += '<div>' + sp.gia + '</div>';
        text += '</a>';
    });
    document.getElementById("kq").innerHTML = text;
}
showDSSP(danhSachSP);
function showchitiet(id)  {
    danhSachSP.forEach(sp => {
        if(sp.id === id){
            console.log("giong do");
            console.log("sp.ten");
            localStorage.setItem("id",sp.id);
            localStorage.setItem("ten",sp.id);
            localStorage.setItem("gia",sp.id);
            localStorage.setItem("hinh",sp.id);
        }
    });
    window.local = "chitiet.html";

}
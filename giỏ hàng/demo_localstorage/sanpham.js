//khai báo class sản phẩm
function sanpham (id,ten,gia,anh){
    this.id = id;
    this.ten = ten;
    this.gia = gia;
    this.anh = anh;
}
//khởi tạo 4 object sản phẩm --->> mảng listsanpham chứa 4 object
const sp1 = new sanpham(1,"san pham 1",12000,"https://wallpapercave.com/wp/wp2552690.jpg");
const sp2 = new sanpham(2,"san pham 2",14000,"https://wallpapercave.com/wp/wp2552690.jpg");
const sp3 = new sanpham(3,"san pham 3",16000,"https://wallpapercave.com/wp/wp2552690.jpg");
const sp4 = new sanpham(4,"san pham 4",33000,"https://wallpapercave.com/wp/wp2552690.jpg");
const danhSachSP = [];
danhSachSP.push(sp1);
danhSachSP.push(sp2);
danhSachSP.push(sp3);
danhSachSP.push(sp4);
//foreach hiển thị 4 sản phẩm lên html
function showDSSP(danhSachSP) {
    let text = "";
    //foreach
    danhSachSP.forEach(sp => {
        text+='<div class="sp" onclick=showChiTiet('+sp.id+')>';
        text+='<img src="'+sp.anh+'">';
        text+='<h2>'+sp.ten+'</h2>';
        text+='<p>'+sp.gia+'</p>';
        text+='</div>';
    });
    // thêm text vô div kq
    document.getElementById("kq").innerHTML = text;
}
//gọi hàm show
showDSSP(danhSachSP);
//định nghĩa hàm showChiTiet(id)
//  đẩy lên localstorage
function showChiTiet(id) {
    localStorage.setItem("id",id);    
    danhSachSP.forEach(sp => {
        if(sp.id === id){
            console.log("giống đó");
            console.log(sp.ten);
            // localStorage.setItem("id",sp.id);
            localStorage.setItem("ten",sp.ten);
            localStorage.setItem("gia",sp.gia);
            localStorage.setItem("hinh",sp.anh);
        }
    });
    //chuyển qua trang chi tiết
    window.location = "info1.html";
}

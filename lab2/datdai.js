let input = document.getElementById("input");
let sao = document.getElementById("sao");
let mau = document.getElementById("mau");
let ha = document.getElementById("ha");
let error = document.getElementById("notice");
// enter ra kết quả
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let a = parseFloat(input.value);
    let sao1 = a / 1000;
    let mau1 = a / 10000;
    let ha1 = a / 10000;
    sao.innerHTML = sao1;
    mau.innerHTML = mau1;
    ha.innerHTML = ha1;
    if (a < 0) {
      error.innerHTML = "Vui lòng nhập lại diện tích đất";
      error.style.color = "greenyellow";
      sao.innerHTML = "";
      mau.innerHTML = "";
      ha.innerHTML = "";
    } else {
      sao.innerHTML = a+"m2 = "+sao1 + " sào";
      mau.innerHTML = a+"m2 = "+mau1 + " mẫu";
      ha.innerHTML = a+"m2 = "+ha1 + " ha";
      error.innerHTML = "";
    }
  }
});

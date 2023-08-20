let tai = document.getElementById("tai");
let xiu = document.getElementById("xiu");
let x1 = document.getElementById("x1");
let x2 = document.getElementById("x2");
let x3 = document.getElementById("x3");
let text = document.getElementById("text");
// *6 là con số giới hạn của random , +1 là con số 0+1 thành số bắt đầu
let rand1 = Math.floor(Math.random() * 6) + 1;
let rand2 = Math.floor(Math.random() * 6) + 1;
let rand3 = Math.floor(Math.random() * 6) + 1;
xiu.addEventListener("click", function () {
  let sum = rand1 + rand2 + rand3;
  x1.innerHTML = rand1;
  x2.innerHTML = rand2;
  x3.innerHTML = rand3;

  if ((rand1 === rand2) === rand3) {
    text.innerHTML = "Thua";
  } else {
    if (sum > 3 && sum < 11) {
      text.innerHTML = "Thắng";
    } else {
      text.innerHTML = "Thua ";
    }
  }
});
tai.addEventListener("click", function () {
  let sum = rand1 + rand2 + rand3;
  x1.innerHTML = rand1;
  x2.innerHTML = rand2;
  x3.innerHTML = rand3;

  if ((rand1 === rand2) === rand3) {
    text.innerHTML = "Thua";
  } else {
    if (sum > 10 && sum < 18) {
      text.innerHTML = "Thắng ";
    } else {
      text.innerHTML = "  thua";
    }
  }
});

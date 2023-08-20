let btn = document.getElementById("btn");
let vang = document.getElementById("yellow");
let xam = document.getElementById("grey");
vang.style.display = "none";
xam.style.display = "block";
btn.addEventListener("click", function () {
  if (xam.style.display === "block") {
    xam.style.display = "none";
    vang.style.display = "block";
  } else {
    xam.style.display = "block";
    vang.style.display = "none";
  }
});

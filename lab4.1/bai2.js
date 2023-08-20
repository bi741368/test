var input = document.querySelectorAll(".main input");
var output = document.querySelector(".output");
var button = document.querySelector("button");

function hocluc(diem) {
  if (diem <= 10 && diem >= 5) {
    return "Đậu";
  } else if (diem <= 5) {
    return "Rớt";
  }
}

button.addEventListener("click", function () {
  var student = {
    ten: `${input[0].value}`,
    diem: `${input[1].value}`,
    hocluc: `${hocluc(input[1].value)}`,
  };
  output.insertAdjacentHTML(
    "afterbegin",
    `<div>${student.ten}</div>
    <div>${student.diem}</div>
    <div>${student.hocluc}</div> `
  );
});

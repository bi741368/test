var input = document.querySelectorAll(".main input");
var output = document.querySelector(".output");
// console.log(input);

var button = document.querySelector("button");

button.addEventListener("click", function () {
  var items = {
    ten: `${input[0].value}`,
    hang: `${input[1].value}`,
    soluong: `${input[2].value}`,
    gia: `${input[3].value}`,
  };
  output.insertAdjacentHTML(
    "afterbegin",
    `<div>${items.ten}</div>
    <div>${items.hang}</div>
    <div>${items.soluong}</div>
    <div>${items.gia}</div>`
  );
//   var newitem = document.createElement("li");
//   newitem.innerHTML = `li>${items.ten}</li>
//     <li>${items.hang}</li>
//     <li>${items.soluong}</li>
//     <li>${items.gia}</li><br>`;
});

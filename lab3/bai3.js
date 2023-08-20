function appendToResult(value) {
  document.getElementById("in").textContent += value;
  // .textcontent do xài div để làm còn nếu xài input thì .value lấy giá trị 
}

function calculate() {
  // var expression = document.getElementById("in").textContent;
  var result = eval(document.getElementById("in").textContent);
  document.getElementById("out").textContent = result;
}

function clearResult() {
  
  document.getElementById("in").textContent = "";
  document.getElementById("out").textContent = "0";
}
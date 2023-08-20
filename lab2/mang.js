let thelist = [
  "'Lauren'",
  "'Kevin'",

  "true",
  35,
  "null",
  "undefined",
  "'one'",
  "'two'",
];
let output = document.getElementById("output");
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");
let op4 = document.getElementById("op4");
let op5 = document.getElementById("op5");
let op6 = document.getElementById("op6");
let lock = document.getElementById("lock");

output.innerHTML = thelist;

op1.addEventListener("click", function () {
  thelist.shift();
  output.innerHTML = thelist;
});
op2.addEventListener("click", function () {
  thelist.pop();
  output.innerHTML = thelist;
});
op3.addEventListener("click", function () {
  thelist.splice(0, 0, "FIRST");
  output.innerHTML = thelist;
});
op4.addEventListener("click", function () {
  thelist.splice(3, 0, "Hello World");
  output.innerHTML = thelist;
});
op5.addEventListener("click", function () {
  thelist.splice(2, 0, "middle");
  output.innerHTML = thelist;
});
op6.addEventListener("click", function () {
  thelist.splice(thelist.length, -1, "LAST");
  output.innerHTML = thelist;
});

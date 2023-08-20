 const bcc = document.querySelectorAll(".bcc li");
var bcc1 = [];
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    bcc1.push(i + " x " + j + " = " + i * j);
  }
};
var i = 0;
bcc.forEach((element) => {
  element.innerText = bcc1[i];
  i++;
});

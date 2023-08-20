function playGame(ten) {
  var choices = ["rock", "paper", "scissors"];
  var computerChoice = choices[Math.floor(Math.random() * choices.length)];

  var result = document.getElementById("result");
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");

  if (ten === computerChoice) {
    if (ten === "rock" && computerChoice === "rock") {
      result.innerHTML = "Hòa";
      img1.innerHTML = ' <img src="bua.jpg">';
      img2.innerHTML = ' <img src="bua.jpg">';
    } else if (ten === "paper" && computerChoice === "paper") {
      result.innerHTML = "Hòa";
      img1.innerHTML = ' <img src="bao.jpg">';
      img2.innerHTML = ' <img src="bao.jpg">';
    } else if (ten === "scissors" && computerChoice === "scissors") {
      result.innerHTML = "Hòa";
      img1.innerHTML = ' <img src="keo.jpg">';
      img2.innerHTML = ' <img src="keo.jpg">';
    }
  } else if (
    (ten === "rock" && computerChoice === "scissors") ||
    (ten === "paper" && computerChoice === "rock") ||
    (ten === "scissors" && computerChoice === "paper")
  ) {
    if (ten === "rock" && computerChoice === "scissors") {
      result.innerHTML = "Thắng";
      img1.innerHTML = '<img src="bua.jpg">';
      img2.innerHTML = '<img src="keo.jpg">';
    } else if (ten === "paper" && computerChoice === "rock") {
      result.innerHTML = "Thắng";
      img1.innerHTML = '<img src="bao.jpg">';
      img2.innerHTML = '<img src="bua.jpg">';
    } else if (ten === "scissors" && computerChoice === "paper") {
      result.innerHTML = "Thắng";
      img1.innerHTML = '<img src="keo.jpg">';
      img2.innerHTML = '<img src="bao.jpg">';
    }
  } else {
    if (ten === "rock" && computerChoice === "paper") {
      result.innerHTML = "Thua";
      img1.innerHTML = ' <img src="bua.jpg">';
      img2.innerHTML = ' <img src="bao.jpg">';
    } else if (ten === "paper" && computerChoice === "scissors") {
      result.innerHTML = "Thua";
      img1.innerHTML = ' <img src="bao.jpg">';
      img2.innerHTML = ' <img src="keo.jpg">';
    } else if (ten === "scissors" && computerChoice === "rock") {
      result.innerHTML = "Thua";
      img1.innerHTML = ' <img src="keo.jpg">';
      img2.innerHTML = ' <img src="bua.jpg">';
    }
  }
}

let height = document.getElementById("height");
let weight = document.getElementById("weight");
let output1 = document.getElementById("output1");
let output2 =document.getElementById("output2");
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let a = parseFloat(height.value);
        let b = parseFloat(weight.value);
        let all = (b/(a*a)).toFixed(2);
        output1.innerHTML = all;
        if(a>=3){
            output1.innerHTML="Vui Lòng nhập lại chiều cao";
        }
        else{
            if(all<18.5){
                output1.innerHTML=all;
                output2.innerHTML="Bạn thiếu cân gòi";
            }
            else if(all>=18.5 && all<25){
                output1.innerHTML=all;
                output2.innerHTML="Khá đó thằng nhóc";
            }
            else if(all>=25 && all<30){
                output1.innerHTML=all;
                output2.innerHTML="Dừng lại đi :0";
            }
            else{
                output1.innerHTML=all;
                output2.innerHTML="Chúc mừng bạn đã béo phì";
            }
        }
    }
  });
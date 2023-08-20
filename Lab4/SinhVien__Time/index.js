const input = document.querySelectorAll("form input");
const button = document.querySelector("button");
// const menu = document.querySelector(".catalog select");
const title = document.querySelector(".title");
const label = document.querySelectorAll("label");
const item__info = document.querySelector(".item__info");
var inventory = [];

function timeOut() {
    var currentDateTime = new Date();

    var day = currentDateTime.getDay();
    var month = currentDateTime.getMonth() + 1;
    var year = currentDateTime.getFullYear();
    var h = currentDateTime.getHours();
    var m = currentDateTime.getMinutes();
    var s = currentDateTime.getSeconds();

    return {
        h: h,
        m: m,
        s: s,
        day: day,
        month: month,
        year: year
    }
}


// function Item(name, model, cost, quantity) {
//     this.name = name;
//     this.model = model;
//     this.cost = cost;
//     this.quantity = quantity;
// }
// var labelValue = ["name"];
var j = 1;
var i = 0;
window.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        setTimeout(timeOut, 1000);

        var sinhvien = {
            name: `${input[0].value}`,
            point: `${input[1].value}`,
        }
        inventory.push(sinhvien);
        item__info.insertAdjacentHTML("beforeend",
            `<li>${j}</li>
            <li>${sinhvien.name }</li>
            <li>${sinhvien.point }</li>
            <li>${hocluc(sinhvien.point) }</li>
            <li>${ketqua(sinhvien.point) }</li>
            <li>${timeOut().day}/${timeOut().month}/${timeOut().year} ${timeOut().h}:${timeOut().m}:${timeOut().s}</li>`
        );
        // item__info.forEach(e => {
        //     if(e.getAttribute("value") === "Name") {
        //         e.innerText = item.name;
        //     }
        // });
        j++;
        // label.forEach(e => {
        //     e.classList.remove("fix");
        // });
        input.forEach(e => {
            e.value = "";
        });
        label.forEach(e => {
            e.classList.remove("fix");
            input[0].focus();
            label[0].classList.add("fix");
        })
        // if(e.key === "Tab") {
        //     alert("haha");
        //     label[i + 1].classList.add("fix");
        //     i++;
        //     if(i === label.length){
        //         i = 0;
        //     }
        // }
    } else if (e.key === "Tab") {
        label[i].classList.add("fix");
        i++;
        if (i === label.length) {
            i = 1;
        }
    }

});

for (let i = 0; i < label.length; i++) {
    label[i].addEventListener("click", () => {
        label[i].classList.add("fix");
        input[i].focus();
        window.addEventListener("keydown", e => {
            if (e.key === "Tab") {
                label[i + 1].classList.add("fix");
                i++;
            }
        });
    });
}


for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("click", () => {
        label[i].classList.add("fix");
        window.addEventListener("keydown", e => {
            if (e.key === "Tab") {
                label[i + 1].classList.add("fix");
                i++;
            }
        });
    });

}

// menu.addEventListener("change", () => {
//     if (menu.value === "Nhap") {
//         title.innerText = "Nhập Sản Phẩm";
//     } else if (menu.value === "Xuat") {
//         title.innerText = "Xuất Sản Phẩm";
//     }
// });



button.addEventListener("click", () => {
    var sinhvien = {
        name: `${input[0].value}`,
        point: `${input[1].value}`,
    }
    inventory.push(sinhvien);
    item__info.insertAdjacentHTML("beforeend",
        `<li>${j}</li>
    <li>${sinhvien.name }</li>
    <li>${sinhvien.point }</li>
    <li>${hocluc(sinhvien.point) }</li>
    <li>${ketqua(sinhvien.point) }</li>
    <li>${timeOut().h}:${timeOut().m}:${timeOut().s}</li>`
    );
    // item__info.forEach(e => {
    //     if(e.getAttribute("value") === "Name") {
    //         e.innerText = item.name;
    //     }
    // });
    j++;
    // input.reset();
    // label.forEach(e => {
    //     e.classList.remove("fix");
    // });

    input.forEach(e => {
        e.value = "";
    });

});

function hocluc(point) {
    if (point >= 0 && point < 5) {
        return "Yếu";
    } else if (point >= 5 && point < 6.5) {
        return "Trung Bình";
    } else if (point >= 6.5 && point < 8) {
        return "Khá";
    } else if (point >= 8 && point < 9) {
        return "Giỏi";
    } else {
        return "Xuất Sắc";
    }
}

function ketqua(point) {
    if (point >= 5) {
        return "Đậu";
    } else {
        return "Rớt";
    }
}
// Q1: Cách để lấy position in array khi click
// Q2: Khi click button or nhấn enter vẫn còn bị lỗi hiển thị trong các
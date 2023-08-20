const windown__open = document.querySelector(".windown__open");
const windown__close = document.querySelector(".windown__close");
const windown__check = document.querySelector(".windown__check");

var a;
windown__open.addEventListener("click", () => {
    a = window.open("http://google.com", "Google" ,"toolbar = yes, menubar = yes, width = 150");
});

windown__close.addEventListener("click", () => {
    if(a) {
        a.close();
    }

});

windown__check.addEventListener("click", () => {
    if(a) {
        if(a.closed) {
            alert("close")
        } else {
            alert("open");
        }
    }

});

// Q1: windown.close() không hoạt động trên google chrome
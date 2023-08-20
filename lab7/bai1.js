const boxes = document.querySelectorAll(".box"),
 img = document.querySelectorAll(".box.img");
 console.log(boxes,img);

boxes.forEach(box => {
    box.addEventListener("dragover", e=> {
        e.preventDefault();
        // console.log.apply("dragging")
        box.classList.add("hovered");
    });
    box.addEventListener("dragleave", ()=>{
        box.classList.remove("hovered");
    });
    box.addEventListener("drop", () =>{
        box.appendChild(img);
    })
});
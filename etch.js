const container = document.querySelector("#canvas");

for (let i = 0; i < 16 * 16; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    })
    div.classList.add("squares");
    container.appendChild(div);
}


const newSize = document.querySelector("#refresh");
const input = document.querySelector("#pixels");

newSize.addEventListener("click", () => {
    let size = input.value;
    if (size < 1) {
        size = 16;
    }
    if (size > 100) {
        size = 100;
    }
    let children = document.querySelectorAll(".squares");
    for (const child of children) {
        child.remove();
    }

    for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "black";
    })
    let width = (100 / size)  + "%";
    //console.log(width);
    
    div.classList.add("squares");
    div.style.width = width;
    container.appendChild(div);
    }
});

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
    let children = document.querySelectorAll(".squares");
    for (const child of children) {
        child.style.backgroundColor = "white";
    }
});
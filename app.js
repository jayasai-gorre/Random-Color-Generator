let btn = document.querySelector("button");

btn.addEventListener("click", setColor);

function setColor() {
    let clr = generateRandom();

    let para = document.querySelector("p");
    para.innerText = clr;

    let div = document.querySelector(".container");
    div.style.backgroundColor = clr;

    // btn.style.backgroundColor = clr;

    console.log(clr);
}

function generateRandom() {
    let red =  Math.floor(Math.random() * 255);
    let green =  Math.floor(Math.random() * 255);
    let blue =  Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}
function addClass(containerDiv,className){
    console.log(containerDiv.classList)
    containerDiv.classList.add(className)
}

function fizz(divisor, square, number){
    
    if(divisor && number % divisor=== 0){
        addClass(square, "fizz")
    }
}

function buzz(divisor, square,number){
    if(divisor && number % divisor === 0 ){
        addClass(square,"buzz")
    }
}

function createMatrix(dimension, container, divisorfizz, divisorbuzz) {
    let counter = 1;
    const total = dimension * dimension;

    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
    container.style.gap = "10px";

    for (let i = 0; i < total; i++) {
        const content = document.createElement("div");
        addClass(content, "content");
        content.textContent = counter;

        fizz(divisorfizz, content, counter);
        buzz(divisorbuzz, content, counter);

        if (divisorfizz && divisorbuzz && counter % divisorfizz === 0 && counter % divisorbuzz === 0) {
            addClass(content, "fizzbuzz");
        }

        container.appendChild(content);
        counter++;
    }
}

function bottonClicked(){
    console.log("Hiciste click")

    const dimensionInput = document.getElementById("dimension")
    const fizzInput = document.getElementById("fizz-divisor")
    const buzzInput = document.getElementById("buzz-divisor")

    const dimensionValue = parseInt(dimensionInput.value)
    const fizzValue = parseInt(fizzInput.value)
    const buzzValue = parseInt(buzzInput.value)

    const container= document.getElementById("matrix-container")
    createMatrix(dimensionValue,container,fizzValue,buzzValue)
}

document.addEventListener("DOMContentLoaded", function(){
    

    const btnGenerate= document.getElementById("generate")

    btnGenerate.addEventListener("click", bottonClicked)

})
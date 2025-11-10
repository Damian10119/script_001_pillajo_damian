function addClass(containerDiv,className){
    console.log(containerDiv.classList)
    containerDiv.classList.add(className)
}

function fizz(divisor, square, number){
    
    if(number%divisor==0){
        addClass(square, "fizz")
    }
}

function buzz(divisor, square,number){
    if(number % divisor == 0 ){
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

        if (counter % divisorfizz === 0 && counter % divisorbuzz === 0) {
            addClass(content, "fizzbuzz");
        }

        container.appendChild(content);
        counter++;
    }
}



document.addEventListener("DOMContentLoaded", function(){
    const container= document.getElementById("container")
    const dimension = 3
    createMatrix(dimension,container,2,3)


})
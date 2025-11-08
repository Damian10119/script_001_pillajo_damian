console.log ("Hola chicos soy Akabum Al-morhzar Al Sofá")

var a = "1"
var b = 2
var c = a+b

console.log ("El resultado es:", c)



function addClass(containerDiv,className){
    console.log(containerDiv.classList)
    containerDiv.classList.add(className)
}

document.addEventListener("DOMContentLoaded", function(){
    const containerDivs= document.querySelectorAll(".content")
    console.log(containerDivs)
    for (i=0; i < containerDivs.length; i++){
    addClass(containerDivs [i] ,"damian")}

    containerDivs.forEach((cualquiernombre)=> {
        addClass(cualquiernombre, "damian")
    })

})
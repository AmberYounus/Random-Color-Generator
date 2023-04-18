const container = document.querySelector(".container");
for (let index = 0; index < 30; index++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
}

const colorContainers = document.querySelectorAll(".color-container");
console.log(colorContainers);

//call the function
generateColors();

//generate the random color with code
function generateColors(){
    colorContainers.forEach((colorContainer)=>{
        const newColorCode = randomColor()
        console.log(newColorCode);
        colorContainer.style.backgroundColor = "#"+newColorCode;
        colorContainer.innerText = "#" +newColorCode;
    })
}
    function randomColor(){
        const chars = "0123456789abcdefgh";
        const colorCodeLength = 6;
        let colorCode  = "";
        for (let index = 0; index < colorCodeLength; index++) {
           const randomNum = Math.floor(Math.random()* chars.length);
           colorCode +=chars.substring(randomNum,randomNum+1)
           console.log(colorCode,randomNum);
            
        }
        return colorCode;   
}
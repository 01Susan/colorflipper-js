const hex = [0,1,2,4,5,6,7,8,9,"A","B","C","D","E","F"];
//hex color consit = #f15025;

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener('click',()=>{
    let hexColor = "#";
    for (let i =0; i<6;i++){
        hexColor += hex[getRandomNumber()];
        console.log(getRandomNumber());
    }
    color.textContent = hexColor;
    document.getElementById("container").style.background = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

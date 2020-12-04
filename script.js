const container = document.querySelector(".container");
const button = document.querySelector(".btn-start"); 
const display = document.querySelector(".display-hex");
const switchRgb = document.querySelector(".rgb");
const switchHex = document.querySelector(".hex");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
function randomFromRange(min,max){
  return Math.round((Math.random()*max-min)+min);
}
let switched;
function randomHex(){
    let randomCol = [];
    for(let i=0;i<6;i++){
      let random=Math.floor(Math.random()*16);
      randomCol.push(hex[random]);
    }  
    let color=`#${randomCol.join("")}`;
    display.innerText=color;
    container.style.setProperty("background-color",color);
  }
    function randomRGB(){
      console.log(this.classList);
    let rgbArr=[];
    for(let i=0; i<3; i++){
      rgbArr.push(randomFromRange(0,255));
    }
    let color=`rgb(${rgbArr.join(",")})`;
    display.innerText=color;
    container.style.setProperty("background-color",color);  
  }
button.addEventListener("click",()=>switchHex.classList.contains("active")?randomHex():randomRGB());
  switchHex.addEventListener("click",()=>{
  switchRgb.classList.remove("active");
  switchHex.classList.add("active");
  const baseColor = "#000000";
  display.innerText=baseColor;
  container.style.setProperty("background-color",baseColor);
  randomHex;
});
switchRgb.addEventListener("click",()=>{
  switchRgb.classList.add("active");
  switchHex.classList.remove("active");
  let black="rgb(0,0,0)"
  display.innerText=black;
    container.style.setProperty("background-color",black);
    randomRGB;
});

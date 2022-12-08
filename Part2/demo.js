
 const colorChangeButton= document.querySelector(".btn-submit");
 console.log(colorChangeButton);
 const body = document.body;
 const rgbTextHolder = document.querySelector(".rgb-text-holder");
 console.log(rgbTextHolder)
 const randomColor=()=>{
    const red= Math.floor(Math.random()*256);
    const green= Math.floor(Math.random()*256);
    const blue= Math.floor(Math.random()*256);
    const backgroundColor = `rgb(${red},${green},${blue})`;
    return backgroundColor
 }
 

 colorChangeButton.addEventListener("click",()=>{
  const backgroundColor=randomColor();
  body.style.backgroundColor =backgroundColor;
  rgbTextHolder.textContent =backgroundColor;
 })
// const domtoimage = require("./dom-to-image");

let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let color3 = document.querySelector('.color3');
let color4 = document.querySelector('.color4');

let css = document.querySelector('h3')
let body = document.getElementById("box");

// FUNCTION
function gradientChange(){
    body.style.background = 'linear-gradient(to right, '+
    color1.value+',' +color2.value+','+ color3.value+','+color4.value+')';

   
}

// ADD EVENT LISTENER

color1.addEventListener('input', gradientChange)
color2.addEventListener('input', gradientChange)
color3.addEventListener('input', gradientChange)
color4.addEventListener('input', gradientChange)

// SAVE THE IMAGE

var dwnld_btn= document.getElementById('dw_bt');

dwnld_btn.addEventListener('click',()=>{
    var image = document.getElementById('box');
    domtoimage.toPng(image).then((data)=>{
        // CREATING ELEMENT OF THE ANCHER TAG (<a></a>)
        var link = document.createElement('a');
        link.download = 'image.png';
        link.href = data;
        link.click();
    })
})
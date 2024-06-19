///yellow, blue, red, green 🧸​🐻​👶🏽​

const yellowBox= document.querySelectorAll('.yellowBox');
const greenBox= document.querySelectorAll('.greenBox');
const blueBox= document.querySelectorAll('.blueBox');
const redBox= document.querySelectorAll('.redBox');

yellowBox.forEach(element => {
    element.addEventListener('mouseover', ()=>{
       element.textContent= '💜​​'
    })
});


///yellow, blue, red, green 

const yellowBox= document.querySelectorAll('.yellowBox');
const greenBox= document.querySelectorAll('.greenBox');
const blueBox= document.querySelectorAll('.blueBox');
const redBox= document.querySelectorAll('.redBox');

let yellowEmojis= ['👶🏽','💜','🧸'];


if(yellowBox.length=== yellowEmojis.length){

    yellowBox.forEach((element, index) => {

        element.addEventListener('mouseover', ()=>{
                element.textContent= yellowEmojis[index];
            })
        })
    };



////Puedo hacer un array con los íconos con un index ++ conforme vaya pasando el mouse por encima
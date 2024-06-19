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

let redEmojis= ['🐶', '​🇻🇪​', '🏖️​' ];

if(redBox.length===redEmojis.length){
    redBox.forEach((element, index) => {
        element.addEventListener('mouseover', ()=>{
            element.textContent= redEmojis[index];
        })        
    });
}

let blueEmojis= ['💻​', '🎶​', '👨🏾‍💻​', '🏠​'];

if(blueBox.length===blueEmojis.length){
    blueBox.forEach((element, index) => {
        element.addEventListener('mouseover', ()=>{
            element.textContent= blueEmojis[index];
        })        
    });
}

let greenEmojis= ['😎​', '🏎️'];

if(greenBox.length===greenEmojis.length){
    greenBox.forEach((element, index) => {
        element.addEventListener('mouseover', ()=>{
            element.textContent= greenEmojis[index];
        })        
    });
}
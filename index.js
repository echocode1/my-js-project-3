function rollDice(){

    const userInput=document.getElementById('input-num').value;
const resultnum=document.getElementById('dice-text-result');
const imageResult=document.getElementById('dice-image-result');
let displaynum=[];
let displayImg=[];

    for(i=0; i < userInput; i++){
        let rolldice=Math.floor(Math.random() * 6)+ 1
        displaynum.push(rolldice);
        displayImg.push(`<img src='dice_image/${rolldice}.png' alt='my-dice-img'>`);
    }
    resultnum.textContent=displaynum.join(' → ');
    imageResult.innerHTML=displayImg.join('');
}
let slot1 = document.getElementById('slot1');
let slot2 = document.getElementById('slot2');
let slot3 = document.getElementById('slot3');



let values =['😎','😂','😉','🤦‍♀️','🤣','😍','😉'];

function getRandomValue(){
    return values[parseInt(Math.random()*7)];
}

setInterval(()=>{
   slot1.innerText =getRandomValue();
   slot2.innerText =getRandomValue();
   slot3.innerText =getRandomValue();
},100)

let inpSpeed = document.getElementById('inpSpeed')

inpSpeed.onchange = function(ev){

    //document.documentElement => this is "root" of CSS
    //console.log()
    document.documentElement.style.setProperty('--speed',ev.target.value)
}

let btnStart = document.getElementById('btnStart')
let btnStop = document.getElementById('btnStop')

btnStart.addEventListener('click',function(){
    btnStart.style.animationPlayState = 'paused';
})



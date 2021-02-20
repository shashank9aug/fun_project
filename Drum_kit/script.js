var noOfButton=document.querySelectorAll(".drum").length;

for(var i=0;i<noOfButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){  
       
       var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML)
        buttonAnimation(buttonInnerHTML)      
     })
}

/*
 var audio=new Audio('sounds/snare.mp3')
        audio.play() 
*/

document.addEventListener('keypress', function(){
    //alert("kladsfjfda")
    makeSound(event.key)
    buttonAnimation(event.key)
})


function makeSound(key){
      
    switch (key) {
        case "w":
            var audio=new Audio('sounds/crash.mp3')
            audio.play() 
            break;
        case "a":
            var crash=new Audio('sounds/kick-bass.mp3')
            crash.play() 
            break;
        case "s":
            var kick=new Audio('sounds/snare.mp3')
            kick.play() 
            break;
        case "d":
            var snare=new Audio('sounds/tom-1.mp3')
            snare.play() 
            break;
        case "j":
            var tom=new Audio('sounds/tom-2.mp3')
            tom.play() 
            break;
        case "k":
            var  tom2=new Audio('sounds/tom-2.mp3')
          tom2.play() 
            break;
        case "l":
            var tom2=new Audio('sounds/tom-3.mp3')
            tom2.play() 
            break;
        default:
            console.log('buttonInnerHTML')
    }

}

function buttonAnimation(currentKey){
  
    var activebutton=document.querySelector("."+ currentKey);

    activebutton.classList.add('pressed')

    setTimeout(function(){
        activebutton.classList.remove('pressed')
    },100)
}
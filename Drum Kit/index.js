for (var index=0; index < document.querySelectorAll(".drum").length; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click", function(){
        playMusic(this.innerHTML);
        pressButton(this.innerHTML);
        setTimeout(pressButton(this.innerHTML), 1000);
    });
    document.addEventListener("keydown", function(input){
        playMusic(input.key);
        console.log(this);
        pressButton(input.key);
        setTimeout(pressButton(input.key), 1000);
    })
}

function playMusic(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();    
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();    
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();    
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();    
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();    
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();    
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();    
            break;            
        default: 
            console.log();
            break;
    }
}

function pressButton(currentKey) {
    document.querySelector("." + currentKey).classList.toggle("pressed");
}
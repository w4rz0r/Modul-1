//defining all our global variables pointing to the different DIVs we need reference to
var bottomRow = document.getElementById('bottomRow');
var stats = document.getElementsByClassName('stats');
var charizardStats = document.getElementById('charizardStats');
var charizardHP = document.getElementById('charizardHP');
var gardevoirHP = document.getElementById('gardevoirHP');
var charizardStats = document.getElementById('charizardStats');

//define health variables
var charHP = 160;
var gardeHP = 130;

//music variables
var battleMusic = document.getElementById('myAudio');
var musicControls = document.getElementById('music-Controls');
var state = "on";

//on startpress begins battle, makes stats visible and plays background music.
function beginBattle() {
    bottomRow.innerHTML = "<br><br><br><br><h2>a wild gardevoir appeared!</h2>";
    for (var i = 0; i < stats.length; i++){
        stats[i].style.visibility = "visible";
    }
    battleMusic.play();
    battleMusic.volume = 0.05;
}
//mute function with play/pause that also swaps the picture content of the audio div.
function mute() {
    if (state === "off"){
        state = "on";
        musicControls.innerHTML = "<img src='https://www.shareicon.net/data/128x128/2015/08/12/83975_mute_512x512.png' onclick=\"mute();\">"
        battleMusic.play();
    } else {
        state = "off";
        musicControls.innerHTML = "<img src='https://www.freeiconspng.com/thumbs/sound-off-icon/sound-off-music-mute-off-sound-speaker-volume-icon-16.png' onclick=\"mute();\">"
        battleMusic.pause();
    }
}

//gardevoir attack moves and HTML.
function gardeAttack() {
    var attackChoise = Math.ceil(Math.random()*4);
    if (attackChoise == 1) {
        var hitChance = Math.round(Math.random()*10)
            if (hitChance <5){
                var dmg = Math.round(Math.random()*10)+30;
                charHP -= dmg;
                if (charHP < 0){
                charHP = 0;
            }
        bottomRow.innerHTML += "<br><br>Gardevoir used MoonBlast dealing " + dmg + 
            " Damage,<br> you now have " + charHP + " health remaining."
                var charHPBarWidth = (charHP/160)*350;
                charizardHP.style.width = charHPBarWidth + "px";
    } else {
        bottomRow.innerHTML += "<br><br>Gardevoir missed!";
    } 
    if (charHP == 0){
        bottomRow.innerHTML = "<br><br><br><br><h3>Crarizard Fainted!</h3>"
        charizardStats.style.visibility = "hidden";
    }

    //attack move number 2.
    } else if (attackChoise == 2) {
        var hitChance = Math.round(Math.random()*10)
    if (hitChance <5){
        var dmg = Math.round(Math.random()*10)+30;
        charHP -= dmg;
        if (charHP < 0){
            charHP = 0;
        }
        bottomRow.innerHTML += "<br><br>Gardevoir used Psychic dealing " + dmg + 
        " Damage,<br> you now have " + charHP + " health remaining."
            var charHPBarWidth = (charHP/160)*350;
            charizardHP.style.width = charHPBarWidth + "px";
    } else {
        bottomRow.innerHTML += "<br><br>Gardevoir missed!";
    }
    if (charHP == 0){
        bottomRow.innerHTML = "<br><br><br><br><h3>Crarizard Fainted!</h3>"
        charizardStats.style.visibility = "hidden";
    }

    //attac move number 3.
    } else if (attackChoise == 3) {
        var hitChance = Math.round(Math.random()*10)
    if (hitChance <5){
        var dmg = Math.round(Math.random()*10)+30;
        charHP -= dmg;
        if (charHP < 0){
            charHP = 0;
        }
        bottomRow.innerHTML += "<br><br>Gardevoir used PsyShock dealing " + dmg + 
        " Damage,<br> you now have " + charHP + " health remaining."
        var charHPBarWidth = (gardeHP/160)*350;
        charizardHP.style.width = charHPBarWidth + "px";
    } else {
        bottomRow.innerHTML += "<br><br>Gardevoir missed!";
    }
    if (charHP == 0){
        bottomRow.innerHTML = "<br><br><br><br><h3>Crarizard Fainted!</h3>"
        charizardStats.style.visibility = "hidden";
    }

    //attack move number 4.
    } else {
        var hitChance = Math.round(Math.random()*10)
    if (hitChance <5){
        var dmg = Math.round(Math.random()*10)+30;
        charHP -= dmg;
        if (charHP < 0){
            charHP = 0;
        }
        bottomRow.innerHTML += "<br><br>Gardevoir used Thunder dealing " + dmg + 
        " Damage,<br> you now have " + charHP + " health remaining."
        var charHPBarWidth = (gardeHP/160)*350;
        charizardHP.style.width = charHPBarWidth + "px";
        } else {
        bottomRow.innerHTML += "<br><br>Gardevoir missed!";
        }
        if (charHP == 0){
            bottomRow.innerHTML = "<br><br><br><br><h3>Crarizard Fainted!</h3>"
            charizardStats.style.visibility = "hidden";
        }
    }
}



//players attack moves.
function DragonClaw() {
    var hitChance = Math.round(Math.random()*10)
    if (hitChance <5){
        var dmg = Math.round(Math.random()*10)+30;
        gardeHP -= dmg;
        if (gardeHP < 0){
            gardeHP = 0;
        }
        bottomRow.innerHTML = "<br><br>Charizard used DragonClaw dealing " + dmg + 
        " Damage,<br> Gardevoir has " + gardeHP + " health remaining."
        var gardeHPBarWidth = (gardeHP/130)*350;
        gardevoirHP.style.width = gardeHPBarWidth + "px";
    } else {
        bottomRow.innerHTML = "<br><br>Charizard missed!";
    }
    if (gardeHP == 0){
        bottomRow.innerHTML = "<br><br><br><br><h3>Gardevoir Fainted!</h3>"
        charizardStats.style.visibility = "hidden";
        }
        else {
        gardeAttack()
    }
}
//player attack move 2
function FireBlast() {
    var hitChance = Math.round(Math.random()*10)
    if (hitChance <3){
        var dmg = Math.round(Math.random()*20)+40;
        gardeHP -= dmg;
        if (gardeHP < 0){
            gardeHP = 0;
        }
        bottomRow.innerHTML = "<br><br>Charizard used FireBlast dealing " + dmg + 
        " Damage,<br> Gardevoir has " + gardeHP + " health remaining."
        var gardeHPBarWidth = (gardeHP/130)*350;
        gardevoirHP.style.width = gardeHPBarWidth + "px";
        } else {
            bottomRow.innerHTML = "<br><br>Charizard missed!";
        }
        if (gardeHP == 0){
            bottomRow.innerHTML = "<br><br><br><br><h3>Gardevoir Fainted!</h3>"
            charizardStats.style.visibility = "hidden";
        }
        
        else {
            gardeAttack()
        }
}
//player attack move 3
function Overheat() {
    var hitChance = Math.round(Math.random()*10)
    if (hitChance <5){
        var dmg = Math.round(Math.random()*60)+10;
        gardeHP -= dmg;
        if (gardeHP < 0){
            gardeHP = 0;
        }
        bottomRow.innerHTML = "<br><br>Charizard used Overheat dealing " + dmg + 
        " Damage,<br> Gardevoir has " + gardeHP + " health remaining."
        var gardeHPBarWidth = (gardeHP/130)*350;
        gardevoirHP.style.width = gardeHPBarWidth + "px";
        } else {
            bottomRow.innerHTML = "<br><br>Charizard missed!";
        }
        if (gardeHP == 0){
        bottomRow.innerHTML = "<br><br><br><br><h3>Gardevoir Fainted!</h3>"
        charizardStats.style.visibility = "hidden";
        }
        else {
            gardeAttack()
        }
}
//player attack move 4
function Gust() {
    var hitChance = Math.round(Math.random()*10)
    if (hitChance <8){
        var dmg = Math.round(Math.random()*15)+10;
        gardeHP -= dmg;
        if (gardeHP < 0){
            gardeHP = 0;
        }
        bottomRow.innerHTML = "<br><br>Charizard used Gust dealing " + dmg + 
        " Damage,<br> Gardevoir has " + gardeHP + " health remaining."
        var gardeHPBarWidth = (gardeHP/130)*350;
        gardevoirHP.style.width = gardeHPBarWidth + "px";
        } else {
            bottomRow.innerHTML = "<br><br>Charizard missed!";
        }
        if (gardeHP == 0){
            bottomRow.innerHTML = "<br><br><br><br><h3>Gardevoir Fainted!</h3>"
            charizardStats.style.visibility = "hidden";
        } 
        {
            gardeAttack()
        }
}
//reset gamestate.
function restartGame() {
    charHP = 160;
    gardeHP = 130;
    stats.style.visibility = "visible";
    beginBattle();
}
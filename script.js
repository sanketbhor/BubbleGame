var timmer = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreInt").textContent = score;
}

function makeHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitrn;
}

function bubbleGen(){
var clutter = "";
for(var i = 1; i <= 96; i++) {
    var rn = Math.floor(Math.random()*10) ;
    clutter += `<div id="bubble"><h3>${rn}</h3></div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function time(){
var time = setInterval(() => {
    if(timmer > 0){
        timmer--;
        document.querySelector("#time").innerHTML = timmer;
    }else{
        clearInterval(time);
        document.querySelector("#pbtm").innerHTML = `<h2 style="color: black">Game Over</h2>`
    }
}, 1000);
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        makeHit();
        bubbleGen();
    }
})

makeHit();
time();
bubbleGen();

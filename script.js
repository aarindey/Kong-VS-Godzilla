score=0; 
var cross=true;
audioJump=new Audio('jump.mp3');
audioGame=new Audio('game.mp3');
audioOver=new Audio('gameover.mp3'); 
;
document.onkeydown=function(e){
    audioGame.play()
    if(e.keyCode==38){
        audioJump.play();
        setTimeout(() => {
            audioJump.stop();
        }, 500);
kong=document.querySelector('.kong');
kong.classList.add("animateKong");
setTimeout(() => {
    kong.classList.remove("animateKong");
}, 900);
    }
    if(e.keyCode==39)
    {
        kong=document.querySelector('.kong');
        kongX=parseInt(window.getComputedStyle(kong,null).getPropertyValue('left'));
        kong.style.left=kongX+100+"px";
    }
    if(e.keyCode==37)
    {
        kong=document.querySelector('.kong');
        kongX=parseInt(window.getComputedStyle(kong,null).getPropertyValue('left'));
        kong.style.left=(kongX-100)+"px";
    }
}
setInterval(() => {
    kong=document.querySelector(".kong");
    gameOver=document.querySelector(".gameOver");
    godzilla=document.querySelector(".godzilla");
    kx=parseInt(window.getComputedStyle(kong,null).getPropertyValue('left'));
    ky=parseInt(window.getComputedStyle(kong,null).getPropertyValue('top'));
    gx=parseInt(window.getComputedStyle(godzilla,null).getPropertyValue('left'));
    gy=parseInt(window.getComputedStyle(godzilla,null).getPropertyValue('top'));
    offsetX=Math.abs(kx-gx);
    offsetY=Math.abs(ky-gy);
  
    if(offsetX<93&&offsetY<52){
        gameOver.style.visibility='visible';
        godzilla.classList.remove("animateGodzilla");
        audioOver.play();
      setTimeout(() => {
          audioJump.pause();
          audioOver.pause();
          audioGame.pause();
      }, 4000);
    }
    else if(cross&&offsetX<145)
    {
        score=score+1;
updateScore(score);
cross=false;
setTimeout(() => {
    cross=true;
}, 950);
setTimeout(() => {
    aniDur=parseFloat(window.getComputedStyle(godzilla,null).getPropertyValue('animation-duration'));
    newDur=aniDur-0.1;
    godzilla.style.animationDuration=newDur+'s';
}, 800);

    }
}, 10);
function updateScore(score){
scoreCont.innerHTML="Your Score: "+score
}
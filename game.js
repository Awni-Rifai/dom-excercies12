/* TODO implement game logic here */
Labyrinth();
window.addEventListener('load',function(){
    Labyrinth.printConsole();
    Labyrinth.displayChar();
    Labyrinth.displayEnd();
})


let i=5;
//convert to string;
i=i+"";
//i="5";
counterX=0;
counterY=0;
document.addEventListener("keydown",function(e){
   const char= document.querySelector('.char');
    if(e.key==="ArrowRight"){
        if((counterY>=160 && counterY<=180) && counterX===280){
            window.alert("Congratulations!");
        }    
        //counterY 120 to 320
        if(counterX===110 &&(counterY<80 || (counterY>120 && counterY<320)))return;
        if(counterX===280)return;
        //x=270 y80 110
        
        if(counterX>260 &&(counterY>=80 && counterY<160))
        return;
       counterX+=10;
        char.style.left=`${counterX}px`

    }
    if(e.key==="ArrowLeft"){
    if(counterY>30 && counterX===80)return
       counterX-=10;
        char.style.left=`${counterX}px`

    }
    
   if(e.key==="ArrowUp"){
       if((counterY>60 && counterY<110) &&(counterX>130) )return;
       if(counterY<0)return;
       counterY-=10;
       char.style.top=`${counterY}px`
   }
   if(e.key==="ArrowDown"){
       if(counterY>=100 && (counterX>120 && counterX<230))return;
       if(counterX>230 && counterY>180)return;
       console.log(counterY,counterX);
      
       if(counterY===30 &&counterX<80)return;
       if(counterY>340)return;
       
       counterY+=10;
       char.style.top=`${counterY}px`
   }
   
});


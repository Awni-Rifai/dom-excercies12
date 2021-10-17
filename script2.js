'use strict'
const body=document.querySelector('html');
const textEl=document.querySelector('#mydiv');
textEl.style.backgroundColor="blue";
let counter=1;
/*First EX*/
// textEl.addEventListener('click',function(){
//     if(counter===0)textEl.style.backgroundColor="blue";
//     if(counter===1)textEl.style.backgroundColor="red";
//     if(counter===2)textEl.style.backgroundColor="green";
//     if(counter===2){
//         counter=0;
//         return ;
    
//     }

//     counter++;
    

// })
/*-------------------------------------------*/
/*Random colors*/
const colors=['red','blue','green','yellow','black'];
textEl.addEventListener('click',function(){
    const num=Math.floor(Math.random()*5);
    
    textEl.style.backgroundColor=colors[num];

})
/*----------------------------------------------*/

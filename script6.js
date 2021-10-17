'use strict'
const btn1=document.querySelector('#p1_show a');

const html=document.querySelector('html'); 
const btn2=document.querySelector('#p2_show a');
const btn3=document.querySelector('#p3_show a');
const p1=document.querySelector('#p1_text');
const p2=document.querySelector('#p2_text');
const p3=document.querySelector('#p3_text');
const h1=document.querySelector('#p1_text p a');
const h2=document.querySelector('#p2_text p a');
const h3=document.querySelector('#p3_text p a');
btn1.style.display="inline-block";
p1.style.display="none";
btn2.style.display="inline-block";
        p2.style.display="none";
        btn3.style.display="inline-block";
        p3.style.display="none";
html.addEventListener('click',function(e){
   
    if(e.target===btn1){
        
        btn1.style.display="none";
        p1.style.display='block';
        
    }
    if(e.target===h1){
        btn1.style.display="inline-block";
        p1.style.display="none";
        
    }
    /*___________________________*/
    if(e.target===btn2){
        btn2.style.display="none";
        p2.style.display='block';
        
    }
    if(e.target===h2){
        btn2.style.display="inline-block";
        p2.style.display="none";
    }
    /*______________________________________*/
    if(e.target===btn3){
        btn3.style.display="none";
        p3.style.display='block';
        
    }
    if(e.target===h3){
        btn3.style.display="inline-block";
        p3.style.display="none";
    }
})
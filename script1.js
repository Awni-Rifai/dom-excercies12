'use strict'
const body=document.querySelector('html');
const textEl=document.querySelector('#mydiv');
body.addEventListener('mouseover',function(e){
    
    if(e.target===textEl)textEl.innerText="Can I help you?";
    else textEl.innerText="Hello world";


})


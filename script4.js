'use strict'
const font=document.querySelector('#font_family');
const fontSize=document.querySelector('#font_size');
const text=document.querySelector('#text');
const fontItalic=document.querySelector('#font_italic');
const fontBold=document.querySelector('#font_bold');
const fontUnderline=document.querySelector('#font_underline');
const form=document.querySelector('form');


font.addEventListener('change',function(e){
    const fontName=font.options[font.selectedIndex].value;
    
    text.style.fontFamily=fontName;
   
})
fontSize.addEventListener('change',function(){
    const fontSizeNum=fontSize.options[fontSize.selectedIndex].value;
    text.style.fontSize=fontSizeNum;
})
form.addEventListener('change',function(e){
    if(e.target===fontBold){
        if(e.target.checked)text.style.fontWeight="bold"
        else text.style.fontWeight="400"
    }
    if(e.target===fontUnderline){
        if(e.target.checked)text.style.textDecoration="underline";
        else text.style.textDecoration="none";
    }
    if(e.target===fontItalic){
        if(e.target.checked)text.style.fontStyle="italic";
        else text.style.fontStyle="normal";
    }
})
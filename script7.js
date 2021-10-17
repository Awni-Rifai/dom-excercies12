'use strict'
const input=document.querySelector('#songTextInput');
const btn=document.querySelector('#addButton');
btn.addEventListener('click',function(e){
    e.preventDefault;
    if(input.value==="")return;
    const markup=`<li>${input.value}</li>`
    document.querySelector('#playlist').insertAdjacentHTML('afterbegin',markup);
})
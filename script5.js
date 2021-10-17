const pass1=document.querySelector('#password1');

const pass2=document.querySelector('#password2');
const submitBtn=document.querySelector('#submitBtn');
const passChec1=document.querySelector('#pw1_check');
const passCheck2=document.querySelector('#pw2_check');
submitBtn.style.display="none"
//Add a listner for input change
const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();
    if(pass1.value!==pass2.value)passCheck2.innerText="Password is not the same";
    if(pass1.value.length<6)passChec1.innerText="Password must be larger than 6";
    

    if(pass2.value.length<6)passCheck2.innerText="Password must be larger than 6"
    
    
})

pass2.addEventListener('change',function(){
    const noError=pass1.value===pass2.value && pass1.value.length>6 && pass2.value.length>6;
    if(noError)submitBtn.style.display="block";
})
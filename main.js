let number=document.getElementById('number');
const decreaseBtn=document.getElementById('decreaseBtn');
const increaseBtn=document.getElementById('increaseBtn');
const resetBtn=document.getElementById('resetBtn');


let counter=0;
let zero='';
increaseBtn.addEventListener('click',function(){
    let count=counter+=1;
    number.innerHTML=`<h3 id="number">${count}<h3>`;
})

decreaseBtn.addEventListener('click',function(){
    let count2=counter-=1;
    number.innerHTML=`<h3 id="number">${count2}<h3>`;
})

resetBtn.addEventListener('click',function(){
    number.innerHTML=`<h3 id="number">${zero}<h3>`;
})
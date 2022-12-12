const ammount=document.getElementById('amount');
const rating=document.getElementById('rating');
const people=document.getElementById('people');
const button=document.getElementById('but');
const price=document.getElementById('price');
const serviceQuality={
    outstanding:0.3,
    Good:0.2,
    okay:0.15,
    bad:0.1,
    terrible:0.05

};



button.addEventListener('click',function(){
    let total;
    total=(ammount.value * serviceQuality[rating.value])/(people.value);
    price.innerText=total.toFixed(3)+'$';

})



const inc = document.getElementById('increaseBtn');
const dec = document.getElementById('DecreaseBtn');
const res = document.getElementById('resetBtn');
const cont = document.getElementById('container');
let count=0;

inc.onclick = function(){
    count++;
    cont.textContent = count;
}
dec.onclick = function(){
    if(count<1)
    return;
    else 
    count--;
    cont.textContent = count;
}
res.onclick = function(){
    count=0;
    cont.textContent = count;
}
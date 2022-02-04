// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn")
console

btns.forEach(function (btn) {
    btn.addEventListener('click', function(s){
        const style = s.currentTarget.classList
        if(style.contains('decrease')){
            count--;
        }
        else if(style.contains('increase')){
            count++;
        }
        
        else{
            count=0;
        }
        if(count>0){
            value.style.color = "green";
        }
        if(count<0){
            value.style.color = "red";
        }
        if(count==0){
            value.style.color = "black";
        }
        value.textContent = count;

    })
});
let counter=0;

const countDisplay = document.getElementById("counter");
const increaseBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");
const decrementBtn = document.getElementById("decrement");

increaseBtn.addEventListener("click",()=>{
    counter++;
    countDisplay.textContent=counter;
});

decrementBtn.addEventListener("click",()=>{
    counter--;
    countDisplay.textContent=counter;
});

resetBtn.addEventListener("click",()=>{
    counter=0;
    countDisplay.textContent=counter;
});
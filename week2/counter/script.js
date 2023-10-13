const number = document.getElementById('number');
const incre = document.getElementById('increase');
const decre = document.getElementById('decrease');

// console.log(number);
// console.log(incre);
// console.log(decre);

let num = 0;

incre.addEventListener("click",()=>{
    console.log("increase 가 클릭됨");
    num = num + 1;
    number.innerHTML = num;
})
decre.addEventListener("click",()=>{
      console.log("decrease 가 클릭됨");
      num = num - 1;
      number.innerHTML = num;
})
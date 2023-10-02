const mainButton = document.getElementById('main-btn');
const modalButton = document.getElementById('modal-btn');

const modal = document.getElementById('modal-control');
mainButton.addEventListener("click",()=>{
    modal.style.display = "block";
})
modalButton.addEventListener("click",()=>{
    modal.style.display = "none";
})
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const container = document.getElementById('container');

btnOpen.addEventListener('click',()=>{
    container.classList.add('active');
});
btnClose.addEventListener('click',()=>{
    container.classList.remove('active');
});

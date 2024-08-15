const sidebar=document.querySelector('.sidebar')
document.querySelector('.open').addEventListener('click',()=>{
    sidebar.classList.add('inc')
    sidebar.style.display='flex'
})
document.querySelector('.close').addEventListener('click',()=>{
    sidebar.style.display='none'
})
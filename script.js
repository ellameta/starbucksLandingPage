const main = document.querySelector('#starbucks')
const imgs = document.querySelectorAll('.thumb img')
const img1 =document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const circle = document.querySelector('.circle')
const starbucks = document.querySelector('.logo-name')

// loop and event clicker
for(img of imgs) {
    img.addEventListener('click', changeImg);
    img1.addEventListener('click', ()=> circle.style.backgroundColor='#017143')
    img2.addEventListener('click', ()=> circle.style.backgroundColor='#FFC0CB')
}



//function 
function changeImg(e){
    main.src = e.target.src
}




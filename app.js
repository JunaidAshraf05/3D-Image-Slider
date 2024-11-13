let item = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

// config param

let countItem = items.length;
let itemActive = 0;

//event next click 
next.onclick = Function(){
    itemActive = itemActive + 1;
    if(itemActive >=countitem){
        itemActive =0 ;
    }
    showSlider();

}
function showSlider(){
    //remove item active old
    let itemActiveOld = document.querySelector('.slider .list .item.active');
   let thumbnailActiveOld = document.querySelector('.thumnail .item.active');

    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    //active new item

}

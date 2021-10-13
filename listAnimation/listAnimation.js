window.onload =function(){
   
   const item=document.querySelectorAll('.item')


// item.style.color=('red')

// item[0].style.opacity=('0')

console.log(screen.width);
console.log(window.innerHeight);
console.log(item[0].offsetHeight);
console.log(item[0].getBoundingClientRect().top);
console.log(item[0].getBoundingClientRect().bottom);



const loadAnimation = ()=>{
   
let windowHeight=window.innerHeight;
// let distanceFromTop=item[0].getBoundingClientRect().top
let itemHeight=item[0].offsetHeight

item.forEach(item=>{

let itemHeight=item.offsetHeight
let distanceFromTop=item.getBoundingClientRect().top


if((windowHeight-distanceFromTop)>itemHeight/2){
   console.log('visivele');
   item.classList.remove('disAppear')
   item.classList.add('appear')
}else{
   item.classList.remove('appear')
   item.classList.add('disAppear')
}


})


}
loadAnimation()

window.onscroll =function(){
   loadAnimation()

}

}
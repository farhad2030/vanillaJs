window.onload=function(){

   const effect=document.querySelector("#effect");


   

   window.addEventListener('scroll',scrolleffect);
   function scrolleffect(){
      const position=effect.getBoundingClientRect().top;
const screenheight=window.innerHeight
console.log('height ' +document.getElementsByClassName('imgText')[0].offsetHeight);

   console.log(position);
      if(position<=300){
         console.log('500px');
         effect.style.opacity='1'
         effect.style.transform='translateX(0px)';
         effect.style.transition='all .5s'
      }else
      {
         console.log("<500px");
         effect.style.opacity='0';
         effect.style.transform='translateX(-50px)'
      }
   }
   scrolleffect()
}
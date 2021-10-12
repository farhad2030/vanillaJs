let section = document.querySelectorAll("section");
let link = document.querySelectorAll("header nav a");
window.onscroll = () => {
  section.forEach((sec) => {
   console.log('gsldfk');

    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    console.log(top);
    console.log(top + " " + offset + " " + height + " " + id);

    if(top>=offset && top<offset+height){
       link.forEach(link=>{
          link.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
       })
    }
  });
};
console.log("all right");

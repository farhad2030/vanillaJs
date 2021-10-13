window.onload = function () {
  let section = document.querySelectorAll("section");
  let link = document.querySelectorAll("header nav a");

  //   let a = link.getAttribute("href");
  //   console.log(a);

 

  const setActive = () => {
    // let wh = window.innerHeight;
    // section.forEach((section, index) => {
    //   let itemHeight = section.offsetHeight;
    //   let distanceFrombottom = section.getBoundingClientRect().bottom;
    //   console.log(distanceFrombottom);
    //   // if ((wh - distanceFromTop > itemHeight/3) &&(distanceFromTop >=0)) {
    //   //   console.log('dis ' + index);

    //   // //   console.log(link[index].getAttribute("href"));
    //   //   link[index].classList.add("active");

    //   // }
    //   if(distanceFrombottom >itemHeight/4){
    //     link[index].classList.add("active");
    //   }
    //   else {

    //     link[index].classList.remove("active");
    //   }
    // });

    let wh = window.innerHeight;

    section.forEach((sec, index) => {
      let bottom = section[index].getBoundingClientRect().bottom;
      let top = section[index].getBoundingClientRect().top;

      // console.log( 'bottom =' +sectionN_0 + ' top =' +sectionN_1 );
      // console.log(wh);

      // console.log(index + "=>" + top + " " + bottom);
      if (bottom > 0) {
        if (top <= wh * 0.8 && bottom > wh * 0.8) {
          link[index].classList.add("active");
          console.log("active");
        } else {
          link[index].classList.remove("active");
        }
      } else {
        link[index].classList.remove("active");
      }

      // if(sectionN_0<wh*.2 && sectionN_1 <wh*.2){
      //   link[index].classList.add("active");
      // }
      // else{
      //   link[index].classList.remove("active");
      // }
    });
  };

  // const oncli =(index)=>{
  //   console.log("index" + index);
  //   console.log('hh');

  // }
  window.onscroll = function () {
    setActive();
  };

  // const linkAppear = () => {
  // link.forEach((el, index) => {
  //   el.onclick=oncli(this)
  // });

 
  // };
};

console.log("all right");

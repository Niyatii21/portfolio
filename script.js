    const viewButton = document.querySelector("#home-button");
    const arrowRight = document.querySelector("#arrow-right");
    const arrowDown = document.querySelector("#arrow-down");
    const mainDiv = document.querySelector("#main");
    const aboutHome = document.querySelector("#about");
    const secondDiv = document.querySelector("#second");
    const talk = document.querySelector(".talk_");
    var timeout;
    
    // Handle mouse enter and leave events on the home button
    viewButton.addEventListener("mouseenter", function () {
        arrowRight.style.display = "none";
        arrowDown.style.display = "inline";
    });

    viewButton.addEventListener("mouseleave", function () {
        arrowRight.style.display = "inline";
        arrowDown.style.display = "none";
    });

    // Scroll to the main div when the home button is clicked
    viewButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        mainDiv.scrollIntoView({ behavior: "smooth" });
    });

   

    // Scroll to the second div when the about link is clicked
    aboutHome.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        secondDiv.scrollIntoView({ behavior: "smooth" });
    });

//    talk.addEventListener("click",function(event){
//     event.preventDefault();
//     const mailtoURL = "mailto:neginiyati21109@gmail.com";
//     window.location.href = mailtoURL;
//    })



    const scroll = new LocomotiveScroll({
        el: document.querySelector('#hii'),
        smooth: true
    });


function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        // console.log(dets);
         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale} ,${yscale})`;
    })
}

circleMouseFollower();


function firstpage() {
    var tl = gsap.timeline();

    // Animate .content
    tl.from(".content", {
        y: '-10',
        duration: 1.5,
        opacity: 0,
        ease: Expo.easeInOut
    })
    // Animate #nav
    .from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    // Animate .boundingelem
    .to(".boundingelem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay:-1,
        stagger: 0.2
    })
    .from("#second", {
        y: '-20',
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut,
    })
    .from("#me", {
        y: '-20',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
    // Animate footer
    .from("#footer", {
        y: '-30',
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut,
    });

}

firstpage();


function circleflatkro(){
         var xscale = 1;
         var yscale = 1;

         var xprev = 0;
         var yprev = 0;

    window.addEventListener("mousemove",function(dets){
         
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale= gsap.utils.clamp(.8,1.2,ydiff = dets.clientY- yprev);

        xprev = dets.clientX;
        yprev=dets.clientY;
        

        circleMouseFollower(xscale,yscale);

        timeout= setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(1,1)`;
        },100);

        
    });
}

circleflatkro();


// //mouse move
// document.querySelectorAll(".elem").forEach(function(elem){
//     var r = 0;
//     var diffrot=0;
//     elem.addEventListener("mousemove",function(dets){
//         // console.log("hello")
         
//         // console.log(dets.clientY - elem.getBoundingClientRect().top);
//         var diff = dets.clientY - elem.getBoundingClientRect().top;
//         //us elem mai jaha mouse move krra hai use imag ko target krne ke liye-
//         diffrot = dets.clientX - r;
//         r =dets.clientX;
//         gsap.to(elem.querySelector("img"),{
//             opacity:1,
//             ease: Power1,
//             top:diff,
//             left:dets.clientX,
//         });
  
       
//     })
// });
document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
    });
  
    elem.addEventListener("mousemove", function (dets) {
      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
    });
  });

  var date = new Date();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	document.querySelector("#date").innerHTML = current_time;


    // const down = document.querySelector(".download_resume");

    // down.

   
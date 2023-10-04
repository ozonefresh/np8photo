gsap.to(".navbar", {y: 10, ease: "bounce", duration: 4})
gsap.from(".one", {opacity: 0,  duration: 3, delay:1})
gsap.from(".two", {opacity: 0,  duration: 3, delay:2})
gsap.from(".three", {opacity: 0,  duration: 3, delay:3})
gsap.from(".four", {opacity: 0,  duration: 3, delay:4})
gsap.from(".five", {opacity: 0,  duration: 3, delay:5})

window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }




const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ["33.jpg", "34.jpg", ];

console.log(photos[3]);


let i = 0;

next.addEventListener("click", () => {
    i++;
    if (i > photos.length - 1){
        i = 0;
    }
    document.querySelector("#pictures").src = photos[i];
})

back.addEventListener("click", () => {
    i--;
    if (i < 0){
        i = photos.length - 1;
    }
    document.querySelector('#pictures').src = photos[i];
})


// old page
// gsap.to(".navbar", { y: 10, ease: "bounce", duration: 4 });
// gsap.from(".one", { opacity: 0, duration: 3, delay: 1 });
// gsap.from(".two", { opacity: 0, duration: 3, delay: 2 });
// gsap.from(".three", { opacity: 0, duration: 3, delay: 3 });
// gsap.from(".four", { opacity: 0, duration: 3, delay: 4 });
// gsap.from(".five", { opacity: 0, duration: 3, delay: 5 });

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("myBtn").style.display = "block";
//   } else {
//     document.getElementById("myBtn").style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
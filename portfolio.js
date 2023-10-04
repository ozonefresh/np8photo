// gsap.to(".navbar", {y: 10, ease: "bounce", duration: 4})
gsap.from(".one", {opacity: 0,  duration: 3, delay:1})
gsap.from(".two", {opacity: 0,  duration: 3, delay:2})
// gsap.from(".three", {opacity: 0,  duration: 3, delay:2})
gsap.from(".three", {opacity: 0,  duration: 3, delay:3})
gsap.from(".four", {opacity: 0,  duration: 3, delay:4})

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// SECTION CODE FOR RESPONSIVE NAVBAR
function Navbar() {
    var x = document.getElementById("responsive-navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }


  // SECTION CODE FOR SCROLL BACK TO TOP

var backtop = document.getElementById("backtop");
window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backtop.style.display = "block";
    } else {
     backtop.style.display = "none";
     }
    }
        
    function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
    }


//     // When the user scrolls the page, execute myFunction
// window.onscroll = function() {stickynav()};

// // Get the navbar
// var navbar = document.getElementById("responsive-navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function stickynav() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
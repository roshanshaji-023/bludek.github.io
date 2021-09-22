    document.getElementById("segment").onclick = function() {myFunction()};
    document.getElementById("segment1").onclick = function() {myFunction1()};
    document.getElementById("close1").onclick = function() {myFunction2()};
    document.getElementById("close2").onclick = function() {myFunction2()};
    document.getElementById("close3").onclick = function() {myFunction2()};
    document.getElementById("close4").onclick = function() {myFunction2()};

    function myFunction() {
     document.getElementById("navigation-div").style="width:60%";
     document.getElementById("segment1").style = "display:block";
     document.getElementById("segment").style = "display:none;";
     }
    function myFunction1() {
     document.getElementById("navigation-div").style="width:0%";
     document.getElementById("segment").style = "display:block;";
     document.getElementById("segment1").style = "display:none;";
     
   }
   function myFunction2() {
     document.getElementById("navigation-div").style="width:0%";
     document.getElementById("segment").style = "display:block;";
     document.getElementById("segment1").style = "display:none;";
     
   }

   /*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  distance: '30px',
  duration: 1800,
  reset: true,
});

sr.reveal(`.header,.header-text,.about-head, 
         .about-def-text,
         .services,service-text-def,
         .uidesigns`, {
  origin: 'top',
  interval: 200,
})

sr.reveal(`.about-def-text, .services-div2, .services-div1,
.services-div3,.services-div4`, {
  origin: 'left'
})

sr.reveal(`.about-def-img, .brands-head,.clients`, {
  origin: 'right'
})
   

   

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


   

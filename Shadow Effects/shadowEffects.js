/* 
Created By: Viktor Dominguez

Started: 11/19/2024 (MM/DD/YYYY)
Last Updated: 11/20/2024 (MM/DD/YYYY)

About: JavaScript for two functions: 1 for the changing viewport and 1 for the toggle button.
**STILL NOT COMPLETE**

Project to practice text and box shadow effects. At the end, there is an example of pricing cards which uses both styles of shadowing.

This is only meant as a tutorial and should only be taken as such. This is in no way a finished website.
*/

/* 
Created By: Viktor Dominguez

Started: 11/19/2024 (MM/DD/YYYY)
Last Updated: 11/20/2024 (MM/DD/YYYY)

About: JavaScript for two functions: 1 for the changing viewport and 1 for the toggle button.
**STILL NOT COMPLETE**

Project to practice text and box shadow effects. At the end, there is an example of pricing cards which uses both styles of shadowing.

This is only meant as a tutorial and should only be taken as such. This is in no way a finished website.
*/


function myFunc() {
  var x = document.getElementById("price-card-container");
  var y = document.getElementsByClassName("price-card");
  if (x.style.display === "block") {
    x.style.display = "flex";
    x.style.flexDirection = "row";
    x.style.justifyContent = "center";
    x.style.alignItems = "center";
    for(i=0;i<y.length;i++){
      y[i].style.margin = "0 5px";
      y[i].style.width = "fit-content";
      y[i].style.padding = "20px";
      y[i].style.height = "300px";
    }
  } else {
    x.style.display = "block";
    for(i=0;i<y.length;i++) {
      y[i].style.width = "100%";
      y[i].style.margin = "10px 0";
      y[i].style.position = "relative";
      // y[i].style.right = "5px";
      y[i].style.float = "top";
    }
    }
}

function myFunctionScreenSize(screen) {
  if (screen.matches) { // If media query matches
    var x = document.getElementById("price-card-container");
    var y = document.getElementsByClassName("price-card")
    
    x.style.display = "block";
    x.style.position = "absolute";
    x.style.left = "0px";
    x.style.width = "100%";
    for(i=0;i<y.length;i++){
      y[i].style.backgroundColor = "white";
      y[i].style.position = "relative";
      y[i].style.float = "top";
      y[i].style.overflowWrap = "break-word";
      y[i].style.margin = "10px";
      y[i].style.width = "90%";
      y[i].style.height = "calc(31% - 10px)";
      y[i].style.padding = "10px 0";
    }

  } /* else {
    for(i=0;i<y.length;i++){
      y[i].style.display = "inherit";
    }
  } */
}

// Create a MediaQueryList object
var screen = window.matchMedia("(max-width: 600px)")

// Call listener function at run time
myFunctionScreenSize(screen);

// Attach listener function on state changes
screen.addEventListener("change", function() {
  myFunctionScreenSize(screen);
});

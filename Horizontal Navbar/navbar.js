/*  
  Created By: Viktor Dominguez
  Created On: 10/30/2024 (MM/DD/YYYY)
  Last Updated: 11/06/2024 (MM/DD/YYYY)
  Created with the examples from W3 Schools CSS tutorials.
  
  Navbar examples that demonstrate how to build and use horizontal navbars.
  The navbars are built using lists and CSS.
  Feel free to use and change the code as this is not protected by any copyrights.
*/

// This will allow you to change the "active" class to the link you most recently clicked
// I have made an adjustment so that it only effects the 4th navbar class

// Cache the list, and the items
const list = document.querySelector(' .horizontal-navbar4 ul');
const links = list.querySelectorAll('a');

// Add one listener to the list element
list.addEventListener('click', handleClick);

// If the clicked element is a link remove all
// the active classes from the other links, and then
// add the active class to the link that was clicked on
function handleClick(e) {
  if (e.target.matches('a')) {
    links.forEach(link => link.classList.remove('active'));
    e.target.classList.add('active');
  }
}

// This code came from a solution to this post https://stackoverflow.com/questions/73266426/how-to-add-active-class-to-a-current-navbar-element
// I changed the selector as I was not using the nav or .container queries.

// Thank you, Laaouatni Anas for the solution (last editor)
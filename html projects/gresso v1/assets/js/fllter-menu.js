function openFilterSubmenu(filterSubMenuid){
  let filterBtn=document.querySelector('.refined-filtering-btn')
  let filterSubmenu = document.querySelector('#' + filterSubMenuid);
  if (filterSubmenu.style.display === "none" || filterSubmenu.style.display === "") {
    filterSubmenu.style.display = "block";
    filterBtn.classList.add('active-border')
  } else {
    filterSubmenu.style.display = "none";
    filterBtn.classList.remove('active-border')
  }
  // Prevent the event from bubbling up

} 

// Function to handle resizing and initial page load
function handleResize() {
  const mobileMenu = document.querySelector('.mobile-grid');
  const filterMenu = document.querySelector('.desktop-filtering-menu').innerHTML; // Use innerHTML to get the HTML content
  if (window.innerWidth <= 1200) {
    mobileMenu.innerHTML = filterMenu; // Append the content of desktop-filtering-menu to mobile-grid
  } else {
    mobileMenu.innerHTML = ''; // Clear the content of mobile-grid when the window width is greater than 1200px
  }
}

// Add event listener for window resize
window.addEventListener('resize', handleResize);

// Call handleResize on initial page load
window.addEventListener('load', handleResize);

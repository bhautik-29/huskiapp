


// for mobile menu start

const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const menuTrigger = document.querySelector(".mobile-menu-trigger");
const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.addEventListener("click", (e) =>{
  if(!menu.classList.contains("active")){
    return;
  }
  if(e.target.closest(".menu-item-has-children")){
     const hasChildren = e.target.closest(".menu-item-has-children");
     showSubMenu(hasChildren);
  }
});
goBack.addEventListener("click",() =>{
   hideSubMenu();
})
menuTrigger.addEventListener("click",() =>{
   toggleMenu();
})
closeMenu.addEventListener("click",() =>{
   toggleMenu();
})
document.querySelector(".menu-overlay").addEventListener("click",() =>{
  toggleMenu();
})
function toggleMenu(){
  menu.classList.toggle("active");
  document.querySelector(".menu-overlay").classList.toggle("active");
}
function showSubMenu(hasChildren){
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML=menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
}

function  hideSubMenu(){  
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() =>{
      subMenu.classList.remove("active");	
   },300); 
   menu.querySelector(".current-menu-title").innerHTML="";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
}

window.onresize = function(){
  if(this.innerWidth >1200){
    if(menu.classList.contains("active")){
      toggleMenu();
    }

  }
}



// this is use to open and close search-input

var searchLink = document.getElementById("search-link");
var searchInput = document.getElementById("search-input");

// Toggle input visibility on click
searchLink.addEventListener("click", function (event) {
 event.preventDefault(); // Prevent the default behavior of the link
 if (searchInput.style.display === "none" || searchInput.style.display === "") {
   searchInput.style.display = "flex";
   searchLink.style.display = "none";
 } else {
   searchInput.style.display = "none";
   searchLink.style.display = "block";
 }

 // Prevent hiding input when clicking on it
 searchInput.addEventListener("click", function (event) {
   event.stopPropagation();
 });
});

// Hide input on click outside
document.addEventListener("click", function (event) {
 if (event.target !== searchLink && event.target !== searchInput) {
   searchLink.style.display = "block";
   searchInput.style.display = "none";
 }
});


// this is for velue check box for usd

const velueSelectionBoxes = document.querySelectorAll('.velue-selection-box');
 
velueSelectionBoxes.forEach(box => {
 box.addEventListener('click', function() {
   const parent = this.parentElement;

   // Deactivate all other selection boxes
   velueSelectionBoxes.forEach(otherBox => {
     if (otherBox !== this) {
       otherBox.parentElement.classList.remove('activating');
       otherBox.setAttribute('aria-checked', 'false');
     }
   });

   // Toggle activation of clicked selection box
   parent.classList.toggle('activating');
   const ariaChecked = this.getAttribute('aria-checked') === 'true' ? 'false' : 'true';
   this.setAttribute('aria-checked', ariaChecked);
 });
});



window.addEventListener('scroll', function() {
  var header = document.querySelector('.header');
  var scrollTop = window.scrollY;

  if (scrollTop > 50) { // Adjust the value as needed
      header.classList.add("white")
  } else {
     header.classList.remove("white")
  }
});


const menuItemsWithChildren = document.querySelectorAll('.menu-item-has-children');

// Function to close all submenus
function closeSubmenus() {
  const submenus = document.querySelectorAll('.sub-menu.open');
  submenus.forEach(submenu => {
    submenu.classList.remove('open');
  });
}

// Loop through each menu item and add click event listener
menuItemsWithChildren.forEach(item => {
  // Add click event listener to the anchor tag
  item.querySelector('a').addEventListener('click', function(event) {
    // Prevent default behavior of anchor tag
    event.preventDefault();

    // Close all submenus
    closeSubmenus();

    // Toggle the visibility of submenu
    const submenu = item.querySelector('.sub-menu');
    submenu.classList.toggle('open');
  });
});

const submenuCloseButtons = document.querySelectorAll('.submenu-close-btn');

// Loop through each close button and add click event listener
submenuCloseButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    // Prevent default behavior of the button
    event.preventDefault();

    // Find the parent submenu and toggle its visibility
    const submenu = button.closest('.sub-menu');
    submenu.classList.remove('open');
  });
});


document.addEventListener("DOMContentLoaded", function() {
  // Get all main menu links in the menu
  const mainMenuLinks = document.querySelectorAll('.menu ul li a');
  
  // Get all navigation links
  const navigationLinks = document.querySelectorAll('.navigation-links');

  // Function to handle click event
  function handleLinkClick() {
    // Remove 'opacity' class from all main menu links
    mainMenuLinks.forEach(link => {
      link.classList.remove('opacity');
    });

    // Remove 'opacity' class from all navigation links
    navigationLinks.forEach(link => {
      link.classList.remove('opacity');
    });

    // Add 'opacity' class to clicked link
    this.classList.add('opacity');

    // Store the href of the clicked link in local storage
    localStorage.setItem('activeLink', this.getAttribute('href'));
  }

  // Loop through each main menu link and add click event listener
  mainMenuLinks.forEach(link => {
    link.addEventListener('click', handleLinkClick);
  });

  // Loop through each navigation link and add click event listener
  navigationLinks.forEach(link => {
    link.addEventListener('click', handleLinkClick);
  });

  // Check if there's an active link stored in local storage
  const activeLink = localStorage.getItem('activeLink');

  if (activeLink) {
    // Find the main menu link with the stored href and add 'opacity' class
    const activeMainMenuLink = document.querySelector(`.menu ul li a[href="${activeLink}"]`);
    if (activeMainMenuLink) {
      activeMainMenuLink.classList.add('opacity');
    }

    // Find the navigation link with the stored href and add 'opacity' class
    const activeNavigationLink = document.querySelector(`.navigation-links[href="${activeLink}"]`);
    if (activeNavigationLink) {
      activeNavigationLink.classList.add('opacity');
    }
  }
});




// Quentity Button increment And Decrement

document.addEventListener('DOMContentLoaded', function() {
  var numBlock = document.querySelectorAll('.num-block');
  numBlock.forEach(function(block) {
    var numIn = block.querySelector('.num-in');
    numIn.addEventListener('click', function(event) {
      var target = event.target;
      var input = block.querySelector('.in-num');
      var count = parseFloat(input.value);
      if (target.classList.contains('minus')) {
        count = count - 1;
        count = count < 1 ? 1 : count;
        if (count < 2) {
          target.classList.add('dis');
        } else {
          target.classList.remove('dis');
        }
      } else {
        count = count + 1;
        if (count > 1) {
          block.querySelector('.minus').classList.remove('dis');
        }
      }
      input.value = count;
      input.dispatchEvent(new Event('change'));
    });
  });
});



//  img big screen
  let bigImg = document.querySelector('.big-img img');
  function showImg(pic){
      bigImg.src = pic;
  }



  var cartDrawer = document.querySelector(".cart-drawer");
  var modalBox = document.querySelector(".cart-drawer-modal-box");
  var addToBagBtn = document.querySelector(".btn-add-to-bag");
  var closeButton = document.querySelector(".abc");
  
  function openCartDrawer() {
     
    setTimeout(function () {
     
      cartDrawer.classList.add("open");
      modalBox.style.animation = "";
    },1100);
  }
  
  function closeCartDrawer() {
    modalBox.style.animation = "slideOut 2s forwards";
    setTimeout(function () {
      cartDrawer.classList.remove("open");
      modalBox.style.animation = "";
    }, 1000);
  }
  
  addToBagBtn.addEventListener("click", function (event) {
    event.preventDefault();
    openCartDrawer();
  });
  
  // Event listener for clicks anywhere on the document
  document.addEventListener("click", function (event) {
       // Check if the clicked element is the "ADD TO BAG" button
  if (event.target === addToBagBtn) {
    openCartDrawer(); // Open the cart drawer if "ADD TO BAG" button is clicked
  } else {
    // Check if the clicked element is outside of the modal box
    if (!modalBox.contains(event.target) ) {
      closeCartDrawer(); // Close the cart drawer if clicked outside of modal box
    }
  }
  });
  
  // Event listener for clicks on the close button
  closeButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent event from propagating to the document click listener
    closeCartDrawer();
  });

  

  const searchbar=document.getElementById('search-bar');

  searchbar.addEventListener('click', function() {
    var searchInput = document.querySelector('.searchbar-block-inner');
    if (searchInput.classList.contains('full-width')) {
      searchInput.classList.remove('full-width');
    } else {
      searchInput.classList.add('full-width');
    }
  });

  const closeSearch = document.querySelector('.close-search');
  closeSearch.addEventListener('click', function() {
    var searchInput = document.querySelector('.searchbar-block-inner');
    searchInput.classList.remove('full-width');
  });


  const searchbarInner = document.querySelector('.searchbar-block-inner');
  document.addEventListener('click', function(event) {
    if (!searchbarInner.contains(event.target) && !searchbar.contains(event.target)) {
      searchbarInner.classList.remove('full-width');
    }
  });
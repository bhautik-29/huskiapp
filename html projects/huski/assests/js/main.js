// Navigation Menu Start
var menu = document.getElementById("manubar");
var navlinks = document.querySelector(".nav-items")
var submenu1 = document.querySelector("#sub-menu-1")
var submenu2 = document.querySelector("#sub-menu-2")

function clickmenu() {
  if (navlinks.style.display === 'block') {
    navlinks.style.display = 'none';
  } else {
    navlinks.style.display = 'block';
  }

}
function clicksubmenu() {
  if (submenu1.style.display === 'block') {
    submenu1.style.display = 'none';
  } else {
    submenu1.style.display = 'block';
  }
}

function clicksubmenu2() {
  if (submenu2.style.display === 'block') {
    submenu2.style.display = 'none';
  } else {
    submenu2.style.display = 'block';
  }
}
// Navigation Menu End

// Active Link Function Start 
document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".nav-links");
  var activeLink = localStorage.getItem('activeLink');

  if (activeLink) {
    links.forEach(link => {
      if (link.getAttribute('data-link') === activeLink) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  links.forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.active')?.classList.remove('active');
      link.classList.add('active');
      localStorage.setItem('activeLink', link.getAttribute('data-link'));
    });
  });
});
// Active Link Function End






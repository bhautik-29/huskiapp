// cart img
let bigImg = document.querySelector(".big-img img");
function showImg(pic) {
  bigImg.src = pic;
}

  // you may like swiper
  var swiper;
  function initializeSwiper() {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: getSlidesPerView(),
      centeredSlides: true,
      spaceBetween: 15,
      loop: true,
      speed: 1200,
      autoplay: false,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
      pagination: {
        el: ".page",
        type: "fraction",
        clickable: true,
      },
      grabCursor: true,
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });
  }

  function getSlidesPerView() {
    if (window.innerWidth < 400) {
      appendNumber = 1;
      return 1;
    } else if (window.innerWidth < 767) {
      appendNumber = 2;
      return 2;
    } else {
      appendNumber = 4;
      return false;
    }
  }

  initializeSwiper();

  window.addEventListener("resize", function () {
    swiper.params.slidesPerView = getSlidesPerView();
    swiper.update();
  });




  document.addEventListener("DOMContentLoaded", function () { 

  // drawer Swiper
    let drswiper;
    function initializeSwiperDrawer() {
      drswiper = new Swiper(".drawermySwiper", {
        slidesPerView: getSlidesPerViewdr(),
        centeredSlides: true,
        spaceBetween: 15,
        loop: true,
        speed: 1200,
        autoplay: false,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        pagination: {
          el: ".page",
          type: "fraction",
          clickable: true,
        },
        grabCursor: true,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      });
    }

    function getSlidesPerViewdr() {
      if (window.innerWidth < 400) {
        appendNumber = 1;
        return 1;
      } else if (window.innerWidth < 767) {
        appendNumber = 2;
        return 2;
      } else {
        appendNumber = 4;
        return false;
      }
    }

    initializeSwiperDrawer();

    window.addEventListener("resize", function () {
      drswiper.params.slidesPerView = getSlidesPerViewdr();
      drswiper.update();
    });




    var cartDrawer = document.querySelector(".cart-drawer");
    var modalBox = document.querySelector(".cart-drawer-modal-box");
    var addToBagBtn = document.getElementById("btn-add-to-bag");
    var closeButton = document.getElementById("drawer-close-btn");
  
    function openCartDrawer() {
       modalBox.style.animation = "slideIn 2s forwards";
      setTimeout(function () {
        cartDrawer.classList.add("open");
        modalBox.style.animation = "";
      }, 500);
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

  

// quentity selection content


  var numBlock = document.querySelectorAll(".num-block");
  numBlock.forEach(function (block) {
    var numIn = block.querySelector(".num-in");
    numIn.addEventListener("click", function (event) {
      var target = event.target;
      var input = block.querySelector(".in-num");
      var count = parseFloat(input.value);
      if (target.classList.contains("minus")) {
        count = count - 1;
        count = count < 1 ? 1 : count;
        if (count < 2) {
          target.classList.add("dis");
        } else {
          target.classList.remove("dis");
        }
      } else {
        count = count + 1;
        if (count > 1) {
          block.querySelector(".minus").classList.remove("dis");
        }
      }
      input.value = count;
      input.dispatchEvent(new Event("change"));
    });
  });
});

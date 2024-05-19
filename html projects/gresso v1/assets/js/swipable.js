var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    speed:1200,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
      grabCursor: true,
});

function updateProgressBar() {
    var activeIndex = swiper.realIndex;
    var progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function (progressBar, index) {
        if (index === activeIndex) {
            progressBar.classList.add('open');
        } else {
            progressBar.classList.remove('open');
        }
    });
}


// Call updateProgressBar function when page loads
updateProgressBar();

swiper.on('slideChange', function () {
    updateProgressBar();
});

// Add click event listeners to progress bars
var progressBars = document.querySelectorAll('.progress-bar');
progressBars.forEach(function (progressBar, index) {
    progressBar.addEventListener('click', function () {
        swiper.slideTo(index);
    });
});


let blogswiper;
function initializeSwiperDrawerBLog() {
    blogswiper = new Swiper(".blogSwiper", {
    slidesPerView: getSlidesPerViews(),
    centeredSlides: false,
    spaceBetween: 0,
    loop: true,
    speed: 1200,
    autoplay: false,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
    grabCursor: true,

  });
}

  function getSlidesPerViews() {
     if (window.innerWidth < 450) {
      appendNumber = 1.5;
      return 1.5;
    }
    else if (window.innerWidth < 767) {
      appendNumber = 2;
      return 2;
    }
    else {
      return false;
    }
  }
  initializeSwiperDrawerBLog()

  window.addEventListener("resize", function () {
    swiper.params.slidesPerView = getSlidesPerViews();
    swiper.update();
  });


    // drawer Swiper Start
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

// drawer Swiper End
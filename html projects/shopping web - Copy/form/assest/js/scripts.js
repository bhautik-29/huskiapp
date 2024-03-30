const sliderpage = document.querySelectorAll(".sliding-page");
const up = document.querySelector("#up");
const down = document.querySelector("#down");
let counter = 0;

sliderpage.forEach((slide, index) => {
    slide.style.top = `${index * 100}%`;
});

const upsl = () => {
    if (counter < sliderpage.length - 1) {
        counter++;
        sliderdiv();
        updateButtonColor();
        uupdateButtonColor  ();
    }
};

const downsl = () => {
    if (counter > 0) {
        counter--;
        sliderdiv();
        updateButtonColor();
        uupdateButtonColor  ();
    }
};

const updateButtonColor = () => {
    if (counter === 0) {
        // Change button color to black when counter is at index 0
        up.style.background = "#101b2e";
    } else {
        // Reset button color otherwise
        up.style.background = ""; // You can reset to your default color
    }
    
};
const uupdateButtonColor = () => {
if (counter === sliderpage.length-1) {
    // Change button color to black when counter is at index 0
    down.style.background = "#101b2e";
} else {
    // Reset button color otherwise
    down.style.background = ""; // You can reset to your default color
}
}

const sliderdiv = () => {
    sliderpage.forEach((slide, index) => {
        slide.style.transform = `translateY(${counter * -100}%)`;
    });
};

// Initial color setting for the up button
updateButtonColor();

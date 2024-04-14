// number Start

valueDisplays = document.querySelectorAll(".num");
console.log(valueDisplays);
 interval = 20000;

function startCounterIfNeeded(valueDisplay) {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 500;
        valueDisplay.textContent = startValue;
        if (startValue >= endValue) {
            clearInterval(counter);
        }
    }, duration);
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

window.addEventListener('scroll', function () {
    valueDisplays.forEach((valueDisplay) => {
        if (isInViewport(valueDisplay) && !valueDisplay.dataset.counterStarted) {
            startCounterIfNeeded(valueDisplay);
            valueDisplay.dataset.counterStarted = true;
        }
    });
});







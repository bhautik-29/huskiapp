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
var clickCount = 0;
var cpsCount = 0;
var startTime;
var endTime;

var clickArea = document.getElementById('click-area');
var clicksCountElement = document.getElementById('clicks-count');
var cpsCountElement = document.getElementById('cps-count');

clickArea.addEventListener('click', function() {
  clickCount++;
  clicksCountElement.innerHTML = clickCount;
  
  if (!startTime) {
    startTime = performance.now();
    cpsCountElement.innerHTML = cpsCount + " CPS";
  } else {
    endTime = performance.now();
    var timeElapsedInSeconds = (endTime - startTime) / 1000;
    cpsCount = Math.round(clickCount / timeElapsedInSeconds);
    cpsCountElement.innerHTML = cpsCount + " CPS";
  }
});

function resetCounter() {
  clickCount = 0;
  cpsCount = 0;
  startTime = null;
  endTime = null;
  clicksCountElement.innerHTML = clickCount;
  cpsCountElement.innerHTML = cpsCount + " CPS";
}

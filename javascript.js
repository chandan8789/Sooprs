function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 0, 50, 3000);

const paid = document.getElementById("free");
animateValue(paid, 0, 100, 3000);

const months = document.getElementById("twenty");
animateValue(months, 100, 20, 3000);

const zero = document.getElementById("risk");
animateValue(zero, 100, 0, 3000);



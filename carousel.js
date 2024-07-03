const slider = document.querySelector(".slider");

function activate(e) {
  const items = document.querySelectorAll(".item");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);

// changing slide images after every 10 seconds
function changeSlideImage() {
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  // setting an interval for next button
  let nextInterval = setInterval(() => {
    nextBtn.click();
    nextInterval;
  }, 5000);
  prevBtn.addEventListener("click", () => {
    clearInterval(nextInterval);
  });
  if (nextBtn) {
    nextInterval;
  }

  // clearing the interval for next button if the prev button is clicked
}

changeSlideImage();

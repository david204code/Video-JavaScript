// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed,
// without waiting for stylesheets, images, and subframes to finish loading.

// The load event is fired when the whole page has loaded,
// including all dependent resources such as stylesheets and images.

// select the button and video container

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    // control the video method
    video.pause();
  } else {
    btn.classList.remove("slide");
    // control the video method
    video.play();
  }
});

// preloader
const preLoader = document.querySelector(".preloader");
// console.log(preLoader);
window.addEventListener("load", function () {
  // hide the preloader once the page load
  preLoader.classList.add("hide-preloader");
});

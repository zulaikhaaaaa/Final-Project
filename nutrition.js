const images = ["/images/AppleBGR.png","/images/Grape-edit.png","/images/Manggo-edit.png","/images/Orange-edit.png","/images/Strawberry-edit.png","/images/Watermelon-edit.png"]; // array of image URLs
const imageElement = document.getElementById("image");
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length; // increment index and wrap around to 0 if necessary
  imageElement.classList.add("fade-out"); // fade out old image
  setTimeout(() => {
    imageElement.src = images[currentIndex];
    imageElement.classList.remove("fade-out");
    setTimeout(() => { // add a small delay before adding fade-in class
    imageElement.classList.add("fade-in"); // fade in new image
    }, 50); // 50ms delay
  }, 500); // wait for fade-out to complete
}, 10 * 1000); // change image every 30 seconds
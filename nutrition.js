
document.addEventListener('DOMContentLoaded', function() { //Let the images change in the order of the list in the array
  let image = document.getElementById('bottle-container');
  let images = ['images/AppleBGR.png', 'images/Grape-edit.png', 'images/Orange-edit.png', 'images/Manggo-edit.png', 'images/Strawberry-edit.png', 'images/Watermelon-edit.png'];

  setInterval(function() { //Calculate time interval for images to change 
      let random = Math.floor(Math.random() * 6);
      image.src = images[random];
      console.log('Image changed to:', images[random]); // Debug logging
  }, 800);
});


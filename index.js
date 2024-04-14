// code to flash the images
function flashImages() {
    // variable to track the number of flashes
    let flashCount = 0;
    
    // function to control the flashing loop
    function flashLoop() {
      // show image 1
      document.getElementById('image1').style.display = 'block';
      // wait for 1.5 seconds
      setTimeout(() => {
        // hide image 1
        document.getElementById('image1').style.display = 'none';
        // show image 2
        document.getElementById('image2').style.display = 'block';
        // wait for another 1.5 seconds
        setTimeout(() => {
          // hide image 2
          document.getElementById('image2').style.display = 'none';
          // increment the flash count
          flashCount++;
          // check if both images have flashed at least 3 times
          if (flashCount < 3) {
            // continue the flashing loop
            flashLoop();
          } else {
            // redirect to another page
            window.location.href = 'nav.html';
          }
        }, 1500);
      }, 1500);
    }
  
    // start the flashing loop
    flashLoop();
  }
  
  // call the flashImages function after the page loads
  window.onload = function() {
    flashImages();
  };
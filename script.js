//your JS code here. If required.
// Function to set background image based on screen orientation
function setBackgroundImage() {
  const backgroundImagePortrait = 'url("https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg")';
  const backgroundImageLandscape = 'url("https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg")';

  // Check if the screen is in portrait or landscape mode
  const isPortrait = window.matchMedia("(orientation: portrait)").matches;

  // Set background image based on screen orientation
  if (isPortrait) {
    document.body.style.backgroundImage = backgroundImagePortrait;
  } else {
    document.body.style.backgroundImage = backgroundImageLandscape;
  }
}

// Initial call to set background image based on current screen orientation
setBackgroundImage();

// Event listener for changes in screen orientation
window.addEventListener("orientationchange", setBackgroundImage);

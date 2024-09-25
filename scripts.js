// Function to animate the h1 element
function animateH1() {
  const h1 = document.querySelector("h1");
  console.log(h1);
  
  // Move the h1 to the right and set opacity to 1 over 2 seconds
  h1.style.left = '300px';  // Move right by 300px
  h1.style.opacity = '1';

  // After 2.3 seconds (2s for movement + 0.3s at opacity 1), reset the opacity
  setTimeout(() => {
    h1.style.opacity = '0';  // Fade out after staying for 0.3s
  }, 2300);
}

// Trigger the animation
animateH1();

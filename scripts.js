// Function to animate the h1 element
function animateH1() {
  const leftTitle = document.querySelector(".primary-title-one h1");
  const rightTitle = document.querySelector(".primary-title-two h1");
  
  // Move the h1 to the right and set opacity to 1 over 2 seconds
  leftTitle.style.left = '0';  
  rightTitle.style.right = '0'; 
  leftTitle.style.opacity = '1';
  rightTitle.style.opacity = '1';

  // After 2.3 seconds (2s for movement + 0.3s at opacity 1), reset the opacity
  setTimeout(() => {
    leftTitle.style.opacity = '0';  // Fade out after staying for 0.3s
    rightTitle.style.opacity = '0';
  }, 2300);
}

// Trigger the animation
animateH1();

///// Homepage introduction - Function to animate the h1 element
function animateH1() {
  const leftTitle = document.querySelector(".primary-title-one h1");
  const rightTitle = document.querySelector(".primary-title-two h1");
  const spanTitle = document.querySelector(".primary-title-span h1");
  
  // Move the h1 to the right and set opacity to 1 over 2 seconds
  leftTitle.style.opacity = '1';
  rightTitle.style.opacity = '1';
  spanTitle.style.opacity = '1';
  
  // After 2.3 seconds (2s for movement + 0.3s at opacity 1), reset the opacity
  setTimeout(() => {
    leftTitle.style.opacity = '0';  // Fade out after staying for 0.3s
    rightTitle.style.opacity = '0';
    spanTitle.style.opacity = '0';
  }, 2300);
}

// Trigger the animation
animateH1();


// Homepage - Animate dots for Hello animation
const dots = document.querySelectorAll('.hello-dots span');
let currentDot = 0;
const interval = 500; // Time in milliseconds for each dot to blink

function blinkDots() {
  // Set all dots to invisible
  dots.forEach(dot => dot.style.opacity = 0);

  // Set the current dot to visible
  dots[currentDot].style.opacity = 1;

  // Move to the next dot
  currentDot = (currentDot + 1) % dots.length;
}

// Start the blinking effect
setInterval(blinkDots, interval);
























////// Homepage introduction - Function to animate dot
// const dot = document.querySelector(".portrait-dot");

// // ----- Blinking Effect -----
// function toggleBlink() {
//     dot.style.opacity = (dot.style.opacity === '0') ? '1' : '0';
// }
// setInterval(toggleBlink, 1000);




// ----- Moving dot Effect -----
// function movePortraitAnimation() {
//     const imgPortrait = document.getElementById('portrait_img');
  
//     const movementRange = 20;  // Maximum number of pixels the dot can move in any direction
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;
//     const imgWidth = imgPortrait.offsetWidth;
//     const imgHeight = imgPortrait.offsetHeight;

//     // Get the current position of the word
//     const currentLeft = parseFloat(window.getComputedStyle(imgPortrait).left);
//     const currentTop = parseFloat(window.getComputedStyle(imgPortrait).top);

//     // Calculate new positions within the limited movement range
//     let newLeft = currentLeft + (Math.random() * movementRange * 2 - movementRange);
//     let newTop = currentTop + (Math.random() * movementRange * 2 - movementRange);

//     // Ensure the word stays within the viewport
//     newLeft = Math.max(0, Math.min(newLeft, viewportWidth - imgWidth));
//     newTop = Math.max(0, Math.min(newTop, viewportHeight - imgHeight));

//     // Apply the new positions
//     imgPortrait.style.left = newLeft + 'px';
//     imgPortrait.style.top = newTop + 'px';
// }
// // Trigger and time the animation
// setInterval(movePortraitAnimation, 2000);
// movePortraitAnimation();

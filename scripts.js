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


////// Homepage introduction - Function to animate dot
const dot = document.querySelector(".portrait-dot");
const dotSecond = document.querySelector(".portrait-dot-second");

// ----- Blinking Effect -----
function toggleBlink() {
    dot.style.opacity = (dot.style.opacity === '0') ? '1' : '0';
}
setInterval(toggleBlink, 1000);

function toggleBlinkTwo() {
    dotSecond.style.opacity = (dotSecond.style.opacity === '0') ? '1' : '0';
}
setInterval(toggleBlinkTwo, 2000);



let scrollSpeed = 0.2;  // Slow down factor, lower value = slower scrolling
let isScrolling = false;

function smoothScroll(event) {
    if (isScrolling) return;

    isScrolling = true;

    // Save the current scroll position
    const startScroll = window.scrollY;
    let targetScroll = startScroll + event.deltaY * scrollSpeed;

    const duration = 500; // Duration of the smooth scroll effect
    const startTime = performance.now();

    function easeOutCubic(t) {
        return (--t) * t * t + 1;
    }

    function animateScroll(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeOutCubic(progress);

        // Calculate the new scroll position
        const scrollPosition = startScroll + (targetScroll - startScroll) * ease;
        window.scrollTo(0, scrollPosition);

        if (progress < 1) {
            requestAnimationFrame(animateScroll);
        } else {
            isScrolling = false;  // Allow further scrolling when done
        }
    }

    requestAnimationFrame(animateScroll);
}

// Listen for the wheel event to detect scrolling
window.addEventListener('wheel', smoothScroll, { passive: false });





















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

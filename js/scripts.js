///// Homepage:  Hello animation
const helloText = document.querySelector(".hello-animation-text");
const portraitImgWrapper = document.querySelector(".hello-animation-portrait-img");
const portraitImg = document.querySelector("#portrait_img");

// Add event listener for mouseover to change the target element's style
if (helloText !== null) { 
  helloText.addEventListener('mouseover', function() {
    portraitImgWrapper.style.right = '20px'; // Change position on hover
    portraitImg.style.transform = 'rotate(0deg)'; // Change rotation on hover
  });
  
  // Add event listener for mouseout to reset the target element's style
  helloText.addEventListener('mouseout', function() {
    portraitImgWrapper.style.right = '-80%'; // Reset position when no hover
    portraitImg.style.transform = 'rotate(5deg)'; // Reset rotation when no hover
  });
}

///// Homepage - Animate dots for Hello animation
const dots = document.querySelectorAll('.hello-dots span');
let currentDot = 0;
const interval = 500; // Time in milliseconds for each dot to blink

if (dots !== null) { 
  function blinkDots() {
      // Set all dots to invisible
      dots.forEach(dot => dot.style.opacity = 0.5);
    
      // Set the current dot to visible
      dots[currentDot].style.opacity = 1;
    
      // Move to the next dot
      currentDot = (currentDot + 1) % dots.length;
    
    
    // Start the blinking effect
    setInterval(blinkDots, interval);
    }
}


/// PROJECTS: scroll to next div
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('#next-project');

  if ( cards !== null) { 
  buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
      // If it's not the last card, scroll to the next one
      if (index < cards.length - 1) {
        cards[index + 1].scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
});

document.addEventListener('DOMContentLoaded', function () {
  const videos = document.querySelectorAll('video');
  if ( videos !== null) { 
    videos.forEach(video => {
      video.autoplay = true;  // Set autoplay
      video.loop = true;      // Set loop to repeat
      video.muted = true;     // Ensure it's muted (important for autoplay in most browsers)
      
      video.play();  // Start playing
    });
 }
});


/// Anime.js - Infinite Scrolling Text Effect
document.addEventListener("DOMContentLoaded", function() {
  anime({
    targets: '.scroll-text', // homepage automatic scrolling text
    translateX: ['100%', '-100%'],
    easing: 'linear',
    duration: 50000,
    loop: true
  });
});


/// Anime.js - Paragraph Text Effect
document.addEventListener("DOMContentLoaded", function() {

  var SlideupParagraph = anime.timeline({
    loop: false,
    autoplay: false,
  });
  
  SlideupParagraph
  .add({
      targets: '.is--slideup .paragraph-loading',
      translateY: [50,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 3000,
      delay: (el, i) => 500 + 60 * i
  });
  
  // Apply effect on each paragraph
  const paragraphAnchor = document.getElementById('paragraph-anchor');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        SlideupParagraph.play();
      }
    });
  });
  observer.observe(paragraphAnchor);
  
});


/// Anime.js - Title Animation

document.addEventListener("DOMContentLoaded", function() {
  //Split letters of title
  var wordsplit = document.getElementsByClassName("wordsplit");
  for (var i = 0; i < wordsplit.length; i++) {
    var wordWrap = wordsplit.item(i);
    wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="wordsplit-word">$2</span>');
  }
  
  var splitLetter = document.getElementsByClassName("wordsplit-word");
  for (var i = 0; i < splitLetter.length; i++) {
     var letterWrap = splitLetter.item(i);
     letterWrap.innerHTML = letterWrap.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
  }

  //Animate letters
  var titleH1 = anime.timeline({
    loop: false,
    autoplay: false,
  });
  
  titleH1 
    .add({
      targets: '.page-title .letter',
      translateY: [200,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 450 + 30 * i
  });

  // Apply effect on each title
  const paragraphAnchor = document.getElementById('page-title-anchor');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
         titleH1.play();
      }
    });
  });
  observer.observe(paragraphAnchor); 

});



///// Homepage introduction - Function to animate the h1 element
// function animateH1() {
//   const leftTitle = document.querySelector(".primary-title-one h1");
//   const rightTitle = document.querySelector(".primary-title-two h1");
//   const spanTitle = document.querySelector(".primary-title-span h1");
  
//   // Move the h1 to the right and set opacity to 1 over 2 seconds
//   leftTitle.style.opacity = '1';
//   rightTitle.style.opacity = '1';
//   spanTitle.style.opacity = '1';
  
//   // After 2.3 seconds (2s for movement + 0.3s at opacity 1), reset the opacity
//   setTimeout(() => {
//     leftTitle.style.opacity = '0';  // Fade out after staying for 0.3s
//     rightTitle.style.opacity = '0';
//     spanTitle.style.opacity = '0';
//   }, 2300);
// }

// // Trigger the animation
// animateH1();


























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

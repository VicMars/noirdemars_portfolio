///// Homepage:  Hello animation
const helloElements = document.querySelectorAll(".hello-animation-text, #portrait_img");
const portraitImgWrapper = document.querySelector(".hello-animation-portrait-img");
const portraitImg = document.querySelector("#portrait_img");

if (helloElements !== null) { 
  helloElements.forEach(element => {
    // Add event listener for mouseover to change the target element's style
    element.addEventListener('mouseover', function() {
      // portraitImgWrapper.style.right = '20px'; // Change position on hover
      // portraitImg.style.transform = 'translateX(20px)';
      portraitImg.style.transform = 'translateX(20px) rotate(0deg)'; // Change rotation on hover
    });
  
    // Add event listener for mouseout to reset the target element's style
    element.addEventListener('mouseout', function() {
      // portraitImgWrapper.style.right = '-80%'; // Reset position when no hover
      // portraitImg.style.transform = 'translateX(-80%)';
      portraitImg.style.transform = 'translateX(-80%) rotate(5deg)'; // Reset rotation when no hover
    });
    
    // element.style.transition = 'all 3s ease';
  });
}

///// Homepage - Animate dots for Hello animation
const dots = document.querySelectorAll('.hello-dots span');
let currentDot = 0;
const interval = 500; // Time in milliseconds for each dot to blink

if (dots.length > 0) { 
  function blinkDots() {
    // Set all dots to semi-visible
    dots.forEach(dot => dot.style.opacity = 0.5);

    // Set the current dot to fully visible
    dots[currentDot].style.opacity = 1;

    // Move to the next dot
    currentDot = (currentDot + 1) % dots.length;
  }

  // Start the blinking effect
  setInterval(blinkDots, interval);
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
      translateY: ['-100vh',0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 1400,
      delay: (el, i) => 50 * i
  });

  // Apply effect on each title
  const paragraphTitleAnchor = document.getElementById('page-title-anchor');

  if (paragraphTitleAnchor) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
         titleH1.play();
      }
    });
  });
  observer.observe(paragraphTitleAnchor); 
  }
});


/// Anime.js - 'Wordpress' word Animation
document.addEventListener("DOMContentLoaded", function() {
  anime({
    targets: '.wordpress-anim',
    translateX: function() {
      return anime.random(-10, 10); // Random horizontal movement between -10px and 10px
    },
    translateY: function() {
      return anime.random(-10, 10); // Random vertical movement between -10px and 10px
    },
    duration: 1000,  // 1 second per move
    easing: 'easeInOutQuad', // Smooth easing
    direction: 'alternate',  // Move back and forth
    loop: true // Continues to loop
  });
});

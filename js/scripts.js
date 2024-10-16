/// Anime.js - Title Sliding Effect
document.addEventListener("DOMContentLoaded", function() {

  var SlideRightTitle = anime.timeline({
    loop: false,
    autoplay: false,
  });

  var SlideLeftTitle = anime.timeline({
    loop: false,
    autoplay: false,
  });
  
  SlideRightTitle
  .add({
      targets: '.is--slideright .title-sliding',
      translateX: [-100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 3000,
      delay: (el, i) => 500 + 60 * i
  });

  SlideLeftTitle
  .add({
      targets: '.is--slideleft ..title-sliding',
      translateX: [100,0],
      translateZ: 0,
      opacity: [0,1],
      easing: "easeOutExpo",
      duration: 3000,
      delay: (el, i) => 500 + 60 * i
  });
  
  // Apply effect on each paragraph
  const titleSlidingAnchor = document.getElementById('home-title-anchor');

  if (titleSlidingAnchor) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        SlideRightTitle.play();
        SlideLeftTitle.play();
      }
    });
  });
  observer.observe(titleSlidingAnchor);
  }
});



/// Anime.js - Paragraph Loading Effect
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

  if (paragraphAnchor) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        SlideupParagraph.play();
      }
    });
  });
  observer.observe(paragraphAnchor);
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




/// Anime.js - Page Title Animation
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



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

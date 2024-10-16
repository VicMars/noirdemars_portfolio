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

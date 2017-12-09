

// Add/remove class to header on scroll
document.addEventListener('scroll', (e)=>{
  if (window.pageYOffset === 0) {
    header.classList.remove("bg");
  } else {
    header.classList.add("bg")
  }
})

// Animations
document.querySelectorAll('.animated').forEach(function(element){
  function handleAnimation(){
    if ((window.pageYOffset+(document.documentElement.clientHeight*0.75)) > (element.getBoundingClientRect().top+window.pageYOffset)) {
      if(!element.classList.contains('animating')){
        element.classList.add('animating');
      }
    }
  }
  // Initial check
  handleAnimation();
  // Re-check on subsequent scroll events
  document.addEventListener('scroll', function(){
    handleAnimation();
  })
});

// Smooth scroll of contact link
document.getElementById('contact-link').addEventListener('click', function(){
  document.querySelector('#cta').scrollIntoView({
    block: "start",
    inline: "nearest",
    behavior: 'smooth'
  });
})

// Smooth scroll of down arrow in hero
if (document.getElementById('scroll-down')) {
  document.getElementById('scroll-down').addEventListener('click', function(){
    this.scrollIntoView({
      block: "start",
      inline: "nearest",
      behavior: 'smooth'
    });
  })
}

// Turn on particle network thing
if (document.getElementById('particles')) {
  var particleCanvas = new ParticleNetwork(document.getElementById('particles'), {
    particleColor: '#efefef',
    background: '#06D6A0',
    interactive: true,
    speed: 'slow',
    density: 'medium'
  });  
}

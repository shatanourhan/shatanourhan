window.addEventListener('scroll', function() {
    const main = document.getElementById('home');
    const services = document.getElementById('Services');
    const contact = document.getElementById('contact');
    const scrollPosition = window.scrollY;
  
    const windowHeight = window.innerHeight;
    const fullScroll = 2 * windowHeight; // Adjust according to distance between sections
    
    if (scrollPosition < windowHeight) {
      main.style.transform = `translateX(${-scrollPosition}px)`;
      services.style.transform = 'translateX(0)';
      contact.style.transform = 'translateX(0)';
    } else if (scrollPosition >= windowHeight && scrollPosition < fullScroll) {
      main.style.transform = `translateX(${-windowHeight}px)`;
      services.style.transform = `translateX(${scrollPosition - windowHeight}px)`;
      contact.style.transform = 'translateX(0)';
    } else {
      main.style.transform = `translateX(${-windowHeight}px)`;
      services.style.transform = `translateX(${windowHeight}px)`;
      contact.style.transform = `translateX(${scrollPosition - fullScroll}px)`;
    }
  });


  const imageContainer = document.querySelector('.image-container');
  const hoverText = document.querySelector('.hover-text');
  const arrowImage = document.querySelector('.arrow'); // Select the arrow image
  
  imageContainer.addEventListener('mouseenter', () => {
      hoverText.style.display = 'block';
      arrowImage.style.display = 'block'; // Show the arrow image on hover
  });
  
  imageContainer.addEventListener('mouseleave', () => {
      hoverText.style.display = 'none';
      arrowImage.style.display = 'none'; // Hide the arrow image when not hovering
  });

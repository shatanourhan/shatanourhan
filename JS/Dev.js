window.addEventListener('scroll', function() {
    const main = document.getElementById('home');
    const services = document.getElementById('Services');
    const contact = document.getElementById('contact');
    const scrollPosition = window.scrollY;
  
    const windowHeight = window.innerHeight;
    const fullScroll = 2 * windowHeight; 
    
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

/* header */
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('flipped');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('flipped');
    });
});


  const imageContainer = document.querySelector('.image-container');
  const hoverText = document.querySelector('.hover-text');
  const arrowImage = document.querySelector('.arrow');
  
  imageContainer.addEventListener('mouseenter', () => {
      hoverText.style.display = 'block';
      arrowImage.style.display = 'block'; 
  });
  
  imageContainer.addEventListener('mouseleave', () => {
      hoverText.style.display = 'none';
      arrowImage.style.display = 'none'; 
  });






const gradient = document.createElement('div');
gradient.classList.add('gradient');
imageContainer.appendChild(gradient);


function animateGradient() {
    let scale = 1;
    let opacity = 0.5;
    let direction = 1;

    setInterval(() => {
        
        scale += 0.01 * direction;
        opacity += 0.05 * direction;

        
        if (scale >= 1.1 || scale <= 1) {
            direction *= -1; 
        }

        
        gradient.style.transform = `scale(${scale})`;
        gradient.style.opacity = opacity;
    }, 100); 
}


animateGradient();



    document.addEventListener("DOMContentLoaded", function() {
        const content = document.getElementById('home');
        
        setTimeout(() => {
            content.classList.add('visible');
        }, 300); 
    });



    document.addEventListener("DOMContentLoaded", function() {

      
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                 
                  services.classList.add('visible');
              } else {
                  
                  services.classList.remove('visible');
              }
          });
      });

      
      observer.observe(services);
  });


  document.addEventListener("DOMContentLoaded", function() {

    function checkVisibility() {
        const rect = services.getBoundingClientRect();
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

        
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          services.classList.add('visible');
        } else {
          services.classList.remove('visible');
        }
    }

    
    checkVisibility();

    
    window.addEventListener('scroll', checkVisibility);
});





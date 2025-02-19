

const titles = ["Rocket Scientist", "Astrophysicists"];
        const titleElement = document.getElementById('title');
        
        function typeWriter(text, index, callback) {
            if (index < text.length) {
                titleElement.textContent += text.charAt(index);
                setTimeout(() => typeWriter(text, index + 1, callback), 80);
            } else if (callback) {
                setTimeout(callback, 500);
            }
        }

        function startTypingEffect() {
            titleElement.textContent = ''; 
            typeWriter(titles[0], 0, () => {
                setTimeout(() => {
                    titleElement.textContent = ''; 
                    typeWriter(titles[1], 0, startTypingEffect);
                }, 500); 
            });
        }

        startTypingEffect();

 
    document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.classList.add('flipped');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('flipped');
    });
});




function rotateImageOnScroll() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const rotationDegree = (scrollTop / scrollHeight) * 360;

    const image = document.querySelector('.rotating-image');
    image.style.transform = `translateX(-50%) rotate(${rotationDegree}deg)`;
}


window.addEventListener('scroll', rotateImageOnScroll);

document.addEventListener('mousemove', (event) => {
    const rocket = document.querySelector('.rocket');
    const offsetX = 20; 
    const offsetY = 20; 


    rocket.style.transform = `translate(${event.clientX - offsetX}px, ${event.clientY - offsetY}px)`;
});



document.addEventListener("DOMContentLoaded", function() {
    window.scrollTo(0, 0);
    const content = document.getElementById('home');
  
    setTimeout(() => {
        content.classList.add('visible');
    }, 500); 
});


document.addEventListener("DOMContentLoaded", function() {
    window.scrollTo(0, 0);

    const options = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.1 
    };

    const articles = document.getElementById('articles');
    const about = document.getElementById('about');

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.classList.add('visible');
            } else {
                
                entry.target.classList.remove('visible');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, options);

   
    observer.observe(articles);
    observer.observe(about);
});


console.log("Scroll Position:", window.scrollY);


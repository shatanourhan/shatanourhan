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
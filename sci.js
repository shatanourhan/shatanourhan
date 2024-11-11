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
            titleElement.textContent = ''; // Clear content before typing
            typeWriter(titles[0], 0, () => {
                setTimeout(() => {
                    titleElement.textContent = ''; // Clear for the second text
                    typeWriter(titles[1], 0, startTypingEffect); // Callback to restart
                }, 500); // Delay before the second text starts
            });
        }

        // Start the typing effect
        startTypingEffect();

// Function to handle rotating image on scroll
function rotateImageOnScroll() {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const rotationDegree = (scrollTop / scrollHeight) * 360;

    const image = document.querySelector('.rotating-image');
    image.style.transform = `translateX(-50%) rotate(${rotationDegree}deg)`;
}

// Add the scroll event listener
window.addEventListener('scroll', rotateImageOnScroll);

document.addEventListener('mousemove', (event) => {
    const rocket = document.querySelector('.rocket');
    const offsetX = 20; // Adjust as needed to center the rocket on the cursor
    const offsetY = 20; // Adjust as needed to center the rocket on the cursor

    // Update the position of the rocket based on the mouse position
    rocket.style.transform = `translate(${event.clientX - offsetX}px, ${event.clientY - offsetY}px)`;
});
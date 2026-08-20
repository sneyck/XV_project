const particlesContainer = document.querySelector(".hero__particles");

function createParticle() {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    const positionX = Math.random() * 100;
    const positionY = Math.random() * 100;

    particle.style.left = `${positionX}%`;
    particle.style.top = `${positionY}%`;

    const animationDelay = Math.random() * 4;
    
    particle.style.animationDelay = `${animationDelay}s`;

    particlesContainer.appendChild(particle);
}

for (let i = 0; i < 40; i++) {
    createParticle();
}

const storyImage = document.querySelector(".story__image");
const storySection = document.querySelector("#story");

window.addEventListener("scroll", () => {

    const sectionPosition = storySection.getBoundingClientRect();

    const screenHeight = window.innerHeight;

    if (
        sectionPosition.top < screenHeight &&
        sectionPosition.bottom > 0
    ) {

        const progress =
            (screenHeight - sectionPosition.top) /
            (screenHeight + sectionPosition.height);

        const imagePosition = (progress - 0.5) * 30;

        storyImage.style.transform =
            `translateY(${imagePosition}px)`;
            
    }

});

const timelineItems = document.querySelectorAll(".timeline__item");

const timelineObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

            }

        });

    },
    {
        treshold: 0.25
    }
);

timelineItems.forEach((item) => {

    timelineObserver.observe(item);
    
});
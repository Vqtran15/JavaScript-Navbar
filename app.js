const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to right top, #5f2c82, #49a09d)",
    "linear-gradient(to right top, #ED4264, #FFEDBC)",
    "linear-gradient(to right top, #3D7EAA, #FFE47A)"
];

const options = {
    //activate 70% of section
    threshold: 0.7
};
//Intersection observer
let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
    if (entry.isIntersecting) {
        //grab bubble and match to height
        bubble.style.setProperty("left", `${directions.left}px`);
        bubble.style.setProperty("top", `${directions.top}px`);
        bubble.style.setProperty("width", `${directions.width}px`);
        bubble.style.setProperty("height", `${directions.height}px`);
        bubble.style.background = gradients[gradientIndex];
     }
    });
}

//observe sections for entries
sections.forEach(section => {
    observer.observe(section);
});
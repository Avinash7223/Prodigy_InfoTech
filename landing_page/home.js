window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.internship, .Resume, .portfolio, .provide-box');
    const scrollPosition = window.scrollY;

    elements.forEach(element => {
        if (scrollPosition > 50) { 
            element.style.transform = 'translateX(0px)';
        } else {
            element.style.transform = 'translateX(-100%)';
        }
    });
});


window.addEventListener('scroll', function() {
    const animatedBox = document.querySelector('.about-div');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) { // Adjust this value as needed
        animatedBox.style.transform = 'translateX(0)';
    } else {
        animatedBox.style.transform = 'translateX(100%)';
    }
});



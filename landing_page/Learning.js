window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.provide-box');
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
    const elements = document.querySelectorAll('.provide-box1');
    const scrollPosition = window.scrollY;

    elements.forEach(element => {
        if (scrollPosition > 50) { 
            element.style.transform = 'translateY(0px)';
        } else {
            element.style.transform = 'translateY(-190%)';
        }
    });
});

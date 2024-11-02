const headings = document.querySelectorAll('.article h1, .sidebar h3');

headings.forEach(heading => {
    heading.addEventListener('mouseover', function() {
        heading.style.fontSize = '32px'; 
    });

    heading.addEventListener('mouseout', function() {
        heading.style.fontSize = '28px'; 
    });

});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const targetUrl = this.href; 
        document.body.classList.add('fade-out'); 

        setTimeout(() => {
            window.location.href = targetUrl; 
        }, 500); 
    });
});

window.addEventListener('load', function() {
    document.body.classList.remove('fade-out');
});

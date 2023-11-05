document.addEventListener('DOMContentLoaded', function () {
    const loader = document.querySelector('.loader');
    const loaderwraper = document.querySelector('.loader__wrapper');
    const bgMusic = document.getElementById('bg-music');
    const musicControl = document.getElementById('music-control');
    const animateitem = document.querySelectorAll('.animation');

    setTimeout(function () {
        loader.style.display = 'none';
        loaderwraper.style.display = 'none';
    }, 2000);

    bgMusic.volume = 0.03;
    musicControl.addEventListener('click', function () {
        if (bgMusic.paused) {
            bgMusic.play();
        } else {
            bgMusic.pause();
        }
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animation');
                    observer.unobserve(entry.target);
                } else {
                    entry.target.classList.remove('scroll-animation');
                }
            });
        },
        { threshold: 0.5 }
    );

    for (let i = 0; i < animateitem.length; i++) {
        const elements = animateitem[i];

        observer.observe(elements);
    }
});

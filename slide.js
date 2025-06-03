const images = document.querySelectorAll('#slideshow img');
    const dots = [document.getElementById('dot0'), document.getElementById('dot1'), document.getElementById('dot2')];
    let current = 0;
    setInterval(() => {
        images[current].style.opacity = 0;
        dots[current].classList.remove('bg-selected','opacity-100');
        dots[current].classList.add('bg-white','opacity-80');
        current = (current + 1) % images.length;
        images[current].style.opacity = 1;
        dots[current].classList.remove('bg-white','opacity-80');
        dots[current].classList.add('bg-selected','opacity-100');
    }, 3500);
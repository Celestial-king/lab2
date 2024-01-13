const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navlist.classList.toggle('active');
});

const typed = new Typed('.GOD', {
    strings: ['Front-End Developer', 'Freelancer', 'Influencer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

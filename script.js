const header = document.querySelector('.site-header');
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelectorAll('.site-nav a');
const form = document.querySelector('#project-form');
const status = document.querySelector('.form-status');

toggle?.addEventListener('click', () => {
  const open = header.classList.toggle('nav-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});

navLinks.forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('nav-open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  status.textContent = 'Your project form is ready to connect to ShAIrk.ai contact routing before launch.';
});

const motionVideo = document.querySelector('.motion-video');
const motionLoopFade = document.querySelector('.motion-loop-fade');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (motionVideo && !reducedMotion.matches) {
  motionVideo.addEventListener('timeupdate', () => {
    if (motionVideo.duration && motionVideo.currentTime > motionVideo.duration - 0.18) motionLoopFade?.classList.add('is-visible');
    if (motionVideo.currentTime < 0.35) motionLoopFade?.classList.remove('is-visible');
  });

  motionVideo.addEventListener('seeked', () => {
    if (motionVideo.currentTime < 0.35) motionLoopFade?.classList.remove('is-visible');
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();

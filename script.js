const header = document.querySelector('[data-header]');
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const setHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 24);
setHeader();
addEventListener('scroll', setHeader, { passive: true });

const reveal = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      reveal.unobserve(entry.target);
    }
  }
}, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' });

document.querySelectorAll('.chapter .prose > *, .method-step, .receipt, .evidence-row, .move-copy > *')
  .forEach((element) => {
    element.classList.add('reveal');
    reveal.observe(element);
  });

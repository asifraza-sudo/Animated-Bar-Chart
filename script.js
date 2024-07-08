document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.bar');
  
    bars.forEach((bar, index) => {
      setTimeout(() => {
        bar.classList.add('animate');
        bar.style.height = bar.getAttribute('data-value') + '%';
      }, index * 200);
    });
  });
  
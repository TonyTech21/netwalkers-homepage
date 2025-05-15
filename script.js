


// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navItems = document.querySelectorAll('.nav-item');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('fa-bars');
        menuBtn.querySelector('i').classList.toggle('fa-times');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(navItem => navItem.classList.remove('active'));
            item.classList.add('active');
            if (window.innerWidth <= 900) {
                mobileMenu.classList.remove('active');
                menuBtn.querySelector('i').classList.add('fa-bars');
                menuBtn.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    renderBusinessUnits();
});

(function(){
    const container = document.querySelector('.cards-container');
    const cards = Array.from(container.children);
    const prevBtn = document.querySelector('.arrow.left');
    const nextBtn = document.querySelector('.arrow.right');
    const dotsContainer = document.querySelector('.dots');

    // Build dots
    cards.forEach((_, i) => {
      const d = document.createElement('span');
      d.className = 'dot';
      d.addEventListener('click', () => scrollTo(i));
      dotsContainer.append(d);
    });
    const dots = Array.from(dotsContainer.children);

    // Helper: compute card+gap width
    function getCardWidth() {
      const style = getComputedStyle(container);
      const gap = parseInt(style.columnGap || style.gap) || 0;
      return cards[0].getBoundingClientRect().width + gap;
    }

    function scrollTo(index) {
      container.scrollTo({ left: index * getCardWidth(), behavior: 'smooth' });
    }

    function update() {
      const cw = getCardWidth();
      const rawIndex = container.scrollLeft / cw;
      const idx = Math.round(rawIndex);
      const maxIndex = cards.length - (window.innerWidth <= 768 ? 1 : 3);
      const cur = Math.min(Math.max(0, idx), maxIndex);

      // dots
      dots.forEach(d=>d.classList.remove('active'));
      if (dots[cur]) dots[cur].classList.add('active');

      // arrows
      prevBtn.disabled = cur === 0;
      nextBtn.disabled = cur >= maxIndex;
    }

    prevBtn.addEventListener('click', ()=>scrollTo(Math.round(container.scrollLeft / getCardWidth()) - 1));
    nextBtn.addEventListener('click', ()=>scrollTo(Math.round(container.scrollLeft / getCardWidth()) + 1));

    container.addEventListener('scroll', ()=>window.requestAnimationFrame(update));
    window.addEventListener('resize', update);

    // init
    scrollTo(0);
    update();
  })();
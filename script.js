


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

 
document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll('.slider-wrapper');

  sliders.forEach((sliderWrapper) => {
    const carousel = sliderWrapper.querySelector('.cards-container');
    const cards = carousel.querySelectorAll('.card');
    const dotsContainer = sliderWrapper.querySelector('.dotsContainer');
    const prevBtn = sliderWrapper.querySelector('.prevBtn');
    const nextBtn = sliderWrapper.querySelector('.nextBtn');
    
    let currentIndex = 0;

    // Create dots
    cards.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function updateActiveDot(index) {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    function scrollToCard(index) {
      if (index < 0 || index >= cards.length) return;
      currentIndex = index;
      const card = cards[index];
      carousel.scrollTo({
        left: card.offsetLeft,
        behavior: 'smooth'
      });
      updateActiveDot(currentIndex);
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        scrollToCard(currentIndex + 1);
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        scrollToCard(currentIndex - 1);
      }
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        scrollToCard(parseInt(dot.dataset.index));
      });
    });

    carousel.addEventListener('scroll', () => {
      const scrollLeft = carousel.scrollLeft;
      let newIndex = 0;
      cards.forEach((card, index) => {
        if (scrollLeft >= card.offsetLeft - card.offsetWidth / 2) {
          newIndex = index;
        }
      });
      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        updateActiveDot(currentIndex);
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll('.slider-wrapper');

  sliders.forEach((sliderWrapper) => {
    const carousel = sliderWrapper.querySelector('.cards-container');
    const cards = carousel.querySelectorAll('.card2');
    const dotsContainer = sliderWrapper.querySelector('.dotsContainer');
    const prevBtn = sliderWrapper.querySelector('.prevBtn');
    const nextBtn = sliderWrapper.querySelector('.nextBtn');
    
    let currentIndex = 0;

    // Create dots
    cards.forEach((_, index) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (index === 0) dot.classList.add('active');
      dot.dataset.index = index;
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.dot');

    function updateActiveDot(index) {
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
    }

    function scrollToCard(index) {
      if (index < 0 || index >= cards.length) return;
      currentIndex = index;
      const card2 = cards[index];
      carousel.scrollTo({
        left: card2.offsetLeft,
        behavior: 'smooth'
      });
      updateActiveDot(currentIndex);
    }

    nextBtn.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
        scrollToCard(currentIndex + 1);
      }
    });

    prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
        scrollToCard(currentIndex - 1);
      }
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        scrollToCard(parseInt(dot.dataset.index));
      });
    });

    carousel.addEventListener('scroll', () => {
      const scrollLeft = carousel.scrollLeft;
      let newIndex = 0;
      cards.forEach((card2, index) => {
        if (scrollLeft >= card2.offsetLeft - card2.offsetWidth / 2) {
          newIndex = index;
        }
      });
      if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        updateActiveDot(currentIndex);
      }
    });
  });
});


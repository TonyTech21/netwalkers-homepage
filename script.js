
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("open");
});



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




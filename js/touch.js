let touchStartX = 0;
let touchEndX = 0;
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.querySelector('#menuToggle');

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const swipeThreshold = 50;
    const edgeThreshold = 50;

    // Right swipe from left edge
    if (touchStartX <= edgeThreshold && swipeDistance > swipeThreshold) {
        sidebar.classList.add('active');
    }
    
    // Left swipe anywhere
    if (swipeDistance < -swipeThreshold) {
        sidebar.classList.remove('active');
    }
}

// Add click handler for menuToggle as backup
menuToggle.addEventListener('click', (e) => {
    e.preventDefault();
    sidebar.classList.toggle('active');
});

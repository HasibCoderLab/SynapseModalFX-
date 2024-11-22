// মডাল প্রদর্শনের জন্য বোতাম এবং মডাল খুঁজে বের করা
const buttons = document.querySelectorAll('.modal-btn');
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.close');

// প্রতিটি বোতামের জন্য ইভেন্ট লিসেনার
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        modals[index].style.display = 'flex';
    });
});

// প্রতিটি ক্লোজ বোতামের জন্য ইভেন্ট লিসেনার
closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const modalId = event.target.getAttribute('data-modal');
        document.getElementById(modalId).style.display = 'none';
    });
});

// মডাল ক্লিক করলে বন্ধ করা
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});
 
document.addEventListener("DOMContentLoaded", () => {
  const horses = document.querySelectorAll('.horse');
  
  // Move horses forward every second
  setInterval(() => {
    horses.forEach(horse => {
      let currentPosition = parseInt(horse.style.left || 0);
      horse.style.left = (currentPosition + Math.random() * 50) + 'px';
    });
  }, 1000);
});

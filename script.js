document.addEventListener("DOMContentLoaded", () => {
  const horses = document.querySelectorAll('.horse');
  const horseNames = ['Første kvadrant', 'Anden kvadrant', 'Tredje kvadrant', 'Fjerde kvadrant']; // New horse names
  
  // Assign horse names dynamically
  document.querySelectorAll('.horse-name').forEach((nameElement, index) => {
    nameElement.textContent = horseNames[index];
  });

  // Move horses forward every second
  setInterval(() => {
    horses.forEach(horse => {
      let currentPosition = parseInt(horse.style.left || 0);
      horse.style.left = (currentPosition + Math.random() * 50) + 'px';
    });
  }, 1000);
});

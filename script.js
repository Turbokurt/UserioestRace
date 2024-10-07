document.addEventListener("DOMContentLoaded", () => {
  const horses = document.querySelectorAll('.horse');
  const horseNames = ['Første kvadrant', 'Anden kvadrant', 'Tredje kvadrant', 'Fjerde kvadrant'];
  const trackLength = 800; // Define the track length (in pixels, adjust based on your track's width)

  // Dynamically assign horse names
  document.querySelectorAll('.horse-name').forEach((nameElement, index) => {
    nameElement.textContent = horseNames[index];
  });

  // Move horses forward every second
  setInterval(() => {
    horses.forEach((horse, index) => {
      let currentPosition = parseInt(horse.style.left || 0);  // Get current position
      let newPosition = currentPosition + Math.random() * 50; // Add a random value to simulate movement
      horse.style.left = newPosition + 'px';  // Move the horse

      // Update the progress value (display distance moved)
      const progressElement = document.getElementById('progress' + (index + 1));
      progressElement.textContent = Math.min(newPosition, trackLength).toFixed(2) + 'px'; // Limit to track length
    });
  }, 1000);
});

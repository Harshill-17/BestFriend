document.getElementById('flowerButton').addEventListener('click', function() {
    var flowers = document.getElementById('flowerAnimation');
    flowers.style.display = 'block';
    setTimeout(function() {
      flowers.style.display = 'none';
    }, 3000); // Adjust the time (in milliseconds) to match your animation duration
  });
  
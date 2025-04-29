document.addEventListener('DOMContentLoaded', () => {
  const funButton = document.getElementById('fun-button');
  if (!funButton) return;

  // Track the fun mode state
  let funModeActive = false;
  
  // Array of fish emojis for bubbles
  const fishEmojis = ['🐠', '🐟', '🐡', '🦑', '🐙', '🦐', '🦞', '🐬', '🐳', '🦈', '🐊', '🦀'];
  
  // Create a bubble element with random properties
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.className = 'fun-bubble';
    
    // Set random fish emoji
    const randomEmoji = fishEmojis[Math.floor(Math.random() * fishEmojis.length)];
    bubble.textContent = randomEmoji;
    
    // Random position, size and animation duration
    const size = Math.floor(Math.random() * 50) + 20;
    const left = Math.floor(Math.random() * 100);
    const animDuration = Math.floor(Math.random() * 10) + 5;
    
    bubble.style.fontSize = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.animationDuration = `${animDuration}s`;
    
    document.body.appendChild(bubble);
    
    // Remove bubble after animation completes
    setTimeout(() => {
      if (bubble && bubble.parentNode) {
        bubble.parentNode.removeChild(bubble);
      }
    }, animDuration * 1000);
  }
  
  // Create water wave overlay
  function createWaterOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'water-overlay';
    document.body.appendChild(overlay);
    return overlay;
  }
  
  // Rainbow text effect for headings
  function applyRainbowText() {
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
      heading.classList.toggle('rainbow-text');
    });
  }
  
  // Wobble effect for images
  function applyWobbleEffect() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.classList.toggle('wobble-effect');
    });
  }
  
  // Toggle fun mode
  funButton.addEventListener('click', () => {
    funModeActive = !funModeActive;
    
    // Toggle the active state of the button
    funButton.classList.toggle('active');
    
    // Toggle body class for global styles
    document.body.classList.toggle('fun-mode');
    
    if (funModeActive) {
      // Create water overlay
      const overlay = createWaterOverlay();
      
      // Start creating bubbles
      const bubbleInterval = setInterval(() => {
        if (!funModeActive) {
          clearInterval(bubbleInterval);
          return;
        }
        createBubble();
      }, 500);
      
      // Update button text
      funButton.textContent = 'Back to Normal';
      
      // Apply fun effects
      applyRainbowText();
      applyWobbleEffect();
      
      // Store the interval and overlay for cleanup
      funButton.bubbleInterval = bubbleInterval;
      funButton.waterOverlay = overlay;
    } else {
      // Clear bubble interval
      if (funButton.bubbleInterval) {
        clearInterval(funButton.bubbleInterval);
      }
      
      // Remove water overlay
      if (funButton.waterOverlay) {
        funButton.waterOverlay.remove();
      }
      
      // Remove all existing bubbles
      document.querySelectorAll('.fun-bubble').forEach(bubble => {
        bubble.remove();
      });
      
      // Reset button text
      funButton.textContent = 'Make it Fun!';
      
      // Remove fun effects
      applyRainbowText();
      applyWobbleEffect();
    }
  });
}); 
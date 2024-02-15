const object = document.getElementById("object");
        
// Function to generate a random transformation
function randomTransform() {
  const translateX = Math.random() * 200 - 100; // Random horizontal movement between -100px and 100px
  const translateY = Math.random() * 200 - 100; // Random vertical movement between -100px and 100px
  const rotate = Math.random() * 360; // Random rotation angle between 0 and 360 degrees
  const scale = Math.random() * 0.2 + 0.5; // Random scale between 1 and 1.5
  return `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`;
}

// Apply a random transformation and listen for transition end
function applyRandomTransformation() {
  const randomTransformValue = randomTransform();
  object.style.transform = randomTransformValue;

  // Remove the transition once the animation completes
  object.addEventListener("transitionend", function() {
    object.style.transition = "none";
    setTimeout(() => {
      object.style.transition = "transform 2s";
      applyRandomTransformation(); // Apply a new random transformation
    }, 0);
  }, { once: true });
}

// Start the animation
applyRandomTransformation();
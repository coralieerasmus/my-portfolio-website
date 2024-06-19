// Confetti settings
const colors = ['#93278F', '#FF0033', '#FDD61E', '#FF5E22'];
const confettiCount = 900; // Increased number of confetti pieces
const confettiContainer = document.createDocumentFragment();

function createConfetti() {
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    const angle = Math.random() * 2 * Math.PI; // Random angle in radians
    const radius = Math.random() * 1000; // Random distance from center

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    confetti.style.transform = `translate(${x}px, ${y}px) rotate(${Math.random() * 60}deg)`;
    confetti.style.width = `${Math.random() * 10 + 5}px`;
    confetti.style.height = `${Math.random() * 10 + 5}px`;
    confetti.style.animationDuration = `${Math.random() * 2 + 2}s, 1s`; // Confetti lasts longer

    confettiContainer.appendChild(confetti);

    // Add event listener to remove confetti after animation
    confetti.addEventListener('animationend', () => {
      confetti.remove();
    });
  }
  document.body.appendChild(confettiContainer);

  // Show the flashing text after a short delay
  setTimeout(() => {
    document.querySelector('.flashing-text').style.opacity = '1';
  }, 500);
}

// Run confetti burst when the page loads
window.addEventListener('load', createConfetti);


  document.getElementById('subscriptionForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;

  try {
        const response = await fetch('http://localhost:3000/subscribe', {
    method: 'POST',
  headers: {
    'Content-Type': 'application/json'
            },
  body: JSON.stringify({email, phone})
        });

  if (response.ok) {
    alert('Subscription successful!');
        } else {
    alert('Subscription failed.');
        }
    } catch (error) {
    console.error('Error:', error);
  alert('An error occurred.');
    }
});
  
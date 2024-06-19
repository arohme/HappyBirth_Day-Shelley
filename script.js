function revealMessage() {
    document.getElementById('message').classList.toggle('hidden');
}

const targetDate = new Date('June 19, 2024 13:14:00').getTime();
const countdownContainer = document.getElementById('countdown-container');
const countdownTimer = document.getElementById('countdown-timer');
const content = document.getElementById('content');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = ` Left ${days}Days ${hours}Hours ${minutes}Minutes ${seconds}Seconds`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownContainer.style.display = 'none';
        content.classList.remove('hidden');
        playBackgroundMusic();
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();

function playBackgroundMusic() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
   const audioElement = new Audio('🎂🍰Birthday Song _ happy birthday Song _ Best Birthday Whatsapp Status_ 50K VIEWS _BIRTHDAY STATUS 🍰🎂.mp3');
    const track = audioContext.createMediaElementSource(audioElement);
    const gainNode = audioContext.createGain();
    gainNode.gain.value = 2; // Increase the volume
    track.connect(gainNode).connect(audioContext.destination);
    audioElement.loop = true;
    audioElement.play();
}






window.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
    }
    if ((e.ctrlKey || e.metaKey) && e.key === 'U' || e.key === 'u') {
        e.preventDefault();
    }
});












 

const gallery = document.getElementById('gallery');

// Replace with your list of image paths or URLs
const imagePaths = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg'
];

// Array of random thoughts/messages
const randomThoughts = [
    'You are my sunshine',
    'Forever in my heart',
    'Love you endlessly',
    'My one and only',
    'Together forever',
    'You complete me',
    'Always by your side',
    'You make me smile',
    'In love with you',
    'Heart belongs to you'
];

// Function to generate a random index for thoughts array
function getRandomThought() {
    return randomThoughts[Math.floor(Math.random() * randomThoughts.length)];
}

// Function to create image elements and append to gallery
function createGallery() {
    imagePaths.forEach(path => {
        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image');

        const img = new Image();
        img.onload = () => {
            // Adjust image container size based on image dimensions
            const aspectRatio = img.naturalWidth / img.naturalHeight;
            const maxHeight = 300; // Set your maximum height for images
            const maxWidth = 300; // Set your maximum width for images

            if (aspectRatio >= 1) {
                img.style.width = '100%';
                img.style.height = 'auto';
                imageContainer.style.maxWidth = maxWidth + 'px';
                imageContainer.style.maxHeight = Math.min(maxHeight, maxWidth / aspectRatio) + 'px';
            } else {
                img.style.width = 'auto';
                img.style.height = '100%';
                imageContainer.style.maxHeight = maxHeight + 'px';
                imageContainer.style.maxWidth = Math.min(maxWidth, maxHeight * aspectRatio) + 'px';
            }
        };

        // Set the src attribute based on whether the path is absolute or relative
        if (path.startsWith('')) {
            img.src = path;
        } else {
            img.src = `images/${path}`; // Adjust the path based on your file structure
        }

        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.textContent = getRandomThought(); // Set random thought/message

        imageContainer.appendChild(img);
        imageContainer.appendChild(overlay);
        gallery.appendChild(imageContainer);
    });
}

// Call the function to create the gallery on page load
createGallery();


function refreshPage() {
    setTimeout(() => {
        location.reload(); // Reload the current page
    }, 30000); // 30 seconds in milliseconds (30,000 milliseconds)
}

// Call the function to create the gallery on page load
 

// Call the function to refresh the page every 30 seconds
refreshPage();

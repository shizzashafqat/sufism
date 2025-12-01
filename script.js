// Data for the Shrine Hotspots
const shrineData = {
    langar: {
        title: "The Langar (Community Kitchen)",
        [cite_start]text: "Shrines are living centers of hospitality. The Langar distributes food to the poor, embodying the Sufi commitment to social support and generosity[cite: 167, 168]."
    },
    sama: {
        title: "Mehfil-e-Sama",
        text: "This is not entertainment. [cite_start]It is the 'rendition of philosophic verses' designed to induce wajd (ecstasy) and bring the listener closer to the Divine[cite: 169, 171]."
    },
    mannat: {
        title: "Mannat Threads",
        text: "Devotees tie threads to the shrine's latticework. [cite_start]Each thread represents a wish, a prayer, or a hope for healing, creating a physical tapestry of human longing[cite: 176, 211]."
    }
};

// Navigation
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Modal Logic
function openModal(key) {
    const data = shrineData[key];
    if (data) {
        document.getElementById('modal-title').innerText = data.title;
        document.getElementById('modal-text').innerText = data.text;
        document.getElementById('info-modal').classList.remove('hidden');
    }
}

function closeModal() {
    document.getElementById('info-modal').classList.add('hidden');
}

// Audio Logic (Placeholder)
let isPlaying = false;
// Note: You would need to add an actual audio file path here
const audio = new Audio('path-to-qawwali-clip.mp3'); 

function toggleAudio() {
    if (isPlaying) {
        audio.pause();
        document.querySelector('.gold-play-btn span').innerText = "▶ Play Recitation";
    } else {
        audio.play();
        document.querySelector('.gold-play-btn span').innerText = "|| Pause Recitation";
    }
    isPlaying = !isPlaying;
}

// Close modal if clicking outside content
window.onclick = function(event) {
    const modal = document.getElementById('info-modal');
    if (event.target == modal) {
        closeModal();
    }
}

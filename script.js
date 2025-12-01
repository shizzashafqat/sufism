// Navigation Logic
function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Data for the Shrine Hotspots (Prepared for next step)
const shrineData = {
    langar: {
        title: "The Langar (Community Kitchen)",
        text: "Shrines are living centers of hospitality. The Langar distributes food to the poor, embodying the Sufi commitment to social support and generosity."
    },
    sama: {
        title: "Mehfil-e-Sama",
        text: "This is not entertainment. It is the 'rendition of philosophic verses' designed to induce wajd (ecstasy) and bring the listener closer to the Divine."
    },
    mannat: {
        title: "Mannat Threads",
        text: "Devotees tie threads to the shrine's latticework. Each thread represents a wish, a prayer, or a hope for healing, creating a physical tapestry of human longing."
    }
};

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

// Close modal if clicking outside content
window.onclick = function(event) {
    const modal = document.getElementById('info-modal');
    if (event.target == modal) {
        closeModal();
    }
}

function playPronunciation() {
    const word = document.getElementById('wordInput').value;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US'; // Configura el idioma a inglés
    window.speechSynthesis.speak(utterance);
}

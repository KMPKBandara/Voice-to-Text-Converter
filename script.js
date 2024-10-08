click_to_convert.addEventListener('click', function() {
    var speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    const convertText = document.getElementById('Convert_text'); 

    recognition.addEventListener('result', e => {
        const transcript = Array.from(e.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join(' ');

        convertText.innerHTML = transcript;
    });

    if (speech == true) {
        recognition.start();
    }
});


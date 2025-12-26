async function generateSpeech() {
    const text = document.getElementById("textInput").value;

    if (!text) {
        alert("Please enter text");
        return;
    }

    const response = await fetch("http://127.0.0.1:8000/tts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: text })
    });

    const blob = await response.blob();
    const audioUrl = URL.createObjectURL(blob);

    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = audioUrl;
    audioPlayer.play();
}

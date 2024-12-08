function playAudio() {
    const iframe = document.getElementById("musicIframe");
    iframe.contentWindow.postMessage("play", "*");
}

function stopAudio() {
    const iframe = document.getElementById("musicIframe");
    iframe.contentWindow.postMessage("stop", "*");
}
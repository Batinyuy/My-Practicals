const camera = document.getElementById('camera');
const fullscreenButton = document.getElementById('fullscreen');

navigator.mediaDevices.getUserMedia({
    video: true
})
.then(stream => {
    camera.srcObject = stream;
})
.catch(error => {
    console.error('Error accessing camera:', error);
});

fullscreenButton.addEventListener('click', () => {
    camera.requestFullscreen();
});                            
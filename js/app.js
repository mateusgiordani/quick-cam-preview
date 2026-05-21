const videoElement = document.getElementById('videoElement');
const videoSelect = document.getElementById('videoSource');
const startButton = document.getElementById('startBtn');
const errorMessage = document.getElementById('errorMessage');

let currentStream = null;

async function init() {
    try {
        const initialStream = await navigator.mediaDevices.getUserMedia({ video: true });
        initialStream.getTracks().forEach((track) => track.stop());

        await getDevices();
        if (videoSelect.length > 0) {
            startStream(videoSelect.value);
        }
    } catch (error) {
        showError('Permission denied or no camera found. Please allow camera access.');
        console.error('Error initializing:', error);
    }
}

async function getDevices() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        videoSelect.innerHTML = '';

        const videoDevices = devices.filter((device) => device.kind === 'videoinput');

        videoDevices.forEach((device, index) => {
            const option = document.createElement('option');
            option.value = device.deviceId;
            option.text = device.label || `Camera ${index + 1}`;
            videoSelect.appendChild(option);
        });
    } catch (error) {
        showError('Failed to list camera devices.');
    }
}

async function startStream(deviceId) {
    if (currentStream) {
        currentStream.getTracks().forEach((track) => track.stop());
    }

    const constraints = {
        video: {
            deviceId: deviceId ? { exact: deviceId } : undefined,
            width: { ideal: 1280 },
            height: { ideal: 720 },
        },
    };

    try {
        currentStream = await navigator.mediaDevices.getUserMedia(constraints);
        videoElement.srcObject = currentStream;
        errorMessage.textContent = '';
    } catch (error) {
        showError('Could not start video stream with the selected device.');
        console.error('Error starting stream:', error);
    }
}

function showError(message) {
    errorMessage.textContent = message;
}

startButton.addEventListener('click', () => {
    startStream(videoSelect.value);
});

videoSelect.addEventListener('change', () => {
    startStream(videoSelect.value);
});

init();

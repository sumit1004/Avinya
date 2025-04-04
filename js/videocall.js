let localStream;
let remoteStream;
let peerConnection;
let isCallActive = false;

const configuration = {
    iceServers: [
        { urls: 'stun:stun.l.google.com:19302' }
    ]
};

const startCall = document.getElementById('startCall');
const endCall = document.getElementById('endCall');
const toggleMic = document.getElementById('toggleMic');
const toggleVideo = document.getElementById('toggleVideo');
const facultyList = document.getElementById('facultyList');
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const toggleAudio = document.getElementById('toggleAudio');
let isAudioEnabled = true;

async function init() {
    try {
        localStream = await navigator.mediaDevices.getUserMedia({
            audio: true,
            video: true
        });
        localVideo.srcObject = localStream;
    } catch (error) {
        console.error('Error accessing media devices:', error);
    }
}

startCall.addEventListener('click', async () => {
    if (!facultyList.value) {
        alert('Please select a faculty member first');
        return;
    }
    
    if (!isCallActive) {
        await init();
        createPeerConnection();
        isCallActive = true;
        startCall.textContent = 'Connecting...';
        startCall.disabled = true;
    }
});

endCall.addEventListener('click', () => {
    if (isCallActive) {
        hangUp();
    }
});

toggleMic.addEventListener('click', () => {
    const audioTrack = localStream.getAudioTracks()[0];
    audioTrack.enabled = !audioTrack.enabled;
    toggleMic.textContent = audioTrack.enabled ? 'Mute' : 'Unmute';
    toggleMic.classList.toggle('active', !audioTrack.enabled);
});

toggleVideo.addEventListener('click', () => {
    const videoTrack = localStream.getVideoTracks()[0];
    videoTrack.enabled = !videoTrack.enabled;
    toggleVideo.textContent = videoTrack.enabled ? 'Video Off' : 'Video On';
    toggleVideo.classList.toggle('active', !videoTrack.enabled);
});

toggleAudio.addEventListener('click', () => {
    if (remoteVideo.srcObject) {
        remoteVideo.muted = !remoteVideo.muted;
        isAudioEnabled = !remoteVideo.muted;
        toggleAudio.textContent = isAudioEnabled ? 'Speaker On' : 'Speaker Off';
        toggleAudio.classList.toggle('active', !isAudioEnabled);
    }
});

function createPeerConnection() {
    peerConnection = new RTCPeerConnection(configuration);
    
    localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream);
    });
    
    peerConnection.ontrack = event => {
        remoteVideo.srcObject = event.streams[0];
    };
    
    peerConnection.onicecandidate = event => {
        if (event.candidate) {
            // Send the candidate to signaling server
            // This is where you would implement your signaling logic
        }
    };
}

function hangUp() {
    if (peerConnection) {
        peerConnection.close();
        peerConnection = null;
    }
    
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStream = null;
    }
    
    localVideo.srcObject = null;
    remoteVideo.srcObject = null;
    isCallActive = false;
    startCall.textContent = 'Start Call';
    startCall.disabled = false;
    
    isAudioEnabled = true;
    toggleAudio.textContent = 'Speaker On';
    remoteVideo.muted = false;
}

// Note: This is a basic implementation. In a production environment,
// you would need to implement a signaling server to handle peer-to-peer connections
// and add proper error handling and connection state management.

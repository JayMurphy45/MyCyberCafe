document.getElementById('startBtn').addEventListener('click', function() {
    // Send message to background script to start the timer
    chrome.runtime.sendMessage({ action: 'startBtn' });
});

document.getElementById('pauseBtn').addEventListener('click', function() {
    // Send message to background script to pause the timer
    chrome.runtime.sendMessage({ action: 'pauseBtn' });
});

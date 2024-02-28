let timerId;
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'startBtn' && !timerId) {
        // Start the timer if it's not already running
        timerId = setInterval(function() {
            console.log('Timer running...');
        }, 1000);
    } else if (message.action === 'pauseBtn' && timerId) {
        clearInterval(timerId);
        timerId = null;
        console.log('Timer paused.');
    }
});

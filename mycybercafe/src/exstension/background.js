let timerId;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'startBtn' && !timerId) {
        // Start the timer if it's not already running
        timerId = setInterval(function() {
            // Your timer logic here
            console.log('Timer running...');
        }, 1000); // Example: Timer ticks every second
    } else if (message.action === 'pauseBtn' && timerId) {
        // Stop the timer if it's running
        clearInterval(timerId);
        timerId = null;
        console.log('Timer paused.');
    }
});

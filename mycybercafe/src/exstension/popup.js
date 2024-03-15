document.getElementById('startBtn').addEventListener('click', function() {
    // Send message to background script to start the timer
    chrome.runtime.sendMessage({ action: 'startBtn' });
});

document.getElementById('pauseBtn').addEventListener('click', function() {
    // Send message to background script to pause the timer
    chrome.runtime.sendMessage({ action: 'pauseBtn' });
});
console.log('This is a popup!');
    var button = document.querySelector('button')
    button.addEventListener("click", () => {
    alert("button clicked");
    // get the open tab url
    chrome.tabs.query(
        {active:true},
        tabs=>{
            const tab=tabs[0];
            console.log("URL:", tab.url)
            alert(tab.url)
            console.log("Getting ready to save the record");       
            // get the current time in EPOCH format.
            var currentTime = new Date().valueOf();
            alert(currentTime)
            fetch('http://localhost:3000/api/SaveToDb?username=john&time='+currentTime);
            alert("ok")
        }
        )
   });
   function openChart(){
    chrome.tabs.create({
   url: chrome.runtime.getURL("statistics.html")
    });

    }
 
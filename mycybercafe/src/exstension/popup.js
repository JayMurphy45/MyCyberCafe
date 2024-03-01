console.log('This is a popup!');
    var button = document.querySelector('startBtn')
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
            fetch('http://localhost:3000/api/SaveToDb?username=john&time=&url='+ currentTime + encodeURIComponent(currentURL));

        }
        )
    });
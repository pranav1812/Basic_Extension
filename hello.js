chrome.browserAction.onClicked.addListener(()=>{
    var tab= chrome.tabs.getSelected(null,(tab)=>{
        return tab.url;
    })
    document.querySelector('h3').textContent+=tab
})
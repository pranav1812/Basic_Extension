console.log(chrome.browserAction.onClicked.addListener);
chrome.tabs.getSelected(null,(tab)=>{
    console.log("on "+ tab.url)
})

chrome.browserAction.onClicked.addListener(function(tab) {
    console.log('browser action button clicked \n on'+ tab.url)
  });


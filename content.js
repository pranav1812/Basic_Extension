console.log('content script');
alert("ahKSCBX");
var para=document.getElementsByTagName('p');
for(i=0;i<para.length;i++){
    para[i].style.backgroundColor="red";
    para[i].style.display="none";


}
var body=document.querySelector('body');
body.style.backgroundColor="black";
body.style.color="white"

console.log(`${para.length} paras hidden`);
// console.log(chrome.tabs);
// chrome.tabs is undefined
// chrome.tabs.getSelected(null,(tab)=>{
//     console.log(tab.url)
// })

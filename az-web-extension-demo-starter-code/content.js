// content.js
// Author:
// Author URI: https://
// Author Github URI: https://www.github.com/
// Project Repository URI: https://github.com/
// Description: Handles all the webpage level activities (e.g. manipulating page data, etc.)
// License: MIT
let newbookmark=window.location.href;
let problemlist='algozenith_problems';
window.addEventListener("load",()=>{addbookmark()});
function addbookmark(){
    let addimage=document.createElement("img");
    addimage.src="C:\Users\SUBRAT SAMAL\Documents\chrome_ex_AZ\az-web-extension-demo-starter-code\az-web-extension-demo-starter-code\assets\bookmark.png";
    addimage.className='bookmark_button';
    addimage.style.height="30px";
    addimage.style.width="30px";
   
   azAskDoubt = document.getElementsByClassName(
    "btn btn_ref text_white ml-1"
)[0].parentElement.parentElement;
azAskDoubt.appendChild(bookmarkBtn);
addimage.addEventListener("click",newbookmark())
} let location=window.location.href;
async function newbookmark(){
    currentbookmark=await fetchbookmark();
    problemname=document.getElementsByClassName("col-8 my-auto")[0].lastChild.textContent;
    const bookmarkcontainer={
        url: location,
        desc: problemname,
    };
    let addornot=true;
    for (let i = 0;i<currentbookmark.length; i++) {
    if(currentbookmark[i].url==location){
        addornot=false;
    }
    } if(addornot){
        chrome.storage.sync.get({
  [problemlist]: JSON.stringify([
    ...currentbookmark,bookmarkcontainer,
  ])
        })
    }; 
}
const fetchbookmark=()=>{
    return new Promise((resolve)=>{
        chrome.storage.sync.get([problemlist],(obj)=>{
           ( resolve(obj[problemlist]?JSON.parse(obj[problemlist]):[]));
        })
    })
}
let tablinks=document.getElementsByClassName("tab-link");
let tabcontents=document.getElementsByClassName("tab2");
function opentab(tabname){
    for( tablink of  tablinks){
        tablink.classList.remove("active");
    }
    for( tabcontent of  tabcontents){
        tabcontent.classList.remove("active1");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active1");
}

let sidemenu = document.getElementById("side");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbwD1IoR1DluRowElajELa88piKyUoPAz1DUJsYgTfZ-lPLDDlYrar0RNOnok6PRR8Re/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },4000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
const shareBtn=document.getElementById('share-btn')
const footer=document.getElementById('footer')
const profile=document.getElementById('profile')
const footerBtn=document.getElementById('footer-btn')
const showFooter=(event)=>{
footer.classList.toggle('showFooter')
profile.classList.toggle('hideProfile')
}
const showProfile=(event)=>{
    profile.classList.toggle('hideProfile')
    footer.classList.toggle('showFooter')
}
shareBtn.addEventListener('click',showFooter)
footerBtn.addEventListener('click',showProfile)
const footerDesktop=document.getElementById('footer-desktop')
const shareBtnDesktop=document.getElementById('share-btn-desktop')

const showPopup=()=>{
    footerDesktop.classList.toggle('show-pop-up')
}
shareBtnDesktop.addEventListener('click',showPopup)

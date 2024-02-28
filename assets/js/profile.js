let sharesNavItem = document.querySelectorAll(".shares-nav-item")

sharesNavItem.forEach(sni => {
    sni.addEventListener('click', () => {
        sharesNavItem.forEach(sni => {
            sni.classList.remove('shares-nav-item-active')
        })
        sni.classList.add('shares-nav-item-active')
    })
} )

let changeCover = document.getElementById("photo-change-cover")
let changeCoverInput = document.getElementById("photo-change-cover-input")

changeCover.addEventListener('click', () => {
    changeCoverInput.click()
})

let changeProfile = document.getElementById("photo-change-profile")
let changeProfileInput = document.getElementById("photo-change-profile-input")

changeProfile.addEventListener('click', () => {
    changeProfileInput.click()
})
//Post Click Events
let postStars = document.querySelectorAll(".post-star");
postStars.forEach(ps => {
  ps.addEventListener("click", () => {
    ps.firstElementChild.style.display =
      ps.firstElementChild.style.display === "none" 
        ? "inline"
        : "none"

    ps.firstElementChild.nextElementSibling.style.display =
      ps.firstElementChild.nextElementSibling.style.display === "inline"
        ? "none"
        : "inline"

    ps.lastElementChild.style.color =
      ps.firstElementChild.nextElementSibling.style.display === "inline"
        ? "goldenrod"
        : "#212529"
  });
});

let dots = document.querySelectorAll(".dots")
dots.forEach(d => {
  d.addEventListener('click', () => {
    d.lastElementChild.style.display = d.lastElementChild.style.display === 'none'?'block':'none'
  })
})

let shareDrop = document.getElementById("share-drop")
let curtain = document.getElementById("curtain")

let shareBtns = document.querySelectorAll(".share")
shareBtns.forEach(sb => {
  sb.addEventListener('click', () => {
    shareDrop.style.display = 'block'
    curtain.style.display = 'block'
  })
})

let exitBtn = document.getElementById("share-exit-btn")
exitBtn.addEventListener('click', () => {
  shareDrop.style.display = 'none'
  curtain.style.display = 'none'
})

curtain.addEventListener('click', () => {
  shareDrop.style.display = 'none'
  curtain.style.display = 'none'
})
//Post Sharing Evens
let postUrl = encodeURI(document.location.href)
let shareInput = document.getElementById("share-link-input")
shareInput.value = postUrl

let copyBtn = document.getElementById("copy-link-btn")
copyBtn.addEventListener('click', () => {
  navigator.clipboard.writeText(shareInput.value)
  copyBtn.innerHTML = '<i class="bi bi-check2"></i>'
  setTimeout(() => {
    copyBtn.innerHTML = 'Copy'
  }, 2000)
})


let facebookBtns = document.querySelectorAll(".facebook")
facebookBtns.forEach(fb => {
  fb.setAttribute('href',
  `https://www.facebook.com/sharer/sharer.php?u=${postUrl}`)
})

let whatsappBtns = document.querySelectorAll(".whatsapp")
whatsappBtns.forEach(wb => {
  wb.setAttribute('href',
  `https://api.whatsapp.com/send?text=${postUrl}`)
})



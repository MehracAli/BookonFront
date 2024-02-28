let createNav = document.getElementById('create-nav')
let createDrop = document.getElementById('create-drop')

createNav.addEventListener('click', (event) => {
    event.stopPropagation();
    createDrop.style.display = createDrop.style.display === 'block' ? 'none' : 'block';
})

document.addEventListener('click', () => {
    createDrop.style.display = 'none';
})




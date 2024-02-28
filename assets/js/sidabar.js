let searchInput = document.getElementById('search')
let searchDrop = document.getElementById('search-drop')

searchInput.addEventListener('click', (event) => {
    event.stopPropagation();
    searchDrop.style.display = searchDrop.style.display === 'none'? 'block':'none';
})

document.addEventListener('click', () => {
    searchDrop.style.display = 'none';
})

  
  
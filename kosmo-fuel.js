const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');
const marcas = ["bmw", "fiat", "ford", "mercedes"]
const selectMarcas = document.querySelector('#marcas')

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

selectMarcas.addEventListener('click', () =>{
    for (let i = 0; i < marcas.length; i++) {
        selectMarcas.innerHTML += `
        <option>${marcas[i]}</option>
        `
        
    }  
})



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
function carregarDados() {
fetch('https://api.edmunds.com/api/vehicle/v2/makes?state=new&year=2023&view=basic&fmt=json&api_key=SUA_CHAVE_DE_API_AQUI')
	.then(response => response.json())
	.then(data => {
		const marcas = data.makes;

		const selectMarca = document.getElementById('marca');
		for (let i = 0; i < marcas.length; i++) {
			const option = document.createElement('option');
			option.text = marcas[i].name;
			option.value = marcas[i].name;
			selectMarca.add(option);
		}
	});
}


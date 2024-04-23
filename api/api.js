
let pokemonId;

const numeroRandom = () =>{
   pokemonId = Math.floor(Math.random() * 200);
}

const pokemonApi = async () => {
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    const resultado = await respuesta.json()

        .then(data => {
            const nombrePokemon = data.name;
            const imagenPokemon = data.sprites.front_default;

            const pokemonInfoHTML = `
            <div class="container col-4 text-center">
            <div class="container shadow text-center p-3 rounded-4">
                <h3 class="fw-semibold">${nombrePokemon}</h3>
                <p class="fw-light">Cantante</p>
                <img src="${imagenPokemon}" width="150px">
            </div>
            </div>
        `;
            document.getElementById('pokemonCarta').innerHTML = pokemonInfoHTML;
        })
        .catch(error => console.error(error));


}

numeroRandom();
pokemonApi();


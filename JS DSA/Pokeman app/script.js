const pokemonNameElement  = document.getElementById('name');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const speed = document.getElementById('speed');
const searchInput = document.getElementById('default-search');
const searchResults = document.getElementById('searchResults');
const searchButton = document.getElementsByTagName('button');
const pokeAPI = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
const pokemonData = await response.json();
console.log(pokemonData)

const pokemonName =  pokemonData.name;
const pokemonHP =  pokemonData.stats[0].base_stat;
const pokemonAttack =  pokemonData.stats[1].base_stat;
const pokemonDefense =  pokemonData.stats[2].base_stat;
const pokemonSpeed =  pokemonData.stats[5].base_stat;
console.log(pokemonName)

pokemonNameElement.innerText = pokemonName.toUpperCase();
hp.innerText = pokemonHP;
attack.innerText = pokemonAttack
defense.innerText = pokemonDefense;
speed.innerText = pokemonSpeed
};

pokeAPI('pikachu');


searchInput.addEventListener('input', async (event) => {
  const searchTerm = event.target.value.toLowerCase();
  if (searchTerm.length === 0) {
    searchResults.innerHTML = ''; // Clear the search results if the search input is empty
    return;
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const data = await response.json();
    console.log("data:")
    console.log(data)
    const matchingPokemon = data.results.filter(pokemon => pokemon.name.includes(searchTerm));

    // Display the matching Pokémon names
    searchResults.innerHTML = matchingPokemon.map(pokemon => `<div class="pokemon-name">${pokemon.name}</div>`).join('');

    // Add click event listener to each Pokémon name
    const pokemonNameElements = document.querySelectorAll('.pokemon-name');
    pokemonNameElements.forEach(element => {
      element.addEventListener('click', () => {
        // Set the value of the input element to the selected Pokémon name
        searchInput.value = element.innerText;
      });
    });
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    searchResults.innerHTML = 'Error fetching Pokémon';
  }
});




const pokeSearch = () => {
    pokeAPI(searchInput.value);
}
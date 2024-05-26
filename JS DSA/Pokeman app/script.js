const pokemonNameElement = document.getElementById('name');
const hp = document.getElementById('hp');
const attack = document.getElementById('attack');
const defense = document.getElementById('defense');
const speed = document.getElementById('speed');
const searchInput = document.getElementById('default-search');
const searchResults = document.getElementById('searchResults');
const searchButton = document.getElementById('searchButton');
const searchForm = document.getElementById('searchForm');

const pokeAPI = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const pokemonData = await response.json();
    
    const pokemonName = pokemonData.name;
    const pokemonHP = pokemonData.stats[0].base_stat;
    const pokemonAttack = pokemonData.stats[1].base_stat;
    const pokemonDefense = pokemonData.stats[2].base_stat;
    const pokemonSpeed = pokemonData.stats[5].base_stat;

    pokemonNameElement.innerText = pokemonName.toUpperCase();
    hp.innerText = pokemonHP;
    attack.innerText = pokemonAttack;
    defense.innerText = pokemonDefense;
    speed.innerText = pokemonSpeed;
};

const searchPokemon = async () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm.length === 0) {
        searchResults.innerHTML = ''; // Clear the search results if the search input is empty
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
        const data = await response.json();
        const matchingPokemon = data.results.filter(pokemon => pokemon.name.startsWith(searchTerm));

        // Display the matching Pokémon names
        searchResults.innerHTML = matchingPokemon.map(pokemon => `<li onclick="selectPokemon('${pokemon.name}')">${pokemon.name}</li>`).join('');
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        searchResults.innerHTML = 'Error fetching Pokémon';
    }
};

// Function to handle selection of a Pokémon from search results
const selectPokemon = async (pokemonName) => {
    searchInput.value = pokemonName;
    await pokeAPI(pokemonName);
    searchResults.innerHTML = ''; // Clear the search results
};

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from submitting
    await searchPokemon();
});

searchInput.addEventListener('input', async () => {
    await searchPokemon();
});

// Add event listener to search button
searchButton.addEventListener('click', async () => {
    await searchPokemon();
});

const url = "https://pokeapi.co/api/v2";

function getPokemons() {
	return fetch(`${url}/pokemon/?limit=350`)
		.then((res) => res.json())
		.then((res) => res.results);
}
function getPokemon(pokemon) {
	return fetch(`${url}/pokemon/${pokemon}`).then((res) => res.json());
}

export default {
	getPokemons,
	getPokemon,
};

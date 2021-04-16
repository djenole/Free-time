function getPokemon(id) {
    const url = ``

    return fetch(url).then(resp => resp.json)
}

useEffect(()=> {
    getPokemon(1).then(data => {
        
    })
})

function createPokemonCard(data) {

}
const pokemons = document.querySelector('#pokemons')

fetch('https://pokeapi.co/api/v2/pokemon', {
    method: 'GET',
    headers: { "Content-Type": "application/json" }
})
    // when a response is returned from the above fetch,
    // tell js to read it as JSON (make it usable)
    // it's as if we had said let response = data from API
    .then((response) => {
        return response.json()
    })
    // then tell js to do something with the JSON
    .then((data) => {
        // data is what the previous promise returned (response.json())
        console.log(data.results)
        for (let result of data.results) {
            let pokeDiv = document.createElement('div')
            let nameDiv = document.createElement('a')
            nameDiv.innerText = result.name
            nameDiv.href = result.url
            pokeDiv.appendChild(nameDiv)
            pokemons.appendChild(pokeDiv)
        }
    })



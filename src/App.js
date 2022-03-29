import React, { useState, useEffect } from "react";
const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

function App() {
  const [allPokemon, setAllPokemon] = useState([])


  const firstGeneration = {
    offest: 0,
    limit: 152,
  }

  const getAllPokemon = () => {
    P.getPokemonsList(firstGeneration).then(response => {
      setAllPokemon(response.results)
      console.log(response.results)
    })
  }

  useEffect(() => {getAllPokemon()}, [])

  
  return (
    <div className="App">
      <>
      <div>Pokemon go here</div>
      </>
    </div>
  );
}

export default App;

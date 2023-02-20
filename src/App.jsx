import { useState, useEffect } from "react";
import { AutoComplete } from "antd";
import axios from "axios";

function App() {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        const pokemonList = response.data.results.map(pokemon => {
          return { value: pokemon.name };
        });
        setOptions(pokemonList);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <AutoComplete
        style={{ width: 230 }}
        placeholder="test"
        options={options}
        filterOption={true}
        onSelect={(value) => {
          console.log(value);
        }}
        onSearch={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
}

export default App;

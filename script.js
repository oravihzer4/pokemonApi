fetchData();
async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName");
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName.value.toLowerCase()}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    let pokeAbility = data.abilities[0].ability.name;

    const cardPlace = (document.getElementById(
      "cardPlace"
    ).innerHTML = `<div class="card text-center" style="width: 18rem;">
  <img src="${pokemonSprite}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">
    <h3>Name: ${data.name}</h3>
    type: ${data.types[0].type.name}<br>
    height: ${data.height}<br>
        weight: ${data.weight}<br>
      abilities & moves: <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ability</th>
      <th scope="col">move</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>${pokeAbility}</td>
      <td>Otto</td>

    </tr>

  </tbody>
</table>
    
    
    
    </p>
  </div>
</div>`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
  pokemonName.value = "";
}

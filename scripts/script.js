import data from '../pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");
const button = document.getElementById("generate-pokemon");

button.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * data.pokemon.length);
  const pokemon = data.pokemon[randomIndex];

  let TotalHeight = 0;
  let AvgHeight = 0;

  let TotalWeight = 0;
  let AvgWeight = 0;

  let TotalSpawns = 0;
  let AvgSpawns = 0;

  for (let i = 0; i < data.pokemon.length; i++) {
    //Add up the total height and weight to calculate the averages
    let withoutm = 0;
    withoutm = data.pokemon[i].height.replace("m", "");
    withoutm = withoutm.trim();
    TotalHeight += parseFloat(withoutm);

    let withoutkg;
    withoutkg = data.pokemon[i].weight.replace("kg", "");
    withoutkg = withoutkg.trim();
    TotalWeight += parseFloat(withoutkg);

    //Add up the total spawns to calculate the average spawns
    TotalSpawns += data.pokemon[i].avg_spawns;
  }

  //Calculate the averages
  AvgHeight = TotalHeight / data.pokemon.length;
  AvgHeight = AvgHeight.toFixed(2);
  AvgWeight = TotalWeight / data.pokemon.length;
  AvgWeight = AvgWeight.toFixed(2);
  AvgSpawns = TotalSpawns / data.pokemon.length;
  AvgSpawns = Math.round(AvgSpawns);

  let html = `
    <div class="container">
      <div class="card">
        <div class="card-info">
          <h1>${pokemon.num} - ${pokemon.name}</h1>
          <div class="img-border">
            <img class="pokemon" src="${pokemon.img}" alt="pokemon image">
            <p class="size">Height:${pokemon.height} Weight:${pokemon.weight}</p>
          </div>
          <div class="stats">
            <p><strong>Type:</strong><span class="right"> ${pokemon.type}</span></p>
            <p><strong>Weaknesses:</strong><span class="right">${pokemon.weaknesses}</span></p>
            <p><strong>Spawn chance:</strong> <span class="right">${pokemon.spawn_chance}</span></p>
          </div>
        </div>
      </div>
      <div class="fact-border">
        <div class="facts">
          <h1>Pokemon Facts</h1>
          <p><strong>Average height of all pokemon:</strong><span class="right">${AvgHeight} m</span></p>
          <p><strong>Average weight of all pokemon:</strong><span class="right">${AvgWeight} kg</span></p>
          <p><strong>Average spawns of all pokemon:</strong><span class="right">${AvgSpawns}</span></p>
        </div>
      </div>
    </div>`;
  
  output.innerHTML = html;
});

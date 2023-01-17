import data from '../pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");

let html = "";
//TODO make this number random!
let i = Math.floor(Math.random() * data.pokemon.length);
html += `
<div class="card">
    <div class = "card-info">
        <h1>
        ${data.pokemon[i].num} - ${data.pokemon[i].name}
        </h1>
    <div class="img-border">
        <img class="pokemon" src="${data.pokemon[i].img}" alt="pokemon image">
        <p class="size">Height:${data.pokemon[i].height} Weight:${data.pokemon[i].weight}</p>
    </div>  
    <div class="stats">
            <p><strong>Type:</strong><span class="right"> ${data.pokemon[i].type}</span></p>
            <p><strong>Weaknesses:</strong><span class="right">${data.pokemon[i].weaknesses}</span></p>
            <p><strong>Spawn chance:</strong> <span class="right">${data.pokemon[i].spawn_chance}</span></p>
        </div>
    </div>
</div>
<div class = "faq">
<h1>Pokemon Facts</h1>`;

let TotalHeight = 0;
let AvgHeight = 0;

let TotalWeight = 0;
let AvgWeight = 0;

let TotalSpawns = 0;
let AvgSpawns = 0;

for (let i = 0; i < data.pokemon.length; i++) {
    //Add up the total damage to calculate the average damage across all pokemon
    TotalHeight += data.pokemon[i].height;
    TotalWeight += data.pokemon[i].weight;
    TotalSpawns += data.pokemon[i].spawn_time;

}

AvgHeight = TotalHeight / data.pokemon.length;
AvgWeight = TotalWeight / data.pokemon.length;
AvgSpawns = TotalSpawns / data.pokemon.length;

html += `
<p> ${AvgHeight}
<p> ${AvgWeight}
`


output.innerHTML = html;
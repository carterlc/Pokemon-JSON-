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
</div>`


let TotalHeight = 0;
let AvgHeight = 0;

let TotalWeight = 0;
let AvgWeight = 0;

let TotalSpawns = 0;
let AvgSpawns = 0;

for (let i = 0; i < data.pokemon.length; i++) {
    //Add up the total damage to calculate the average damage across all pokemon
    //replace meters from the json string
    let withoutm = 0;
    withoutm = data.pokemon[i].height.replace("m","");
    withoutm = withoutm.trim();
    TotalHeight += parseFloat(withoutm);

    //replace kg from the json string data
    let withoutkg;
    withoutkg = data.pokemon[i].weight.replace("kg","");
    withoutkg = withoutkg.trim();
    TotalWeight += parseFloat(withoutkg);
    //spawns is whole int so no conversions neccessary
    TotalSpawns += data.pokemon[i].avg_spawns;
}
//output the calculations
AvgHeight = TotalHeight / data.pokemon.length;
//make the int only 2 decimals long
AvgHeight = AvgHeight.toFixed(2);
AvgWeight = TotalWeight / data.pokemon.length;
AvgWeight = AvgWeight.toFixed(2);
AvgSpawns = TotalSpawns / data.pokemon.length;
AvgSpawns = Math.round(AvgSpawns);

html += `
<div class = "fact-border">
    <div class = "facts">
        <h1>Pokemon Facts</h1>
        <p><strong>Average height of all pokemon:</strong><span class = "right">${AvgHeight} m</span></p>
        <p><strong>Average weight of all pokemon:</strong><span class = "right">${AvgWeight} kg</span></p>
        <p><strong>Average spawns of all pokemon:</strong><span class = "right">${AvgSpawns}</span></p>
    </div>
</div>`;


output.innerHTML = html;
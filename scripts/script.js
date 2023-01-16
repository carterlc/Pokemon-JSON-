import data from '../pokedex.json' assert { type: 'json' };
const output = document.getElementById("output");

let html = "";
let i = Math.floor(Math.random() * data.pokemon.length);
//TODO make this number random!
// for (let i = 0; i < data.pokemon.length; i++) {

    // console.log(data.pokemon[i].name);
    // document.write(data.pokemon[i].name);
    // console.log(data.pokemon[i].height);
    // console.log(data.pokemon[i].weight);

    html += `
<div class="card">
<h1>
    ${data.pokemon[i].num} - ${data.pokemon[i].name}
</h1>

<img src="${data.pokemon[i].img}" alt="pokemon image">
<div class="info">
<p>
${data.pokemon[i].type}
</p>
</div>
</div>`;
// }
output.innerHTML = html;
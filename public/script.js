import heroes_data from '/assets/heroes.js'

const heroes_list = document.querySelector('#heroes')

const dd = [
    "Initiator",
    "Disabler",
    "Escape",
    "Nuker",
    "Carry",
    "Support",
    "Pusher",
    "Durable",
];

const laneRoles = [
    'safe lane',
    'soft support',
    'mid lane',
    'hard support',
    'off lane',

]

const getHeroesPack = (iteration = 0, step = 20, max_parts = 5) => {

  let start = 0;
  let end = step;

  if(iteration > 0) {
    start = step * iteration
    end = start + step
  }
  

  return heroes_data.slice(start, end).map((item, index) => {
      const name = item.name.replace(/^npc_dota_hero_/,'');
      
      return `
        <div class="heroes-item">
          <img src="https://cdn.dota2.com/apps/dota2/images/heroes/${name}_vert.jpg" alt="">
        </div>`
  })
  .join('');

}



laneRoles.forEach((laneRole, i) => {
    
    heroes.innerHTML += `
        <div class="heroes-column">
          <div class="heroes-pack">
            <h2>
              ${laneRole}
            </h2>
            <div class="heroes-select">
               ${getHeroesPack(i, 14)}
             </div>
          </div>   
        </div>
    `;
})

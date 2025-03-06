import heroes_data from './heroes.js'

// const heroes_list = document.querySelector('#heroes')

// const dd = [
//     "Initiator",
//     "Disabler",
//     "Escape",
//     "Nuker",
//     "Carry",
//     "Support",
//     "Pusher",
//     "Durable",
// ];

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
        <div class="heroes-pack__item">
          <img class="heroes-pack__image" src="https://cdn.dota2.com/apps/dota2/images/heroes/${name}_vert.jpg" alt="">
        </div>`
  })
  .join('');

}



laneRoles.forEach((laneRole, i) => {
    
    heroes.innerHTML += `
        <div class="heroes">
          <div class="heroes__column">
            <h2 class="heroes__title">
              ${laneRole}
            </h2>
            <div class="heroes-pack">
               ${getHeroesPack(i, 14)}
             </div>
          </div>   
        </div>
    `;
})

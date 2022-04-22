const main = document.querySelector('main');
document.getElementById('gioca').addEventListener('click', play);
const BOMBARRAY = 16;

function play(){
  resetAll();
  const level = document.getElementById('level').value; //prendiamo valori dalle option
  console.log("l'utente ha scelto "+level);
  const levelGriglia = [100,81,49];
  const numeroCelle = levelGriglia[level];
  console.log('saranno presenti '+numeroCelle+ ' celle');
  const bombe = generaBombe(numeroCelle);
  generateGriglia(numeroCelle); //genererà la nostra griglia
}

function generateGriglia(numeroCelle){
  const griglia = document.createElement('div');
  griglia.className='griglia';
  for(let i = 1; i <=numeroCelle; i++){
    console.log(i)
    const cella = document.createElement('div');
    cella.className='cella box'+numeroCelle;
    cella.innerHTML=`<span>${i}</span>`;
    cella.addEventListener('click', clickSuCella);
    griglia.append(cella);
    console.log(cella)
  }
  
  main.append(griglia);

}

function resetAll(){
  main.innerHTML= '';
}

function clickSuCella(){
  console.log(this);
  this.classList.add('active');
}



function generaBombe(numeroCelle){
  const bombeCreate = [];
  while(bombeCreate.length<BOMBARRAY){
     const bomb =getRandomInt(1,numeroCelle);
  //console.log('le bombe sono estratte ai seguenti numeri '+bomb);
  if(!bombeCreate.includes(bomb)){
    bombeCreate.push(bomb);
  }
  }
  console.log("le bombe generate sono nelle seguenti celle randomiche! "+bombeCreate);
 

  return bombeCreate;
}

function getRandomInt(min, max){
  return Math.floor(Math.random() * ( max - min +1 ) + min);
}
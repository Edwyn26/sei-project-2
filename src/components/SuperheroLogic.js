import React from 'react'

function SuperheroLogic(playerChoice, compChoice) {

  //if (playerChoice === compChoice) return 'Draw'

  const getResult = () => {
  if (
    (playerChoice === SuperheroLogic.powerstats.intelligence > compChoice === SuperheroLogic.powerstats.intelligence) || 
    (playerChoice === SuperheroLogic.powerstats.strength > compChoice === SuperheroLogic.powerstats.strength) ||
    (playerChoice === SuperheroLogic.powerstats.speed > compChoice === SuperheroLogic.powerstats.speed) || 
    (playerChoice === SuperheroLogic.powerstats.durability > compChoice === SuperheroLogic.powerstats.durability) ||
    (playerChoice === SuperheroLogic.powerstats.power > compChoice === SuperheroLogic.powerstats.power) ||
    (playerChoice === SuperheroLogic.powerstats.combat > compChoice === SuperheroLogic.powerstats.combat)){ 
    return 'Player win'
  }
if (
  (playerChoice === SuperheroLogic.powerstats.intelligence === compChoice === SuperheroLogic.powerstats.intelligence) || 
    (playerChoice === SuperheroLogic.powerstats.strength === compChoice === SuperheroLogic.powerstats.strength) ||
    (playerChoice === SuperheroLogic.powerstats.speed === compChoice === SuperheroLogic.powerstats.speed) || 
    (playerChoice === SuperheroLogic.powerstats.durability === compChoice === SuperheroLogic.powerstats.durability) ||
    (playerChoice === SuperheroLogic.powerstats.power === compChoice === SuperheroLogic.powerstats.power) ||
    (playerChoice === SuperheroLogic.powerstats.combat === compChoice === SuperheroLogic.powerstats.combat)){
  return 'Draw'
}
return 'Computer win'
  }

const playGame = e => {
  const playerChoice = e.target.value
}

return (
  //Will need function play game
  <div>
    <button onClick={playGame} value="intelligence">Intelligence</button>
    <button onClick={playGame} value="strength">Strength</button>
    <button onClick={playGame} value="speed">Speed</button>
    <button onClick={playGame} value="durability">Durability</button>
    <button onClick={playGame} value="power">Power</button>
    <button onClick={playGame} value="combat">Combat</button>
  </div>
)
    



export default SuperheroLogic
import ZombieFighterList from "./components/ZombieFighterList"
import { useState } from "react"


const App = () => {
  // 1) Create a new state variable named team and set the initial state to an empty array [].
  // 2) Create a new state variable named money and set the initial state to 100.
  // 3) Create a new state variable named zombieFighters and set the initial state to the following arrar of objects -> found in exercise
  const [ team, setTeam ] = useState([])
  const [ money, setMoney ] = useState(100)
  const [ zombieFighters, setZombieFrighters ] = useState([
      {
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://via.placeholder.com/150/92c952',
      },
      {
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://via.placeholder.com/150/771796',
      },
      {
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://via.placeholder.com/150/24f355',
      },
      {
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/d32776',
      },
      {
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://via.placeholder.com/150/1ee8a4',
      },
      {
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://via.placeholder.com/150/66b7d2',
      },
      {
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://via.placeholder.com/150/56acb2',
      },
      {
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://via.placeholder.com/150/8985dc',
      },
      {
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://via.placeholder.com/150/392537',
      },
      {
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://via.placeholder.com/150/602b9e',
      },   
  ])

  const renderZombieFighters = zombieFighters.map((zombieFighter) => {
    return(
      <ZombieFighterList
      key = {zombieFighter.name}
      zombieFighter = {zombieFighter}
      />
    )
  })

  return (
    <>
    {renderZombieFighters}
    <p> Current Value: </p>{money}
    </>
  )

}

export default App
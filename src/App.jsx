/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters] = useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Daphne_Blake.png/150px-Daphne_Blake.png',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://images.moviesanywhere.com/ddf31e8e478771e7a6ee4125d2ffedfd/ce636b4d-42b3-4d1e-8200-a5d01512b697.jpg',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://static.wikia.nocookie.net/sonic-adventures-animated-series/images/b/bf/Shadow_Render_1.png/revision/latest?cb=20200213155235',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://static.wikia.nocookie.net/sonic-x9874/images/5/57/Tails_Sonic_X.png/revision/latest?cb=20210125063219',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://static.wikia.nocookie.net/disney/images/8/89/Profile_-_Kim_Possible.png/revision/latest?cb=20190312090023',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://cdn2.vectorstock.com/i/1000x1000/32/76/beautiful-cartoon-character-medic-standing-vector-20073276.jpg',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://static.wikia.nocookie.net/kaijuwikia/images/7/73/Luigi_NSMBUDX.png/revision/latest?cb=20210728071721',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://www.clker.com/cliparts/3/7/7/f/1268838238959637666link-zelda_red_mini-md.png',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://scg-static.starcitygames.com/articles/2024/04/88190cc9-satoru-the-infiltrator-1536x1086.jpg',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://preview.redd.it/joi1ezb1k3071.png?width=600&format=png&auto=webp&s=fce8bc663888459707300c594a90fd6062540e0e',
    },
  ]);

  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('Not enough money');
      return;
    }
    setTeam([...team, fighter]);
    setMoney(money - fighter.price);
  };

  const handleRemoveFighter = (index) => {
    const removedFighter = team[index];
    const newTeam = team.filter((_, i) => i !== index);
    setTeam(newTeam);
    setMoney(money + removedFighter.price);
  };

  useEffect(() => {
    const strength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
    const agility = team.reduce((sum, fighter) => sum + fighter.agility, 0);
    setTotalStrength(strength);
    setTotalAgility(agility);
  }, [team]);

  return (
    <div className="App">
      <h1>Reactville Zombie Apocalypse</h1>
      <h2>Money: ${money}</h2>
      <h2>Total Team Strength: {totalStrength}</h2>
      <h2>Total Team Agility: {totalAgility}</h2>

      <h2>Available Zombie Fighters:</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>

      <h2>Your Team:</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>Price: ${member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleRemoveFighter(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
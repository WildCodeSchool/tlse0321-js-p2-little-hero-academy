import React, { useState } from 'react';

import axios from 'axios';
import DisplayVillain from './DisplayVillain';

const villainList = [370, 423, 405, 208, 514, 538, 575];

function getRandomVillain(max) {
  return Math.floor(Math.random() * max);
}

function SuperVillain() {
  const [villain, setVillain] = useState('');

  const randomIdVillain = getRandomVillain(6);
  const randomVillain = villainList[randomIdVillain];
  const urlVillain = `https://www.superheroapi.com/api.php/10226046072486283/${randomVillain}`;
  console.log(villain[randomIdVillain]);

  const getVillain = () => {
    axios
      .get(urlVillain)
      .then((results) => results.data)
      .then((data) => {
        setVillain(data);
      });
  };
  return (
    <div className="App">
      <DisplayVillain villain={villain} />
      <button type="button" onClick={getVillain}>
        New Villain
      </button>
    </div>
  );
}

export default SuperVillain;

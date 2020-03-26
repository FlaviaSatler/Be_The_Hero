import React, { useState } from 'react';

import Header from './Header'


function App() {

  const [counter, setCounter] = useState(0);

  //retorna um array com duas posições: [valor, funçãoDeAtualização]

  function increment() {
    setCounter(counter + 1)
    console.log(counter)
  }

  return (
    <div>
      <Header>Contador: {counter} </Header>

      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;

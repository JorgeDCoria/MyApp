import React, { useState } from 'react';

import './App.css';

interface Sub {
  nick: string;
  subMonths: number;
  avatar: string;
  //puede o no tener description
  description?:string
}

function App() {
  //stado que puede aceptar dos tipos de datos <number | string>
  // const [number, setNumber] = useState<number >(5);
  // const changeNumber = () => {
  //   setNumber(number + 1);
  // }
  // return (
  //   <div className="App">
  //     <h1>soy primer h1 de un proyecto con react and typescript</h1>
  //     <button onClick = {changeNumber}> Change Number</button>
  //     {number}
  //   </div>
  // );

  const [subs, setSubs] = useState<Array<Sub>>([{
    nick:"dapelu",
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?dapelu',
    description: 'dapelo es una sub'
  },
  {
    nick:"dapeluOne",
    subMonths: 5,
    avatar: 'https://i.pravatar.cc/150?dapelu',
  
  }

])

  return(
    <div>
      <h1>amigos</h1>
      <ul>
        {
          subs.map(sub => {
            return <li key={sub.nick}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>{sub.nick}(<small>{sub.subMonths}</small>)</h4>
              {/* como la propiedad description puede no existir se debe especificar, solucionamos con ? */}
              <p>{sub.description?.substring(0,100)}</p>
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default App;

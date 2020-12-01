import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppSC } from '../styles/AppSC';

function App() {

  // using useState to take the valu of the input
  const [value, setValue] = useState('');

  console.log(value)

  return (
    <AppSC >
      <div className="App">
        
          <input className="search" placeholder="Usuário" required />
          <Link to="/profile">
          <button type="submit" className="button" onClick = {() => {
            const search = document.querySelector('.search').value;
            setValue(search);
          }}>Button</button></Link>

      </div>
    </AppSC>
  );
}

export default App;

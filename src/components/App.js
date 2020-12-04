import React, { useState } from 'react';
import { Link } from 'react-router-dom'

//styled components
//import { AppSC } from '../styles/AppSC';

//importing styles
import '../styles/main.css'
import '../styles/App.css';
import logo from '../styles/assets/logo.png';

//use redux to take the input.value
import { useSelector, useDispatch } from 'react-redux'
import{ sum } from '../store/actions/calculator.actions'


function App() {

  const dispatch = useDispatch();

  const result = useSelector((state) => state.calculator)

  // using useState to take the value of the input
  const [value, setValue] = useState({result});

  const handleFormSubmit = e => {
    e.preventDefault();
  }

  /* const handleInputChange = e => {
    setValue(e.target.value);
  } */

  return (
    //<AppSC>
      <div className="App">

          <img className="logo" src={logo} alt=''logo />
            
              <form className="form" onChange={handleFormSubmit}>
              <input className="search" placeholder="   Usuário" required 
              onChange={(e) => setValue(e.target.value)} />
                <Link to='/profile'>
                  <button type="button" className="button" onClick={() => {
                      dispatch(sum(value))
                  }}
                  >Entrar  <i class="fas fa-arrow-right"></i>
                  </button>
                </Link>
              </form>
            
      </div>
    //</AppSC>
  );
}

export default App;

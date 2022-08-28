import './App.css';
import Home from './Pages/Home';
import Add from './Pages/Add';
import Rural from './Pages/Rural.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar';
import Login from './Pages/Login';
import Voting from './Pages/Voting';
import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { DataContext } from './DataContext';

function App() {

  const [rural, setRural] = useState([]);

  useEffect(() => {
    callApi();
  });

  function callApi() {
    Axios.get('https://localhost:5001/GetRurals')
      .then(function (response) {

        if (rural.length > 0)
          return;

        console.log(response.data);
        setRural(response.data);
      })
  }
  return (
    <DataContext.Provider value={rural}>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/rural' exact element={<Rural />} />
          <Route path='/add' exact element={<Add />} />
          <Route path='/voting' exact element={<Voting />} />
          <Route path='/login' exact element={<Login />} />
        </Routes>
      </Router>
    </DataContext.Provider>
  );
}

export default App;

import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import TopBar from './TopBar';
import Objective from './objective';
import MoviesContainer from './moviesContainer';
import Sessions from './sessions';
import Seats from './seats'
import Sucess from './sucess';


function App() {
  const [movies, setMovies] = useState([]);
  const [objective, setObjective] = useState("Selecione o filme")
  useEffect(() => {
    const request = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
    request.then(server => { setMovies(server.data) });
  })

  return (
    <div className="App">
      <TopBar />
      <Objective content={objective}></Objective>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MoviesContainer movies={movies} />} />
          <Route path="/sessoes/:id" element={<Sessions content={setObjective} />} />
          <Route path="/assentos/:id" element={<Seats content={setObjective}/>}/>
          <Route path="/sucesso" element={<Sucess content={setObjective}/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
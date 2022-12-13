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
  const [session, setSession] = useState(sessionExample);
  const [buy, setBuy] = useState({
      ids: [],
      name: "",
      cpf: ""
  });

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
          <Route path="/assentos/:id" element={<Seats content={setObjective} session={session} setSession={setSession} buy={buy} setBuy={setBuy}/>}/>
          <Route path="/sucesso" element={<Sucess content={setObjective} session={session} buy={buy}/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;




const sessionExample = {
  "id": 0,
  "name": "",
  "day": {
    "id": 0,
    "weekday": "",
    "date": "",
  },
  "movie": {
      "id": 0,
      "title": "",
      "posterURL": "",
      "overview": "",
      "releaseDate": "",
  },
  "seats": [
      {
          "id": 1,
          "name": "1",
          "isAvailable": false,
      },
      {
          "id": 2,
          "name": "2",
          "isAvailable": true,
      },
      {
          "id": 3,
          "name": "3",
          "isAvailable": true,
      },
      {
          "id": 4,
          "name": "4",
          "isAvailable": true,
      },
      {
          "id": 5,
          "name": "5",
          "isAvailable": true,
      },
      {
          "id": 6,
          "name": "6",
          "isAvailable": true,
      },
      {
          "id": 7,
          "name": "7",
          "isAvailable": true,
      },
      {
          "id": 8,
          "name": "8",
          "isAvailable": true,
      },
      {
          "id": 9,
          "name": "9",
          "isAvailable": true,
      },
      {
          "id": 10,
          "name": "10",
          "isAvailable": true,
      },
      {
          "id": 11,
          "name": "11",
          "isAvailable": true,
      },
      {
          "id": 12,
          "name": "12",
          "isAvailable": true,
      },
      {
          "id": 13,
          "name": "13",
          "isAvailable": true,
      },
      {
          "id": 14,
          "name": "14",
          "isAvailable": true,
      },
      {
          "id": 15,
          "name": "15",
          "isAvailable": true,
      },
      {
          "id": 16,
          "name": "16",
          "isAvailable": true,
      },
      {
          "id": 17,
          "name": "17",
          "isAvailable": true,
      },
      {
          "id": 18,
          "name": "18",
          "isAvailable": true,
      },
      {
          "id": 19,
          "name": "19",
          "isAvailable": true,
      },
      {
          "id": 20,
          "name": "20",
          "isAvailable": true,
      },
      {
          "id": 21,
          "name": "21",
          "isAvailable": true,
      },
      {
          "id": 22,
          "name": "22",
          "isAvailable": true,
      },
      {
          "id": 23,
          "name": "23",
          "isAvailable": true,
      },
      {
          "id": 24,
          "name": "24",
          "isAvailable": true,
      },
      {
          "id": 25,
          "name": "25",
          "isAvailable": true,
      },
      {
          "id": 26,
          "name": "26",
          "isAvailable": true,
      },
      {
          "id": 27,
          "name": "27",
          "isAvailable": true,
      },
      {
          "id": 28,
          "name": "28",
          "isAvailable": true,
      },
      {
          "id": 29,
          "name": "29",
          "isAvailable": true,
      },
      {
          "id": 30,
          "name": "30",
          "isAvailable": true,
      },
      {
          "id": 31,
          "name": "31",
          "isAvailable": true,
      },
      {
          "id": 32,
          "name": "32",
          "isAvailable": true,
      },
      {
          "id": 33,
          "name": "33",
          "isAvailable": true,
      },
      {
          "id": 34,
          "name": "34",
          "isAvailable": true,
      },
      {
          "id": 35,
          "name": "35",
          "isAvailable": true,
      },
      {
          "id": 36,
          "name": "36",
          "isAvailable": true,
      },
      {
          "id": 37,
          "name": "37",
          "isAvailable": true,
      },
      {
          "id": 38,
          "name": "38",
          "isAvailable": true,
      },
      {
          "id": 39,
          "name": "39",
          "isAvailable": true,
      },
      {
          "id": 40,
          "name": "40",
          "isAvailable": true,
      },
      {
          "id": 41,
          "name": "41",
          "isAvailable": true,
      },
      {
          "id": 42,
          "name": "42",
          "isAvailable": true,
      },
      {
          "id": 43,
          "name": "43",
          "isAvailable": true,
      },
      {
          "id": 44,
          "name": "44",
          "isAvailable": true,
      },
      {
          "id": 45,
          "name": "45",
          "isAvailable": true,
      },
      {
          "id": 46,
          "name": "46",
          "isAvailable": true,
      },
      {
          "id": 47,
          "name": "47",
          "isAvailable": true,
      },
      {
          "id": 48,
          "name": "48",
          "isAvailable": true,
      },
      {
          "id": 49,
          "name": "49",
          "isAvailable": true,
      },
      {
          "id": 50,
          "name": "50",
          "isAvailable": true,
      },
  ]
}
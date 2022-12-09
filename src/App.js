import styled from 'styled-components';
import TopBar from './TopBar';
import movies from "./moviesLst"
import MoviesContainer from './moviesContainer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Objective>
        <FontObjective>
          Selecione o horário
        </FontObjective>
      </Objective>
      <MoviesContainer movies={movies}></MoviesContainer>
    </div>
  );
}

export default App;

const Objective = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
`

const FontObjective = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #293845;
`



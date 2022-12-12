import Movie from "./movie";
import styled from "styled-components";

export default function MoviesContainer(props){
    return (
        <MoviesBox>{props.movies.map(Movie)}</MoviesBox>
    )
    
}

const MoviesBox = styled.div`
display : flex;
justify-content: space-around;
flex-flow: wrap;
`
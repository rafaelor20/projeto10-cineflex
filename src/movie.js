import styled from "styled-components"
import {Link} from "react-router-dom"

export default function Movie(movie){
    const id = movie.id;
    return (
        <Link to={`/sessoes/${id}`}>
            <MovieBox data-test="movie">
                <MovieImg src={movie.posterURL}/>
            </MovieBox>
        </Link>
    )
}

const MovieBox = styled.div`
margin : 25px 25px;
`

const MovieImg = styled.img`
width: 129px;
height: 193px;
`
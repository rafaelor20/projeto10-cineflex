import styled from "styled-components"

export default function Movie(movie){
    return (
        <MovieBox>
            <MovieImg src={movie.posterURL}/>
        </MovieBox>
    )
}

const MovieBox = styled.div`
margin : 25px 25px;
`

const MovieImg = styled.img`
width: 129px;
height: 193px;
`
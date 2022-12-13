import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

let idHelper;

export default function Sessions(props) {
    const setObjective = props.content;
    setObjective("Selecione o horário");
    const [movie, setMovie] = useState({
        days: [],
        id: 0,
        overview: "",
        posterURL: "",
        releaseDate: "",
        title: ""
    });
    const id = useParams().id;
    idHelper = id;
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`);
        request.then(server => { setMovie(server.data) });
    });

    return (
        <>
        <SessionsDiv>
            <Days movie={movie}></Days>
        </SessionsDiv>
        <BottomBar movie={movie}/>
        </>
    );
}

function Days(props) {
    return (
        <>
            {props.movie.days.map(Day)}
        </>
    )
}

function Day(props) {
    return (
        <div data-identifier="movie-day">
            <FontDay>{props.weekday} - {props.date}</FontDay>
            <HoursDiv>{props.showtimes.map(Hours)}</HoursDiv>
        </div>

    );
}

function Hours(props) {
    return (
        <Link to={`/assentos/${idHelper}`}>
            <HourDiv data-identifier="showtime">
                <FontHours>{props.name}</FontHours>
            </HourDiv>
        </Link>
        
    );
}

function BottomBar(props){
    const movie = props.movie;
    return(
        <BottomBarDiv data-identifier="footer">
            <ImgContainer><BottomImg src={movie.posterURL}></BottomImg></ImgContainer>
            <FontBottom>{movie.title}</FontBottom>
        </BottomBarDiv>
    )
}

const SessionsDiv= styled.div`
display: flex;
flex-direction: column;
margin: 0px 30px;
`

const FontDay = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
letter-spacing: 0.02em;
`

const HoursDiv = styled.div`
display: flex;

`

const FontHours = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.02em;
color: #FFFFFF;
text-decoration: none;
`

const HourDiv = styled.div`
width: 83px;
height: 43px;
margin: 0px 10px;
background-color: #E8833A;
display: flex;
justify-content: center;
align-items: center;
`

const BottomBarDiv = styled.div`
position: relative;
width: 100%;
height: 117px;
left: 0px;
bottom: 0px;
background: #DFE6ED;
border: 1px solid #9EADBA;
display: flex;
align-items: center;
margin: 10px 0px 0px 0px;
`

const ImgContainer = styled.div`
width: 64px;
height: 89px;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display: flex;
justify-content: center;
align-items: center;
margin: 0px 10px;
`

const BottomImg = styled.img`
width: 48px;
height: 72px;
`

const FontBottom = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
display: flex;
align-items: center;
color: #293845;
`
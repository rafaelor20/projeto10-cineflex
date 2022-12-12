import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`);
        request.then(server => { setMovie(server.data) });
    });

    return (
        <SessionsDiv>
            <Days movie={movie}></Days>

        </SessionsDiv>

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
        <>
            <FontDay>{props.weekday} - {props.date}</FontDay>
            <HoursDiv>{props.showtimes.map(Hours)}</HoursDiv>
        </>

    );
}

function Hours(props) {
    return (
        <HourDiv>{props.name}</HourDiv>
    );
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

const HourDiv = styled.div`
width: 83px;
height: 43px;
margin: 0px 10px;
background-color: #E8833A;
display: flex;
justify-content: center;
align-items: center;
`
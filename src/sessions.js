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
    console.log(id);
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`);
        console.log(request);
        request.then(server => { setMovie(server.data) });
    });

    return (
        <>
            <Days movie={movie}></Days>

        </>

    );
}

function Days(props) {
    console.log(props);
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
            <>{props.showtimes.map(Hours)}</>
        </>

    );
}

function Hours(props) {
    return (
        <HourDiv>{props.name}</HourDiv>
    );
}

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
const HourDiv = styled.div`
width: 83px;
height: 43px;
background-color: #E8833A;
display: flex;
justify-content: center;
align-items: center;
`
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SeatsHelper from './seatsHelper';
import DisplaySeats from './displaySeats';


//const colorSelected = "#0E7D71";
//const colorAvailable = "#7B8B99";
//const colorNotAvailable = "#F7C52B";



export default function Seats(props){
    const setObjective = props.content;
    setObjective("Selecione o(s) assento(s)");
    const [session, setSession] = useState(sessionExample);
    const [buy, setBuy] = useState({
        ids: [],
        name: "",
        cpf: ""
    });
    const propsBuy = {buy: buy, setBuy: setBuy};
    const id = useParams().id;
    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`);
        request.then(server => { setSession(server.data) });
    });
    return (
        <>
        <SeatsContainer>
            <DisplaySeats seats={session.seats} buy={propsBuy}/>
            <SeatsHelper/>
        </SeatsContainer>
        <Inputs buy={propsBuy}/>
        <Link to={`/Rota/sucesso`}><GetSeats data-identifier="book-seat-btn" onClick={()=>requestSeats(propsBuy)} >Reservar assento(s)</GetSeats></Link>   
        <BottomBar data-identifier="footer" id={id}/>
        </>
    );
}

function requestSeats(props){
    console.log(props);
    const url = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
    const request = axios.post(url, props.buy);
    request.then(console.log("Ok!"));
    request.catch(console.log("Error!"));
}

function Inputs(props) {
    return (
        <InputContainer>
            <Font>Nome do comprador:</Font>
            <InputBox data-identifier="client-name" placeholder="Digite seu nome..." onChange={e => updateName(e.target.value, props.buy)}></InputBox>
            <Font>CPF do comprador:</Font>
            <InputBox data-identifier="client-cpf" placeholder="Digite seu CPF..." onChange={e => updateCpf(e.target.value, props.buy)}></InputBox>
        </InputContainer>
    )
}

function updateName(name, props){
    const setBuy = props.setBuy;
    setBuy({
        ids: props.buy.ids,
        name: name,
        cpf: props.buy.cpf
    });
}

function updateCpf(cpf, props){
    const setBuy = props.setBuy;
    setBuy({
        ids: props.buy.ids,
        name: props.buy.name,
        cpf: cpf
    });
}

function BottomBar(props){
    const id = props.id;
    const [movie, setMovie] = useState({
        days: [],
        id: 0,
        overview: "",
        posterURL: "",
        releaseDate: "",
        title: ""
    });

    useEffect(() => {
        const request = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`);
        request.then(server => { setMovie(server.data) });
    });


    return(
        <BottomBarDiv>
            <ImgContainer><BottomImg src={movie.posterURL}></BottomImg></ImgContainer>
            <FontBottom>{movie.title}</FontBottom>
        </BottomBarDiv>
    )
}

const SeatsContainer = styled.div`
display: flex;
justify-content: space-around;
flex-flow: wrap;
margin: 10px 10px;
`
const GetSeats = styled.button`
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
margin: 30px 18%;
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

const InputContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin: 0px 5%;
`

const InputBox = styled.input`
width: 327px;
height: 51px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
`

const Font = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
color: #293845;
`


const sessionExample = {
    "id": 1,
    "name": "15:00",
    "day": {
			"id": 24062021,
      "weekday": "Quinta-feira",
      "date": "24/06/2021",
		},
    "movie": {
        "id": 1,
        "title": "2067",
        "posterURL": "https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg",
        "overview": "A lowly utility worker is called to the future by a mysterious radio signal, he must leave his dying wife to embark on a journey that will force him to face his deepest fears in an attempt to change the fabric of reality and save humankind from its greatest environmental crisis yet.",
        "releaseDate": "2020-10-01T00:00:00.000Z",
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
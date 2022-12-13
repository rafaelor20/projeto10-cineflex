import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Sucess(props){
    console.log(props);
    const setObjective = props.content;
    setObjective("Pedido feito com sucesso!");
    return (
        <Container>
            <BoxText>
                <TitleBox>Filme e sessão</TitleBox>
                <ContentBox>{props.session.movie.title} {props.session.day.date} {props.session.name}</ContentBox>
            </BoxText>
            <BoxText>
                <TitleBox>Ingressos</TitleBox>
                {props.buy.ids.map(Seat)}
            </BoxText>
            <BoxText>
                <TitleBox>Comprador</TitleBox>
                <ContentBox>Nome: {props.buy.name} </ContentBox>
                <ContentBox>CPF: {props.buy.cpf}</ContentBox>
            </BoxText>
            <Link to={"/"}><Return><FontReturn>Voltar pra Home</FontReturn></Return></Link>
        </Container>
    );
}

function Seat(num){
    return (<ContentBox>Assento {num}</ContentBox>);
}

const Container = styled.div`
width: 100%;
padding: 20px 20px;
`

const BoxText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const TitleBox = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #293845;
`

const ContentBox = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #293845;
`

const Return = styled.button`
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
margin: 30px 18%;
display: flex;
justify-content: center;
align-items: center;
`
const FontReturn = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #FFFFFF;
`
import styled from "styled-components";

export default function DisplaySeats(props){
    return (
        <SeatsContainer>
            {props.seats.map(Seat, {props})}
        </SeatsContainer>
    );
}

function Seat(lst, props){
    return(
        <SeatContainer data-identifier="seat" onClick={()=>(chooseSeat(lst.name, this.props.buy))}>
            <FontSeat>
                {lst.name}
            </FontSeat>
        </SeatContainer>
    );
}

function chooseSeat(id, props){
    console.log(props);
    const setBuy = props.setBuy;
    setBuy({
        ids: [...props.buy.ids, id],
        name: "",
        cpf: ""
    });
}

const SeatsContainer = styled.div`
width:100%;
display: flex;
flex-flow:wrap;
margin: 10px 10px;
`

const SeatContainer = styled.div`
margin: 4px 3px;
box-sizing: border-box;
width: 25px;
height: 25px;
border: 1px solid #808F9D;
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
background: #C3CFD9;
`

const FontSeat = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #000000;
`
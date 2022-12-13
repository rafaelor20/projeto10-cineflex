import styled from "styled-components"

export default function SeatsHelper(){
    return(
        <Container>
            <Element>
                <Select/>
                <Font>Selecionado</Font>
            </Element>
            <Element>
                <Available/>
                <Font>Disponível</Font>
            </Element>
            <Element>
                <NotAvailable/>
                <Font>Indisponível</Font>
            </Element>
        </Container>
    );
}

const Container = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
margin: 0px 30px;
`

const Element = styled.div`
width: 100px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const Font = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
display: flex;
align-items: center;
letter-spacing: -0.013em;
color: #4E5A65;
`

const Select = styled.div`
width: 22px;
height: 22px;
background: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 17px;
box-sizing: border-box;
`

const Available = styled.div`
width: 22px;
height: 22px;
background: #C3CFD9;
border: 1px solid #7B8B99;
border-radius: 17px;
box-sizing: border-box;
`

const NotAvailable = styled.div`
width: 22px;
height: 22px;
background: #FBE192;
border: 1px solid #F7C52B;
border-radius: 17px;
box-sizing: border-box;
`
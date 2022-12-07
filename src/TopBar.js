import styled from 'styled-components';

export default function TopBar(){
    return (
        <DivTopBar>
            <FontTopBar>CINEFLEX</FontTopBar>
        </DivTopBar>
    )
}

const DivTopBar = styled.div`
width: 375px;
height: 67px;
background-color: #C3CFD9;
display: flex;
justify-content: center;
`;

const FontTopBar = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
display: flex;
align-items: center;
text-align: center;
color: #E8833A;
`

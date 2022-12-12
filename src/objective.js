import styled from "styled-components"

export default function Objective(props) {
    return (
        <ObjectiveDiv>
            <FontObjective>
                {props.content}
            </FontObjective>
        </ObjectiveDiv>
    )
}

const ObjectiveDiv = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
`

const FontObjective = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.04em;
color: #293845;
`
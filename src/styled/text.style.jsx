import styled,{css} from "styled-components";

const Text= styled.p`
    font-size : 18px;

    ${props => props.success && css`
    background: grey;
    color: white;
  `}
`

const TextBlock = styled.div`
    background : grey;
    padding : 50px;
`
export {Text,TextBlock};
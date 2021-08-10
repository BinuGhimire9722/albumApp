import styled from "styled-components";

const AlbumTitle = styled.p`
    font-size : 15px;
    color : red;
    &:hover {
        color : green;
        cursor : pointer;
    }
`
const Album = styled.div`
    margin : 20px;
    border-bottom : 2px solid black;
`

const HomeBlock = styled.div`
    padding : 40px;
`
export { AlbumTitle, Album, HomeBlock };
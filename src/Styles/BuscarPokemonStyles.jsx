import styled from "styled-components";

const Input = styled.input`
    width: 80%;
    outline: none;
    background: none;
    border: 0;
    color:${props=>props.theme.text} ;
    font-size: 1.6rem;
    padding: 2px;
    /* border: 2px solid red; */
`;

const ContenedorBusqueda=styled.div`
    width: 100%;
    height: auto;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    /* flex-direction: column; */
    justify-content: space-evenly;
    color: ${props => props.theme.text};
    padding: 10px;
    .content{
        border: 2px solid ${props=> props.theme.color2};
        display: flex;
        gap: 20px;
        width: 40%;
        padding: 5px;
        align-items: center;
        justify-content: space-around;
        position: relative;
        border-radius: 10px;
    }
    .icono{
        font-size: 20px;
        cursor: pointer;
    }
    .contentImg{
        display: flex;
        gap: 20px;
    }
`
export {Input,ContenedorBusqueda};
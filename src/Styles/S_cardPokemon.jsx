import styled from "styled-components";


const ContenedorCard= styled.div`
    border: 3px solid blue;
    background: #192438;
    border-radius:10px;
    width: 200px;
    padding: 16px;
    text-align: center;
    position: relative;
    overflow: hidden;
    &::before{
        border: 3px solid ;
        content: '';
        display: block;
        position: absolute;
        width: 120px;
        height: 120px;
        background-color: ${props=>props.color};
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        margin: auto;
        border-radius: 50%;
        filter: blur(80px);
    }
`
const Numero= styled.span`
    border: 3px solid red;
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${(props=>props.color)};
    font-weight: 700;
`
export {ContenedorCard,Numero};
import { styled } from "styled-components";

interface Props {
    variant?:"primary"|"secondary",
}

const Title = styled.h1<Props>`
    font-size:1.5em;
    text-align:center;
    color:${({variant})=>variant!=="primary"?"red":"yellow"};
`;

const Wrapper = styled.section<Props>`
    padding:4em;
    background:green;
`;

export {Title,Wrapper}
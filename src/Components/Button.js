import styled from 'styled-components';



export const ButtonContainer = styled.button`
text-transform: Capitalize;
font-size: 1.2rem;
background: transparent;
border: 0.1rem solid var(--lightBlue);
border-color: ${props=>props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 0.5rem;
color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
transition: all linear .5s;
outline: none;
&:hover{
    background: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
}
&:focus{
    outline: none;
}
`
import styled from "styled-components";

export const Button = styled.button`
    position: relative;
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    curson: pointer;
    font-size 16px;
    font-weight: 700;
    padding: 15px 60px;
    background-color: ${({bg}) => bg || '#fff'};
    color: ${({color}) => color || '#313'};

    &:active {
        background: #2a71d0;
    }

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);

        .icon-button {
            background: red;
            }
        }
    
    .icon-button {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 30px;
        height: 30px;
        background: #FFCC00;
        color: black;
        border-color: black;
        border-width: medium;
        border-collapse: collapse;
        border-spacing: 15px 50px;
        border-style: inset;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    
`
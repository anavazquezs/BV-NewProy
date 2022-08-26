import styled from 'styled-components';

export const Slide = styled.div`
    background: none;
    max-width: 100%;
    height: auto;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    position: relative;
    img {
        width: 100%;
        height: 80vh;
        vertical-align: top;
    }
`;

export const TextoSlide = styled.div`
    text-align: right;
    margin-right: 1em;
    color: #0BB3D9;
    padding: 2% 5%;
    position: absolute;
    h1 {
        font-size: 2rem;
        font-weight: bold;
        text-shadow: 1px 1px 1px #3c3c3b;
    } 
    button {
        margin-top: 25px;
        background-color: #0bb3d9; 
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 1rem;
        text-shadow: 1px 1px 1px #3c3c3b;
        border-radius: 8px;
        border: 1px solid #3c3c3b;
        border-top-left-radius: 3px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 3px;
        box-shadow: 0px 3px 2px rgb(20,52,90);
    }

    button:hover {
        color:#04B2D9;
        background-color: #FFFFFF;
        border-style: none;
        transition: 0.4s;
    }
    @media screen and (max-width: 758px) {

        h1 {
            font-size: 1.2rem;
        }

        button {
            padding: 8px 10px;
            font-size: 10px;
            border-radius: 8px;
        }
    }
    @media screen and (max-width: 400px) {

        h1 {
            font-size: 0.8rem;
        }
        button {
            padding: 5px 7px;
            font-size: 7px;
            border-radius: 8px;
        }
    }
`;
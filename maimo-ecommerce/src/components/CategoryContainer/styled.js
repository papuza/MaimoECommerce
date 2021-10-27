import styled from "styled-components";

const Container = styled.div`

margin: 0 auto;
font-family: 'Raleway', sans-serif;

.info-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    background-color: #EEE;
    h2{
        font-size: 25px;
        font-weight: bold;
    }
    img{
        width: 150px;
    }
    .buy-btn {
        width: 140px;
        padding: 10px 20px 10px 20px;
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        text-align:center;
        font-weight: 500;
        color: #FFF;
        background-color: #2EE59D;
        border: none;
        border-radius: 45px;
        box-shadow: 0px 8px 15px rgba(46, 229, 157, 0.4);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
    }

    .buy-btn:hover {
        background-color: #fff;
        box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
        color: #000;
        transform: translateY(-7px);
    }

}






`

export { Container }
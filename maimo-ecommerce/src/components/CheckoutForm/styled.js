import styled from "styled-components";

const Container = styled.div`


div{
    #my-form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 auto;
        margin-top: 20px;
        input{
            width: 100%;
            padding: 10px 5px;
            margin-bottom: 10px;
            border: none;
            border-bottom: 2px solid black;
        }
        span{
            font-size: 10px;
            color: red;
        }
        button {
        margin-top: 20px;
        margin-bottom: 60px;
        width: 140px;
        padding: 10px 20px 10px 20px;
        font-family: 'Roboto', sans-serif;
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        text-align:center;
        font-weight: 500;
        color: #000;
        background-color: #fff;
        border: none;
        border-radius: 10px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
        }

        button:hover {
        background-color: #2EE59D;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: #fff;
        transform: translateY(-7px);
        }

    }
}


`

export { Container }
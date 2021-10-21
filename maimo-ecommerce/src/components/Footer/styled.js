import styled from "styled-components";

const Container = styled.div`

position: absolute;
bottom: 0;
width: 100vw;
background-color: #000;
color: #fff;

  nav{
    ul{
        li{
            padding: 0 20px;
            list-style: none;

            a{
                text-decoration: none;
                color: #fff;
            }
        }
    }
}

`

export {Container};
import styled from "styled-components";

const Container = styled.div`

background-color: #EEE;

.logo{width: 20%}

.navContainer{
    max-width: 1200px;
    height:100px;
    color: #1D1D1D;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    nav{
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            li{
                padding: 0 20px;
                list-style: none;
                a{
                    color:#1D1D1D
                }
                a:hover{
                    color: #2EE59D;
                    font-weight: 700;
                }
            }
        }
    }
}


`

export { Container };
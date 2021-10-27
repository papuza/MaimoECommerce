import styled from 'styled-components'

const Container = styled.div`

.hero{
    height: calc(100vh - 100px);
    background: rgb(180,130,213);
    background: linear-gradient(90deg, rgba(180,130,213,1) 0%, rgba(247,104,104,1) 50%, rgba(255,200,122,1) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Raleway', sans-serif;
    .hero-content{
        width: 1200px;
        h1{
            font-size: 55px;
            color: #EEE;
            .text-bold{
                font-weight: bold;
            }
        }
        p{
            font-size: 18px;
            color: #EEE;
        }
        .hero-btn{
            display: inline-block;
            padding: 10px 20px 10px 20px;
            background-color: #EEE;
            border-radius: 5px;
            margin-top: 40px;
            a{
                text-decoration:none;
                color: #f76868;
            }
        }
    }
}

`

export {Container}
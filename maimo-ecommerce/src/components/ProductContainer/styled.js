import styled from "styled-components";

const Container = styled.div`

background: rgb(173,212,240);
background: linear-gradient(90deg, rgba(173,212,240,1) 0%, rgba(173,212,240,1) 50%, rgba(255,255,255,1) 50%);
font-family: 'Raleway', sans-serif;

.product-container{
    display: flex;
    justify-content: space-between;
    align-items: center; 
    max-width: 1200px;
    margin: 0 auto;
    height: calc(100vh - 100px);
    .product-intro{
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        img{
            width: 75%;
        }
        .product-info{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 50px;
            padding-right: 100px;
            width: 100%;
            h1{
                font-size:25px;
                font-weight: bold;
            }
            h3{
                font-size: 12px;
            }
            h2{
                font-size: 18px;
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
            color: #000;
            background-color: #fff;
            border: none;
            border-radius: 45px;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease 0s;
            cursor: pointer;
            outline: none;
            }

            .buy-btn:hover {
            background-color: #2EE59D;
            box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
            color: #fff;
            transform: translateY(-7px);
            }
        }
    }
    .product-description{
        width: 50%;
        padding-left: 100px;
        h2{
            font-weight: bold;
            font-size: 20px;
            margin-bottom: 20px;
        }
        .desc-text{
            margin-bottom: 75px;
        }
        .tec-box{
            width: 50%;
            display: flex;
            justify-content: space-between;
            padding: 20px 20px 20px 0;
        }

        .tec-box-middle{
            border-top: solid 1px black;
            border-bottom: solid 1px black;
        }
    }
}

`

export { Container };
import styled from "styled-components";

const Container = styled.div`
.carrito-container{
    padding: 30px;
    h1{
        font-size: 20px;
    }
    .carrito-productos{
        margin-top: 20px;
        border-bottom: 1px solid black;
        margin-bottom: 20px;
        .carrito-productos-heading{
            border-bottom: 1px solid black;
            tr{
                th{
                    width: 13.3%;
                }
                .carrito-productos-heading-prod{
                    width: 30%;
                }
            }
        }
        .carrito-productos-list{
            .carrito-producto{
                text-align: left;
            }
            td{
                padding: 20px 0;
            }
        }
    }
    h2{
        font-size: 40px;
        margin-bottom: 40px;
    }
}


`

export { Container }
import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import image from "../pulp.jpg";

const Styles = styled.div`

    .jumbo{
        background: url(${image}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height:  300px;
        position: relative;
        z-index: -2;
    }

    .overlay{
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            
            <Container>
                <div className="JumboHeading">Filmfilia</div>
                <div className="JumboSubheading">Por cine es todo</div>
            </Container>
        </Jumbo>
    </Styles>
)

export default Jumbotron;
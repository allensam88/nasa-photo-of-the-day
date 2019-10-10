import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import styled from "styled-components";

const StyledCard = styled.div`
    Card {
        CardBody {
            display: flex;
            background-color: blue;
            CardTitle {
                background-color: blue;
            }
        }
    }
    
`;

const CardCreator = (props) => {
    return (
        <StyledCard>
          <Card>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>DATE: {props.date}</CardSubtitle>
                <CardImg top width="100%" src={props.url} alt='space stars moon planet spacecraft satellite NASA' />
                <CardText>{props.explanation}</CardText>
            </CardBody>
          </Card>
        </StyledCard>
      );
};

export default CardCreator;
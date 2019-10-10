import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Col, Row } from 'reactstrap';

const CardCreator = (props) => {
    return (
        
        // <Row>
            <Col sm="12" md={{ size: 8, offset: 2 }}>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardBody>
                        <CardTitle>{props.title}</CardTitle>
                        <CardSubtitle>DATE: {props.date}</CardSubtitle>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <CardImg top width="100%" src={props.url} alt='space stars moon planet spacecraft satellite NASA' />
                        </Col>
                        <CardText>{props.explanation}</CardText>
                    </CardBody>
                </Card>
            </Col>
        // </Row>
        
      );
};

export default CardCreator;
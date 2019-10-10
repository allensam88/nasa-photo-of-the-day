import React from 'react';
import { Button } from 'reactstrap';
import styled from "styled-components";

const StyledDateButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    Button {
        width: 200px;
    }
`;

const DateButton = (props) => {
    const Randomizer = () => {
        props.setRandomDate(props.randomDay());
    }


    return (
        <StyledDateButton>
            <Button onClick={() => Randomizer()}>Random Date</Button>
        </StyledDateButton>
    );
};

export default DateButton;
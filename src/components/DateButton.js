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
        margin: 5px;
        border: 1px solid black;
        background-color: red;
    }
`;

const DateButton = (props) => {
    const Randomizer = () => {
        props.setRandomDate(props.randomDay());
    }


    return (
        <StyledDateButton>
            <Button onClick={() => Randomizer()}>Date Randomizer</Button>
        </StyledDateButton>
    );
};

export default DateButton;
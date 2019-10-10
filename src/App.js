import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CardCreator from './components/Card';
import DateButton from './components/DateButton';
import styled from "styled-components";

const StyledApp = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: blue;
`;

function App() {
  const [content, setContent] = useState(null);
  let initialDate = '2019-07-05';
  const [randomDate, setRandomDate] = useState(initialDate);
  
  function randomDay () {
    let newDay = Math.ceil(Math.random() * 9);
    let newMonth = Math.ceil(Math.random() * 9);
    let newYear = Math.ceil(Math.random() * 9)
    return `200${newYear}-0${newMonth}-0${newDay}`
  }

  console.log(randomDay());

  useEffect(() => {
      axios
          .get(`https://api.nasa.gov/planetary/apod?api_key=albB1lx64EPE3qhswsmqlLEVNlj3Qigu6lXcxhEe&date=${randomDate}`)
          .then(response => {
              console.log(response);
              setContent(response.data)
          })
          .catch(error => console.log(`There is an error: ${error}`));
  }, [randomDate]);

  if(!content){
    return <h3>Loading...</h3>;
  }

  return (
    <StyledApp className="App">
      <DateButton setRandomDate={setRandomDate} randomDay={randomDay}/>
      {/* {content.map((item, index) => ( <CardCreator key={index} title={content.title} date={content.date} url={content.url} explanation={content.explanation} /> ))} */}
      <CardCreator title={content.title} date={content.date} url={content.url} explanation={content.explanation} />
    </StyledApp>
  );
};

export default App;
import React from 'react';
import Card from "./Card.js"

const CardsContainer = (props) => {
  const trivias = props.trivias.map((trivia, index) => {
    return <Card question={trivia.question} index={index} answer={trivia.answer} />
  })
  return (
        [trivias]
  );
}
  
  export default CardsContainer;
  
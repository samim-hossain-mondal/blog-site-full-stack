/* eslint-disable no-undef */
import React from 'react';
import Clap from '../clap/Clap.js';
import Like from '../like/Like.js';
import cardData from '../../assets/mockData/index.js';
import './Card.css';

export default function Card() {
  const card = cardData.map((card, index) => {
    return (<div key={index} className='card-blog'>
      <img src={require(`../../assets/images/${card.image}`)} />
      <div className='container'>
        <div className='date-time'>
          <h> {card.date} </h>
          <h> {card.readingTime} </h>
        </div>
        <div className='content-head'>
          <h> {card.title} </h>
        </div>
        <div className='content-body'>
          <h> {card.description} </h>
        </div>
        <div>
          <hr />
          <div className='card-foot'>
            <Clap claps={card.claps} />
            <Like />
          </div>
        </div>
      </div>
    </div>);
  });
  return (
    <div className='card'>
      {card}
    </div>
  );
}
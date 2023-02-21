/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Clap from '../clap/Clap.js';
import Like from '../like/Like.js';
import './Card.css';

export default function Card() {

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios('http://localhost:8080/blog-posts')
      .then((res) => {
        setCardData(res.data);
      })
      .catch((err) => {
        setCardData(err);
      });
  }, []);

  const card = cardData.map((card, index) => {
    return (<div key={index} className='card-blog'>
      <img src={card.image} alt="img" />
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
            <Clap id={card.id} claps={card.claps} />
            <Like id={card.id} liked={card.liked} />
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
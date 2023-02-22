/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Clap from '../clap/Clap.js';
import Like from '../like/Like.js';
import { BASE_URL, ROUTE_URL } from '../../constants/url.js';
import './Card.css';

export default function Card() {

  const [cardData, setCardData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    axios(`${BASE_URL}/${ROUTE_URL}`)
      .then((res) => {
        setCardData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (error) {
    return (
      <div className='error'>
        <h4> <em>Failed to fetch data...</em></h4>
      </div>
    );
  }

  function truncate(str) {
    return str.split(" ").splice(0, 16).join(" ");
  }

  const card = cardData.map((card, index) => {
    return (
      <div key={index} className='card-blog'>
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
            <h> {truncate(card.description)} ... </h>
          </div>
        </div>
        <div>
          <hr />
          <div className='card-foot'>
            <Clap id={card.id} claps={card.claps} />
            <Like id={card.id} liked={card.liked} />
          </div>
        </div>
      </div>);
  });

  return cardData.length !== 0 ? (
    <div className='card'>
      {card}
    </div>
  ) : (
    <div className='error'>
      <h5> Loading... </h5>
    </div>
  );
}
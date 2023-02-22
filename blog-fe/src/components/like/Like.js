import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL, ROUTE_URL } from '../../constants/url';
import heartBlack from '../../assets/icons/heart-black.svg';
import heartRed from '../../assets/icons/heart-red.svg';

export default function Like(props) {
  const [like, setLike] = useState(props.liked);
  const likeHandler = () => {
    axios.put(`${BASE_URL}/${ROUTE_URL}/${props.id}`, {
      liked: !like,
    });
    setLike(!like);
  };

  return (
    <div className='like'>
      <img className='icons' data-testid="like-btn" alt='img'
        onClick={likeHandler}
        src={like ? heartRed : heartBlack}
      />
    </div>
  );
}
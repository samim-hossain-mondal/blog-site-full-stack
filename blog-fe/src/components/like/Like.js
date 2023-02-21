import React, { useState } from 'react';
import axios from 'axios';
import heartBlack from '../../assets/icons/heart-black.svg';
import heartRed from '../../assets/icons/heart-red.svg';

export default function Like(props) {
  const [like, setLike] = useState(props.liked);
  const likeHandler = () => {
    axios.put(`http://localhost:8080/blog-posts/${props.id}`, {
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
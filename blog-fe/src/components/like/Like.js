import React, { useState } from 'react';
import heartBlack from '../../assets/icons/heart-black.svg';
import heartRed from '../../assets/icons/heart-red.svg';

export default function Like() {
  const [like, setLike] = useState(0);
  const likeHandler = () => {
    if (like === 0) {
      setLike(like + 1);
    } else {
      setLike(like - 1);
    }
  };
  return (
    <div className='like'>
      <img className='icons' data-testid="like-btn" onClick={likeHandler} src={like ? heartRed : heartBlack} />
    </div>
  );
}
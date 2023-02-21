import React, { useState } from 'react';
import axios from 'axios';
import clapping from '../../assets/icons/clapping.svg';
import './Clap.css';

export default function Clap(props) {
  const [clap, setClap] = useState(props.claps);
  const clapHandler = () => {
    if (clap === props.claps) {
      axios.put(`http://localhost:8080/blog-posts/${props.id}`, {
        claps: props.claps + 1,
      });
      setClap(clap + 1);
    } else {
      axios.put(`http://localhost:8080/blog-posts/${props.id}`, {
        claps: props.claps - 1,
      });
      setClap(clap - 1);
    }
  };
  return (
    <div className='clap'>
      <img className="icons" data-testid="clap-btn" alt="img" onClick={clapHandler} src={clapping} />
      <h> {clap} </h>
    </div>
  );
}
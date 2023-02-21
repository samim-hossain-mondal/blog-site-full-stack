import React, { useState } from 'react';
import clapping from '../../assets/icons/clapping.svg';
import './Clap.css';

export default function Clap(props) {
  const [clap, setClap] = useState(0);
  const clapHandler = () => {
    if (clap === 0) {
      setClap(clap + 1);
    } else {
      setClap(clap - 1);
    }
  };
  return (
    <div className='clap'>
      <img className="icons" data-testid="clap-btn" onClick={clapHandler}
        style={{ ...(clap === 0 && { opacity: 0.35 }) }} src={clapping} />
      <h> {props.claps + clap} </h>
    </div>
  );
}
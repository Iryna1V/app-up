import React from 'react';
import './Phonetic.css';
import listen from './listen.png';

export default function Phonetic(props) {
  return (
    <div className='Phonetic'>
      <a href={props.phonetic.audio} target='_blank' rel='noreferrer'>
        <img src={listen} className='Phonetic-listen' img-fluid alt='listen' />
      </a>      
      <span className='text'>{props.phonetic.text}</span>
    </div>
  );
}
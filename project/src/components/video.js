import React from 'react';
import '../App.css';
import { Button } from '@mui/material';
import './video.css';
import Id from './id';

function Video() {
  return (
    <div>
    <div className='hero-container'>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

    <h1>Auto Mobile Management System</h1>
    

      <video src='/video4k.mp4' autoPlay loop muted />
      <Id/>
      <div className='hero-btns'>
        
       
      </div>
  
    </div>
    
    </div>
  );
}

export default Video;
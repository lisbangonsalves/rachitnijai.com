import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className="videosofyoutube">
      <div className="videoofyoutubecontainer">
        <div className="row row-cols-1 row-cols-md-2 g-4">

            
            <CardItem path="https://www.youtube.com/embed/mSWZyPf522I?vq=hd1080&autoplay=1"></CardItem>
            <CardItem path="https://www.youtube.com/embed/mSWZyPf522I?vq=hd1080&autoplay=1"></CardItem>
            <CardItem path="https://www.youtube.com/embed/mSWZyPf522I?vq=hd1080&autoplay=1"></CardItem>
            <CardItem path="https://www.youtube.com/embed/mSWZyPf522I?vq=hd1080&autoplay=1"></CardItem>
            <CardItem path="https://www.youtube.com/embed/mSWZyPf522I?vq=hd1080&autoplay=1"></CardItem>
            <CardItem path="https://www.youtube.com/embed/mSWZyPf522I?vq=hd1080&autoplay=1"></CardItem>
            
            
          </div>
      </div>
    </div>
  );
}

export default Cards;

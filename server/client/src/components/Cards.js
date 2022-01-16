import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from 'axios';
function Cards() {

  const [articles, setArticles] = useState([])



  useEffect(() => {
    const url = "https://ronnin.herokuapp.com/api/notes/fetchallnotes";
    axios.get(url).then(response => {

      setArticles(response.data.reverse())

      // console.log(response)
    })

  }, [])
  // console.log(articles)
  return (
    <div className="videosofyoutube">
      <div className="videoofyoutubecontainer">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {articles.map((element) => {
            return <div  key={element._id}>
            <CardItem path={element.link} key={element._id}></CardItem>
            </div>
          })}
{/* 
          
          <CardItem path="https://www.youtube.com/embed/mSWZyPf522I?vq=hd1080&autoplay=1"></CardItem>
          <CardItem path="https://www.youtube.com/embed/mSWZyPf522I?vq=hd1080&autoplay=1"></CardItem>
          <CardItem path="https://www.youtube.com/embed/mSWZyPf522I?vq=hd1080&autoplay=1"></CardItem>
          <CardItem path="https://www.youtube.com/embed/mSWZyPf522I?vq=hd1080&autoplay=1"></CardItem>
          <CardItem path="https://www.youtube.com/embed/mSWZyPf522I?vq=hd1080&autoplay=1"></CardItem> */}


        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <div className="col">
              <div className="card">
                <iframe className="card-img-top" src={props.path} width="640" height="360" frameborder="0"></iframe>
              </div>
            </div>
    </>
  );
}

export default CardItem;

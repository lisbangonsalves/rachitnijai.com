import React from 'react';
function CardItem(props) {
  return (
    <>
      <div className="col">
              <div className="card">
              <iframe width="640" height="360" title={props.key} src={props.path} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
    </>
  );
}

export default CardItem;

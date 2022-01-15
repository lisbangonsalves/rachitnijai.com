import React from 'react';
function CardItem(props) {
  return (
    <>
      <div className="col">
              <div className="card">
                <iframe className="card-img-top" title={props.key} src={props.path} width="640" height="360" frameborder="0"></iframe>
              </div>
            </div>
    </>
  );
}

export default CardItem;

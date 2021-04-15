import React from 'react';

function DisplayVillain({ villain }) {
  return (
    villain && (
      <div className="DisplayVillain">
        <p>{villain.name}</p>
        <img src={villain.image.url} alt="" />
      </div>
    )
  );
}

export default DisplayVillain;

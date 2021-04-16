import React from 'react';

function DisplayHeros({ hero }) {
  return (
    hero && (
      <div className="DisplayHero">
        <p>{hero.name}</p>
        <img src={hero.image.url} alt="" />
        <p>Le hero est un {hero.appearance.race}</p>
        <p>Son vrai nom est {hero.biography['full-name']}</p>
        <p>Notre hero est né à {hero.biography['place-of-birth']}</p>
      </div>
    )
  );
}

export default DisplayHeros;

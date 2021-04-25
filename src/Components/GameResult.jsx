import React from 'react';
import PropTypes from 'prop-types';
import wonderwoman from '../img/avatarwonderwoman.png';
import bulleBravo from '../img/bulleBravo.png';
import bulleDommage from '../img/bulleDommage.png';

const GameResult = ({ victory }) => (
  <>
    <img
      className="bulle"
      src={victory ? bulleBravo : bulleDommage}
      alt="bulle"
    />
    <img className="img-wonder" src={wonderwoman} alt="wonderwoman" />
  </>
);

GameResult.propTypes = {
  victory: PropTypes.bool.isRequired,
};

export default GameResult;

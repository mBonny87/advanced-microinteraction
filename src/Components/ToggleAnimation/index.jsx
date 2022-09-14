/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import lottie from 'lottie-web/build/player/lottie_light';
import animationData from './likeButton.json';
import './style.css';

export const ToggleAnimation = ({ segments, isReversed, setReversed }) => {
  const container = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    if (container.current) {
      animation.current = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData,
      });
    }
  }, []);

  return (
    <button
      onClick={() =>{
        animation.current?.setSpeed(3);
        animation.current?.playSegments(isReversed ? segments.end : segments.start, true);
        setReversed(!isReversed);
      }}
      ref={container}
    ></button>
  );
};

ToggleAnimation.propTypes = {
  segments: PropTypes.shape({
    start:PropTypes.arrayOf(PropTypes.number), 
    end:PropTypes.arrayOf(PropTypes.number)
  }).isRequired,
  isReversed: PropTypes.bool,
  setReversed: PropTypes.func.isRequired,
};


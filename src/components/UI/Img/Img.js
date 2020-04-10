import React from 'react';

export const Img = ({classes, src, alt}) => {
  return (
    <img className={classes || ''} src={src} alt={alt}/>
  );
};


import React from 'react';

import './Container.css';

const Container = (props) => {
  return <div className={`layout ${props.side}`}>{props.children}</div>;
};

export default Container;

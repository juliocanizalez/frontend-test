import React, { useState, useEffect } from 'react';
import { Avatar } from '@nextui-org/react';

const Timer = ({ secs, handleProduct }) => {
  const [time, setTime] = useState(secs);

  const tick = () => {
    time === 0 ? handleProduct() : setTime((current) => current - 1);
  };

  useEffect(() => {
    const timerId = setInterval(() => tick(), 1000);
    return () => clearInterval(timerId);
  });

  return <Avatar squared text={time} />;
};

export default Timer;

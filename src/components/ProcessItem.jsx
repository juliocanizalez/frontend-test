import React from 'react';
import { Avatar, Grid, Text } from '@nextui-org/react';
import { useTimer } from 'reactjs-countdown-hook';

const ProcessItem = ({ id, name, image, secs, handleProduct }) => {
  const food = { id, name, image };
  const secsInt = parseInt(secs, 10);

  const { seconds, minutes } = useTimer(secsInt, () => handleProduct(food));

  return (
    <Grid.Container justify='center' gap={1} alignItems='center'>
      <Grid xs={2}>
        <Avatar size='large' color='secondary' src={image} zoomed />
      </Grid>
      <Grid xs={4}>
        <Text h5>{name}</Text>
      </Grid>
      <Grid xs={2}>
        <Text p color='primary'>
          {minutes && seconds ? `${minutes}:${seconds}s` : `00:00s`}
        </Text>
      </Grid>
    </Grid.Container>
  );
};

export default ProcessItem;

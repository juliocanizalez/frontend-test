import React from 'react';
import { Text, Grid, Avatar } from '@nextui-org/react';
import { TickSquare } from 'react-iconly';

const DoneItem = ({ name, image }) => {
  return (
    <Grid.Container justify='center' gap={1} alignItems='center'>
      <Grid xs={2}>
        <Avatar size='large' src={image} zoomed />
      </Grid>
      <Grid xs={4}>
        <Text h5>{name}</Text>
      </Grid>
      <Grid xs={2}>
        <Text color='success'>
          <TickSquare />
        </Text>
      </Grid>
    </Grid.Container>
  );
};

export default DoneItem;

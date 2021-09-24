import React from 'react';
import { Text, Grid, Avatar, Button } from '@nextui-org/react';
import { Send } from 'react-iconly';

const MachineItem = ({ id, name, time, image }) => {
  return (
    <Grid.Container justify='center' gap={1} alignItems='center'>
      <Grid xs={2}>
        <Avatar size='large' color='secondary' src={image} zoomed />
      </Grid>
      <Grid xs={4}>
        <Text h5>{name}</Text>
      </Grid>
      <Grid xs={2} justify='center'>
        <Text p color='error'>
          {time}
        </Text>
      </Grid>
      <Grid xs={2}>
        <Button color='gradient' iconRight={<Send primaryColor='white' />} auto>
          Prepare
        </Button>
      </Grid>
    </Grid.Container>
  );
};

export default MachineItem;

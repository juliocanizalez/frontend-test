import React from 'react';
import { Grid, Text, Spacer, Avatar } from '@nextui-org/react';

import { machineImage } from '../utils/utils';
import FoodAvailable from '../components/FoodAvailable';
import FoodInProcess from '../components/FoodInProcess';
import FoodDone from '../components/FoodDone';
import Container from '../components/Container/Container';

const App = () => {
  return (
    <>
      <Spacer y={3} />
      <Grid.Container gap={2} justify='center'>
        <Grid xs={12} justify='center' alignItems='center'>
          <Avatar squared src={machineImage} />
          <Spacer x={1} />
          <Text h1>Vending Machine</Text>
        </Grid>

        <Grid xs={12} md={6} justify='center'>
          <Grid.Container gap={1} justify='center'>
            <Grid xs={12} justify='center'>
              <Text h3>List of products</Text>
            </Grid>
            <Container side='left'>
              <FoodAvailable />
            </Container>
          </Grid.Container>
        </Grid>
        <Grid xs={12} md={6}>
          <Grid.Container gap={1}>
            <Grid xs={12} justify='center'>
              <Text h3>In Process</Text>
            </Grid>
            <Grid xs={12} justify='center'>
              <Container side='right'>
                <FoodInProcess />
              </Container>
            </Grid>
            <Grid xs={12} justify='center'>
              <Text h3>Done</Text>
            </Grid>
            <Grid xs={12} justify='center'>
              <FoodDone />
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default App;

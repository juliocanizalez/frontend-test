import React from 'react';
import { Grid, Text, Spacer, Avatar, Loading } from '@nextui-org/react';
import { connect } from 'react-redux';

import { machineImage } from '../utils/utils';
import MachineItem from '../components/MachineItem';

const App = ({ data }) => {
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
          <Grid.Container gap={1}>
            <Grid xs={12} justify='center'>
              <Text h3>List of products</Text>
            </Grid>
            {!data && (
              <Grid xs={12} justify='center' alignItems='center'>
                <Loading color='secondary'>Loading data...</Loading>
              </Grid>
            )}
            {data &&
              data.map((item, index) => (
                <Grid xs={12} justify='center'>
                  <MachineItem
                    key={index}
                    name={item.name}
                    time={`${item.preparation_time}s`}
                    image={item.thumbnail}
                  />
                </Grid>
              ))}
          </Grid.Container>
        </Grid>
        <Grid xs={12} md={6}>
          <Grid.Container gap={1}>
            <Grid xs={12} justify='center'>
              <Text h3>In Process</Text>
            </Grid>
            <Grid xs={12} justify='center'>
              <Text h3>Done</Text>
            </Grid>
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

export default connect(mapStateToProps, null)(App);

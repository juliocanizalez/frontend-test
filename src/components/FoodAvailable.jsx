import React from 'react';
import { Grid, Loading } from '@nextui-org/react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import MachineItem from './MachineItem';

const FoodAvailable = ({ data }) => (
  <>
    {data.loading ? (
      <Grid xs={12} justify='center' alignItems='center'>
        <Loading color='secondary'>Loading data...</Loading>
      </Grid>
    ) : (
      map(data, (food) => (
        <Grid key={food.id} xs={12} justify='center'>
          <MachineItem name={food.name} time={`${food.preparation_time}s`} image={food.thumbnail} />
        </Grid>
      ))
    )}
  </>
);

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, null)(FoodAvailable);

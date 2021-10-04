import React, { memo } from 'react';
import { Grid, Loading } from '@nextui-org/react';
import { connect } from 'react-redux';
import { map } from 'lodash';

import MachineItem from './MachineItem';
import { setPrepare } from '../utils/actions';

const FoodAvailable = ({ data, loading, onProductClick }) => (
  <>
    {loading ? (
      <Grid xs={12} justify='center' alignItems='center'>
        <Loading color='secondary'>Loading data...</Loading>
      </Grid>
    ) : (
      map(data, (food) => (
        <Grid key={food.id} xs={12} justify='center'>
          <MachineItem
            id={food.id}
            name={food.name}
            time={`${food.preparation_time}s`}
            image={food.thumbnail}
            handleSetPrepare={onProductClick}
          />
        </Grid>
      ))
    )}
  </>
);

const mapStateToProps = (state) => ({
  data: state.data,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onProductClick: (food) => dispatch(setPrepare(food)),
});

export default memo(connect(mapStateToProps, mapDispatchToProps)(FoodAvailable));

import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@nextui-org/react';
import { map } from 'lodash';

import { setDone } from '../utils/actions';
import ProcessItem from '../components/ProcessItem';

const FoodInProcess = ({ prepare, onProductDone }) => {
  return (
    <Grid.Container justify='center' gap={1} alignItems='center'>
      {map(prepare, (foodInProcess, index) => (
        <Grid key={index} xs={12} justify='center' alignItems='center'>
          <ProcessItem
            id={foodInProcess.id}
            name={foodInProcess.name}
            image={foodInProcess.image}
            secs={foodInProcess.time}
            handleProduct={onProductDone}
          />
        </Grid>
      ))}
    </Grid.Container>
  );
};

const mapStateToProps = (state) => ({
  prepare: state.prepare,
});

const mapDispatchToProps = (dispatch) => ({
  onProductDone: (food) => dispatch(setDone(food)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodInProcess);

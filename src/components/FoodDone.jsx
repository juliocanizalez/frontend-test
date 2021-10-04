import React from 'react';
import { connect } from 'react-redux';
import { Button, Grid } from '@nextui-org/react';
import { map } from 'lodash';

import { setClear } from '../utils/actions';
import DoneItem from './DoneItem';

const FoodDone = ({ done, clearList }) => {
  return (
    <Grid.Container justify='center' gap={1} alignItems='center'>
      {map(done, (food, index) => (
        <Grid key={index} xs={12} justify='center' alignItems='center'>
          <DoneItem name={food.name} image={food.image} />
        </Grid>
      ))}
      <Button onClick={clearList} color='gradient' auto>
        Clear List
      </Button>
    </Grid.Container>
  );
};

const mapStateToProps = (state) => ({
  done: state.done,
});

const mapDispatchToProps = (dispatch) => ({
  clearList: () => dispatch(setClear()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodDone);

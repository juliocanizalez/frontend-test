import React from 'react';
import { Grid, Loading } from '@nextui-org/react';
import { connect } from 'react-redux';

import MachineItem from './MachineItem';

const FoodAvailable = ({ data }) => {
  return (
    <>
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
    </>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps, null)(FoodAvailable);

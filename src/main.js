import React, {useEffect, useState} from 'react';
import {View, Button} from 'react-native';
import {connect} from 'react-redux';
import Counter from './components/Counter';
import * as actions from './actions';

const Main = (props) => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Counter value={props.counter} />
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <Button
          title="Increase"
          onPress={() => {
            props.counterIncrease();
          }}
        />
        <Button
          title="Decrease"
          onPress={() => {
            props.counterDecrease();
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  counter: state.counter,
});

const mapDispatchToProps = actions;

export default connect(mapStateToProps, mapDispatchToProps)(Main);

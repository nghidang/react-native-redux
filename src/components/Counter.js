import React from 'react';
import {Text} from 'react-native';

const Counter = (props) => {
  return (
    <Text
      style={{
        fontSize: 50,
      }}>
      {props.value}
    </Text>
  );
};

export default Counter;

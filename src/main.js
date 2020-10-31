import React, {useEffect, useState} from 'react';
import {View, Button} from 'react-native';
import Counter from './components/Counter';
import store from './store';
import * as actions from './actions';

const Main = () => {
  const [counter, setCounter] = useState(store.getState().counter);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setCounter(store.getState().counter);
    });

    return unsubscribe;
  });

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
        <Counter value={counter} />
      </View>

      <View
        style={{
          flex: 1,
        }}>
        <Button
          title="Increase"
          onPress={() => {
            store.dispatch(actions.counterIncrease());
          }}
        />
        <Button
          title="Decrease"
          onPress={() => {
            store.dispatch(actions.counterDecrease());
          }}
        />
      </View>
    </View>
  );
};

export default Main;

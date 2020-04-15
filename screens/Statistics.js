  
import React from 'react';
import { Block, Text } from 'expo-ui-kit';

export default ({ style }) => {
  return (
    <Block
      color="#41D5FB"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <Text h3 center>
        Statistics
      </Text>
      <Text bold>Grafai</Text>
    </Block>
  );
};
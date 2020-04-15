import React from 'react';
import { Block, Text } from 'expo-ui-kit';

export default ({ style }) => {
  return (
    <Block
      color="#FFC46B"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
      <Text bold h2 center>
        Schedule
      </Text>

      <Text bold h2 center>
        Schedule
      </Text>
    </Block>
  );
};
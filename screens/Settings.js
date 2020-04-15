  
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
        Settings
      </Text>
      <Text bold>Settings</Text>
    </Block>
  );
};
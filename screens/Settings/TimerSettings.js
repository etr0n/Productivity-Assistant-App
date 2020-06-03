  
import React from 'react';
import { Block, Text } from 'expo-ui-kit';
import { Button } from 'expo-ui-kit/src';
import {StyleSheet, View, TextInput, Slider} from 'react-native';

const styles = StyleSheet.create({
  row: { 
      flexDirection: 'row',
      padding: 10,
      width: 400,
      backgroundColor: '#2f384b',
      paddingLeft: 30
  },
  column: {
      flexDirection: 'column'
  },
  slider: {
      flex: 1,
      
  },
  title: {
      marginTop: 60,
      padding: 10,
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center'
  }
})



export default class TimerSettings extends React.Component {
 
    state = {
      minutes: this.props.minutes
  }

  handleTimeSettingChange = minutes => {
      this.setState({ minutes });
     this.props.onSettingsChange(minutes) 
  }
  
  render() {
      return (
          <View >
              <Text center style={styles.title}>{this.props.text}</Text>
              
              <View style={styles.row}>
                  <Slider 
                      style={styles.slider} 
                      minimumValue={5} 
                      maximumValue={30} 
                      step={1} 
                      value={this.state.minutes} 
                      onValueChange={this.handleTimeSettingChange}
                      disabled={this.props.restrictControlInteraction}
                      />
                  <Text>{this.state.minutes} minutes</Text>
              </View>
          </View>
      )
  }
}

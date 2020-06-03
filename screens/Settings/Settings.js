  
import React from 'react';
import { Block, Text } from 'expo-ui-kit';
import TimeSettingComponent from '../../screens/Settings/TimerSettings'
import { View, StyleSheet } from 'react-native';
import Statistics from '../About'


 class Settings extends React.Component{
  
 
  /* constructor(props) {
    //constructor to set default state
    super(props);
    this.state = {
      atsiputimas: 9
    };
    
    
  } */
  handleBreakTimeChange = (minutes) => {
    this.setState({ minutes: minutes })
  } 
  state = {
    minutes: this.props.minutes
  }


  render(){
 
  return (
    
    <Block color="#2f384b">
      
      <View>
      <TimeSettingComponent 
          text='Short break duration' 
          minutes={5} 
          onSettingsChange={this.handleBreakTimeChange} 
          restrictControlInteraction={this.pomodoroActive}  />
      </View>
      <TimeSettingComponent
      text='Work session duration' 
      minutes={5} 
      onSettingsChange={this.handleBreakTimeChange} 
      restrictControlInteraction={this.pomodoroActive} />
    </Block>
  );
  }
}

export default Settings;

const styles = StyleSheet.create({
    row: { 
        backgroundColor: 'red',
        flexDirection: 'row',
        padding: 10,
        width: 250
    },
    column: {
        backgroundColor: 'red',
        padding: 50,
        flexDirection: 'column'
    },
    slider: {
        flex: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
})

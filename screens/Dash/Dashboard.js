/* import React, {useState, useEffect} from 'react';
import { StyleSheet, View, StatusBar,TouchableOpacity, Dimensions } from 'react-native';
import { Block, Text } from 'expo-ui-kit';
import { getPaddings, spacing, theme } from 'expo-ui-kit/src/utils';
import WorkInProgress from './WorkInProgress';
import { createStackNavigator, withNavigation } from '@react-navigation/stack';
import Drawer from '../../navigation/Drawer'
import { useNavigation } from '@react-navigation/native';
import { CircularProgress } from 'react-native-circular-progress';
import { Card } from 'expo-ui-kit/src';
import TimeSettingComponent from '../../screens/Settings/TimerSettings'

const screen = Dimensions.get('window');
const formatNumber = number => `0${number}`.slice(-2);
const getRemaining = (time) => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return { mins: formatNumber(mins), secs: formatNumber(secs) };
}
export default () => {
  
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);

  toggle = () => {
    setIsActive(!isActive);
  }
  
 const navigation = useNavigation();
 useEffect(() => {
  let interval = null;
  if (isActive) {
    interval = setInterval(() => {
      setRemainingSecs(remainingSecs => remainingSecs + 1);
    }, 1000);
  } else if (!isActive && remainingSecs !== 0) {
    clearInterval(interval);
  }
  return () => clearInterval(interval);
}, [isActive, remainingSecs]);

  return (
    <Block color="#2f384b">
      <Block style={[styles.container]}>
      <Text bold h2 style={[styles.title]} >PROCASTINATE LATER!</Text>
      <Text style={styles.timerText}>{ isActive ? `${mins}:${secs}`: ''}</Text>
      <TouchableOpacity onPress={this.toggle} style={styles.buttonStartWork}>   
          <Text style={styles.buttonText}>{isActive ? 'PAUSE' : 'START WORK SESSION'}</Text> 
      </TouchableOpacity>
      <Text style={[styles.buttonText2]}>CHOOSE A PROJECT</Text>
    </Block>
    </Block>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#2f384b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondContainer:{
    flex: 1.4,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonChooseProject:{
   
    borderWidth: 1,
    borderColor: '#0A1824',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A30000',
  },
  buttonStartWork: {
      marginBottom: 100,
      borderWidth: 2,
      borderColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      
  },
  buttonText: {
      padding: 10,
      fontFamily: 'sans-serif-condensed',
      fontSize: 20,
      color: '#0A1824',
      alignItems: 'center',
      justifyContent: 'center', 
  },
  title:{
      marginBottom: 9,
      alignItems: 'center',
      justifyContent: 'center',
  },
  buttonText2: {
    fontFamily: 'sans-serif-condensed',
     marginBottom: 150,
      fontSize: 20,
      color: '#0A1824'
  },
  timerText: {
     fontFamily: 'sans-serif-light',
      color: '#fff',
      fontSize: 90,
      marginBottom: 20
  }
}); */
import React from 'react';
import { StyleSheet,  View, Button,TouchableOpacity, } from 'react-native';
import { Block , Text} from 'expo-ui-kit';
import TimeSettingComponent from '../../screens/Settings/TimerSettings'
import Settings from '../../screens/Settings/Settings'



export default class Dashboard extends React.Component {

  constructor() {
    
    super()
    this.state = {
      activeTimerType: null,
      runtime: 0,
      busyTime: 28,
      breakTime: 9,
      message: ''
    }
    
    this.buttonText = 'start'
    this.pomodoroActive = false
    this.buttonStyle = '#2f384b' 
    this.buttonBorderColor ='black'
    this.prevTimerType = null
    this.buttonFont= 'sans-serif-condensed'
    
  }

  // make changes to UI and start the timer
  startPomodoro() {
    this.setState({
      runtime: this.state.busyTime * 60,
      activeTimerType: timerType.busyTimer
     /*  message: 'Great work, keep on going!' */
    })
    // set update to 1s interval
    this.interval = setInterval(this.incrementTimer, 1000)
    this.pomodoroActive = true
  }

  // terminate the timer and change the UI
  stopPomodoro() {
    clearInterval(this.interval)
    this.buttonText = 'start'
    this.buttonStyle = '#2f384b'
    this.pomodoroActive = false
    this.buttonFont= 'sans-serif-condensed'
    this.buttonBorder ='black'
    this.setState({ 
      runtime: 0,
      message: ''
    })
  }

  // pomodoro on a break
  setPomodoroBreakState() {
    this.buttonText = 'CANCEL BREAKTIME'
    this.buttonStyle = 'red'
    this.setState({
      runtime: this.state.breakTime * 60,
      activeTimerType: timerType.breakTimer,
      message: 'Taking a break, are we??'
    })
  }

  // pomodoro as busy
  setPomodoroBusyState() {
    this.buttonText = 'TAKE A BREAK'
    this.buttonStyle = 'green'
    this.setState({
      runtime: this.state.busyTime * 60,
      activeTimerType: timerType.busyTimer,
      /* message: 'keep on going!' */
    })
  }

   togglePomodoroPause() {
    // resume timer, if pomodoro was paused
    if (this.state.activeTimerType === timerType.paused) {
      this.interval = setInterval(this.incrementTimer, 1000)

      this.setState({
        activeTimerType: this.prevTimerType,
      }, function() {
        if (this.state.activeTimerType === timerType.busyTimer) {
          this.setState({message: 'Keep on going!!!!'})
        } else if (this.state.activeTimerType === timerType.breakTimer) {
          this.setState({message: 'A break after a break? Much smart, wow!'})
        }
      })

    // set pomodoro pause if the timer is active
    } else {
      clearInterval(this.interval)
      this.prevTimerType = this.state.activeTimerType
      this.setState({
        activeTimerType: timerType.paused,
        message: 'Freeze!'
      })
    }
  } 

  // switches between break, active, and vice-versa
  switchPomodoroState() {
    if (this.pomodoroActive) {
      if (this.state.activeTimerType == timerType.busyTimer) {
        this.setPomodoroBreakState()
      } else {
        this.setPomodoroBusyState()
      }
      // let the user know that the timer has ran out
      //vibrate()
    } else {
      this.startPomodoro()
      this.setPomodoroBusyState()
    }
  }

  // handle timer incrementing within the app state
  incrementTimer = () => {
    // check if the time ran out, and switch pomodoro state    
    if (this.state.runtime == 0) {
      this.switchPomodoroState()
    }
    
    this.setState(prevState => ({
      runtime: prevState.runtime - 1
    }))
  }

   // will be passed to TimeSettingComponenet in order to lift the state up
  handleBusyTimeChange = (minutes) => {
    this.setState({ busyTime: minutes })
  }
  
  // will be passed to TimeSettingComponenet in order to lift the state up
  handleBreakTimeChange = (minutes) => {
    this.setState({ breakTime: minutes })
  } 

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }
  render() {
    const { navigation } = this.props;
    
    // elapsed minutes
    let m = (this.pomodoroActive) ? Math.floor(this.state.runtime / 60) : this.state.busyTime
    // elapsed seconds
    let s = (this.state.runtime % 60)

    return (
      <View style={styles.container}>
          <Text bold h2 style={[styles.title]} >PROCRASTINATE LATER!</Text>
        <Text style={{margin: 20}}>
          {this.state.message}
        </Text>
        <Text style={styles.timer}>
          {('00' + m).slice(-2) + ':' + ('00' + s).slice(-2)}
        </Text>
        { 
          this.state.activeTimerType != timerType.paused && 
          <Button color={this.buttonStyle} title={this.buttonText}  onPress={() => this.switchPomodoroState()} />
          
        }

        
        
        {
          this.pomodoroActive && this.state.activeTimerType != timerType.paused &&
          <View style={{flexDirection: 'row'}}>
            <View style={{marginHorizontal: 5}}>
              <Button title='pause' onPress={() => this.togglePomodoroPause()} />
            </View>
            <View style={{marginHorizontal: 5}}>
              <Button color='grey' title='cancel session' onPress={() => this.stopPomodoro()} />
            </View>
          </View>

        }
        {
          this.pomodoroActive && this.state.activeTimerType == timerType.paused &&
          <Button title='resume pomodoro' onPress={() => this.togglePomodoroPause()} />
        }
      {/*    <TimeSettingComponent 
          text='Work session duration' 
          minutes={this.state.busyTime} 
          onSettingsChange={this.handleBusyTimeChange} 
          restrictControlInteraction={this.pomodoroActive} />

        <TimeSettingComponent 
          text='Short break duration' 
          minutes={this.state.breakTime} 
          onSettingsChange={this.handleBreakTimeChange} 
          restrictControlInteraction={this.pomodoroActive} />
  
      
        { <TimerComponent seconds={this.state.runtime} /> } */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f384b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer: {
    fontFamily: 'sans-serif-light',
    color: '#fff',
    fontSize: 90,
    marginBottom: 20
  },
  title:{
    marginTop: 35,
    alignItems: 'center',
    justifyContent: 'center',
},
});

var timerType = {
  busyTimer: 1,
  breakTimer: 2,
  paused: 3
}
/* import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TimeSettingComponent from '../screens/Settings/TimerSettings'
import Settings from '../screens/Settings/Settings'


export default class Statistics extends React.Component {

  constructor() {
    
    super()
    this.state = {
      activeTimerType: null,
      runtime: 0,
      busyTime: 25,
      breakTime: 5,
      message: ''
    }
    
    this.buttonText = 'start'
    this.pomodoroActive = false
    this.buttonStyle = 'blue' 
    this.prevTimerType = null
    
  }

  // make changes to UI and start the timer
  startPomodoro() {
    this.setState({
      runtime: this.state.busyTime * 60,
      activeTimerType: timerType.busyTimer,
      message: 'Great work, keep on going!'
    })
    // set update to 1s interval
    this.interval = setInterval(this.incrementTimer, 1000)
    this.pomodoroActive = true
  }

  // terminate the timer and change the UI
  stopPomodoro() {
    clearInterval(this.interval)
    this.buttonText = 'start'
    this.buttonStyle = 'blue'
    this.pomodoroActive = false
    this.setState({ 
      runtime: 0,
      message: ''
    })
  }

  // pomodoro on a break
  setPomodoroBreakState() {
    this.buttonText = 'cancel breaktime'
    this.buttonStyle = 'red'
    this.setState({
      runtime: this.state.breakTime * 60,
      activeTimerType: timerType.breakTimer,
      message: 'taking a break, are we??????????'
    })
  }

  // pomodoro as busy
  setPomodoroBusyState() {
    this.buttonText = 'take a break'
    this.buttonStyle = 'green'
    this.setState({
      runtime: this.state.busyTime * 60,
      activeTimerType: timerType.busyTimer,
      message: 'keep on going!'
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
        <Text style={{margin: 20}}>
          {this.state.message}
        </Text>
         <TimeSettingComponent 
          text='keep BUSY for' 
          minutes={this.state.busyTime} 
          onSettingsChange={this.handleBusyTimeChange} 
          restrictControlInteraction={this.pomodoroActive} />

         <TimeSettingComponent 
          text='Sort break duration' 
          minutes={this.state.breakTime} 
          onSettingsChange={this.handleBreakTimeChange} 
          restrictControlInteraction={this.pomodoroActive} /> 
  
        { 
          this.state.activeTimerType != timerType.paused && 
          <Button color={this.buttonStyle} title={this.buttonText} onPress={() => this.switchPomodoroState()} />
          
        }

        <Text style={styles.timer}>
          {('00' + m).slice(-2) + ':' + ('00' + s).slice(-2)}
        </Text>
        
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
        <Text>SETTINGSO KLASES SKAICIUS: </Text>
       
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
    fontSize: 62,
    color:'white',
  },
});

var timerType = {
  busyTimer: 1,
  breakTimer: 2,
  paused: 3
} */
import React from 'react';
import { Block, Text } from 'expo-ui-kit';

export default ({ style }) => {
  return (
    <Block
      color="#2f384b"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}>
    
        <Text bold h1 center style={{marginBottom: 90}}>
        About Productivity Assistant 
      </Text>
       
    
      <Text h4 center style={{marginBottom: 150}}>
      
      Ši programėle bus paremta Pomodoro laiko planavimo metodu, kuris naudoja vartotojo numatytus laiko intervalus skirtus darbui ir atskiria juos trumpomis poilsio pertraukomis. 
     
      </Text>
     
    </Block>
    
    
  );
};
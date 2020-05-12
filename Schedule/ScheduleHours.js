import React, { Component } from 'react';
import { Block, Text } from 'expo-ui-kit';
import { Feather, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Button, View, Alert } from 'react-native';
import Constants from 'expo-constants';
export default class ScheduleHourss extends Component
 {
  constructor(props){
    super(props);
    
  }

   render()
   {
    return (
    
    <LinearGradient style={{ flex: 1 }} colors={['#242424', '#242424']}>
    <View style={styles.fixToText}>
      <Button
        color='#242424'
        title="?" 
        onPress={(e) => Alert.alert('Help', 'tekstasss :DDDD')}
      />
    </View>
  
      <Text bold h2 white center>
          Schedule
        </Text> 
      <Text h4 white center>
        Pasirinktos dienos
      </Text>
      <Text h4 white center>
     vvv
      </Text>
      <Button 
      color='#242424'
      title="Cancel"
      onPress={()=>this.props.navigation.goBack()}
    />
    <Button 
      color='#242424'
      title="next"
      onPress={()=> Alert.alert()}
    />
  
    </LinearGradient>
    
       
      
      
      
    );
   }
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row-reverse',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });
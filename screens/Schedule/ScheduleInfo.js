import React from 'react';
import { Block, Text } from 'expo-ui-kit';
import {
    DrawerItem,
    createDrawerNavigator,
    DrawerContentScrollView,
  } from '@react-navigation/drawer';
  import { Feather, AntDesign } from '@expo/vector-icons';
  import { LinearGradient } from 'expo-linear-gradient';
  import { StyleSheet, Button, View } from 'react-native';
  import Constants from 'expo-constants';
  import { Alert } from 'react-native'; 

export default ({navigation}) => {
    return (
    
    <LinearGradient style={{ flex: 1 }} colors={['#E94057', '#E94057']}>
    <View style={styles.fixToText}>
      <Button
        color='#E94057'
        title="?" 
        onPress={(e) => Alert.alert('Help', 'tekstasss :DDDD')}
      />
    </View>
  
      <Text bold h2 center>
          Schedule
        </Text> 
      <Text h4 center>
        informacija apie schedule
      </Text>
      <Button 
      color='black'
      title="Cancel"
      onPress={()=>navigation.navigate('ScheduleDays')}
    />
    
  
    </LinearGradient>
    
       
      
      
      
    );
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
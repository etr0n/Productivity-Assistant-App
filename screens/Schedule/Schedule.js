import React from 'react';
import {  Block, Text} from 'expo-ui-kit';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Alert } from 'react-native';


export default({navigation}) => {
  
  return (
    
  <Block color='#2f384b'>
    
    <View style={styles1.klaustukas}>
      <TouchableOpacity
        onPress={()=>Alert.alert('Help', '')}
      >
        <Text  bold>?</Text>
      </TouchableOpacity>

    </View>

    <Text bold h2 center >
      Schedule 
    </Text> 

    <Text h4 center >
      There is no schedule defined!
   </Text>

    <View style={styles.fixToText}>
      <TouchableOpacity
        onPress={()=>navigation.navigate('ScheduleDays')}
      >
        <Text center>CREATE SCHEDULE</Text>
      </TouchableOpacity>
  </View>
    </Block>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color:'#0A1824',
  },
  fixToText: {
    flexDirection: 'row',
    alignItems: "center",
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 8,
    marginHorizontal: 130,
    marginTop: Constants.statusBarHeight,
    
  },
  separator: {
    borderBottomColor:'black',
  },
});

const styles1 = StyleSheet.create({
  container: {
    flex: 3,
    marginTop: Constants.statusBarHeight,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color:'#0A1824'
  },
  fixToText: {
   flexDirection: 'row',
    alignItems: "center",
    borderColor: 'black',
    borderWidth: 2,
    marginVertical: 8,
    marginHorizontal: 130,
    marginTop: Constants.statusBarHeight,
  },
  separator: {
    marginVertical:16,
    borderBottomColor: 'black',
    
  },
  klaustukas:{
    paddingTop: 41,
    fontSize: 18,
    paddingLeft: 360
  }
});
  

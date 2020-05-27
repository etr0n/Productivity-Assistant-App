import React, {Component} from 'react';
import { Block, Text } from 'expo-ui-kit';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Button, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Alert } from 'react-native';
import { CheckBox } from 'react-native-elements'

var dienos=[];
export default class ScheduleDays extends Component
{
  constructor(props) {
    super(props);

    this.state = { checked: false, checked2: false,checked3: false,
       checked4: false,checked5: false, checked6: false,checked7: false,
      };
      
  } 
  AddItemsToArray(teig,pav){
    if(!teig)
    {
      dienos.push(pav.toString())
    }
    else
    {
      dienos=dienos.filter(item => item !== pav.toString())
    }
    
  } 
  DeleteAll()
  {
    dienos=[];
  }
  handleChange() {
    
    this.setState({
        checked: !this.state.checked      
    })
    
  }
  handleChange2() {
    this.setState({
        checked2: !this.state.checked2      
    })
  }
  handleChange3() {
    this.setState({
        checked3: !this.state.checked3      
    })
  }
  handleChange4() {
    this.setState({
        checked4: !this.state.checked4      
    })
  }
  handleChange5() {
    this.setState({
        checked5: !this.state.checked5      
    })
  }
  handleChange6() {
    this.setState({
        checked6: !this.state.checked6      
    })
  }
  handleChange7() {
    this.setState({
        checked7: !this.state.checked7      
    })
  }
  
  sort_days()
  {
    var day_of_week='Monday'
    var list = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"]
    var sorted_list = list.slice(day_of_week).concat(list.slice(0,day_of_week));
    return dienos.sort(function(a,b) { return sorted_list.indexOf(a) > sorted_list.indexOf(b); });
  }

render(){

  return (
    
    <Block color="#2f384b">
    <View style={styles.fixToText}>
      <TouchableOpacity
        onPress={()=>Alert.alert('Help','')}
      >
        <Text bold>?</Text>
      </TouchableOpacity>

    </View>
    
      <Text bold h2  center>
          Schedule
        </Text> 
      <Text h3 center>
        On which days do you want to be reminded to work?
      </Text>
      
   <CheckBox
      title='Monday'
      checkedColor='white' 
      containerStyle={[{ backgroundColor: '#2f384b', borderColor:'#2f384b' }]}
      textStyle={[{color:'black'}]}
      checked={this.state.checked}
      onIconPress={()=>  this.handleChange(this.state.checked)   & this.AddItemsToArray(this.state.checked,'Monday')}
   />
    <CheckBox
      title='Tuesday'
      checkedColor='white'
      containerStyle={[{ backgroundColor: '#2f384b', borderColor:'#2f384b' }]}
      textStyle={[{color:'black'}]}
      checked={this.state.checked2}
      onIconPress={()=>this.handleChange2()& this.AddItemsToArray(this.state.checked2,'Tuesday')}
   />
   <CheckBox
      title='Wednesday'
      checkedColor='white'
      containerStyle={[{ backgroundColor: '#2f384b', borderColor:'#2f384b' }]}
      textStyle={[{color:'black'}]}
      checked={this.state.checked3}
      onIconPress={()=>this.handleChange3() & this.AddItemsToArray(this.state.checked3,'Wednesday')}

   />
    <CheckBox
      title='Thursday'
      checkedColor='white'
      containerStyle={[{ backgroundColor: '#2f384b' , borderColor:'#2f384b'}]}
      textStyle={[{color:'black'}]}
      checked={this.state.checked4}
      onIconPress={()=>this.handleChange4() & this.AddItemsToArray(this.state.checked4, 'Thursday')}
   />
   <CheckBox
      title='Friday'
      checkedColor='white'
      containerStyle={[{ backgroundColor: '#2f384b', borderColor:'#2f384b' }]}
      textStyle={[{color:'black'}]}
      checked={this.state.checked5}
      onIconPress={()=>this.handleChange5() & this.AddItemsToArray(this.state.checked5, 'Friday')}
   />
    <CheckBox
      title='Saturday'
      checkedColor='white'
      containerStyle={[{ backgroundColor: '#2f384b', borderColor:'#2f384b' }]}
      textStyle={[{color:'black'}]}
      checked={this.state.checked6}
      onIconPress={()=>this.handleChange6() &  this.AddItemsToArray(this.state.checked6,'Saturday')}
    />
    <CheckBox
      title='Sunday'
      checkedColor='white'
      containerStyle={[{ backgroundColor: '#2f384b', borderColor:'#2f384b' }]}
      textStyle={[{color:'black'}]}
      checked={this.state.checked7}
      onIconPress={()=>this.handleChange7() &  this.AddItemsToArray(this.state.checked7, 'Sunday')}
   />


   <View style={stylesCancelNext.fixToText}>
    
     <TouchableOpacity
        onPress={()=> this.props.navigation.goBack() & this.DeleteAll() }
      >
      <Text center>CANCEL</Text>
      </TouchableOpacity> 

      <TouchableOpacity
       onPress={()=> Alert.alert('Selected days', this.sort_days().join('\n'))}
      >
        <Text>NEXT</Text>
      </TouchableOpacity>
     
    </View>

  </Block>
  
  );
    
  }     
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: 16,
      backgroundColor:'#2f384b',
      
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row-reverse',
      marginHorizontal: 10,
      marginVertical:8,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: 'black',
    },
  });
  const stylesCancelNext = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
      marginHorizontal: 16,
      backgroundColor:'#2f384b',
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent:'space-between',
      borderColor: 'black',
      borderWidth: 2,
      padding: 10,
      marginHorizontal: 20,
    },

    separator: {
      marginVertical:16,
      borderBottomColor: 'black',
      borderBottomWidth: 3
    },
  });
  
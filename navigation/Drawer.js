/* eslint-disable react-native/sort-styles */
/* eslint-disable import/order */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  DrawerItem,
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { Feather, AntDesign } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/SimpleLineIcons';
import { Block, Button, Text } from 'expo-ui-kit';
import { LinearGradient } from 'expo-linear-gradient';

// screens
import Dashboard from '../screens/Dash/Dashboard';

import Schedule from '../screens/Schedule/Schedule';
import ScheduleDays from '../screens/Schedule/ScheduleDays';
import ScheduleHours from '../screens/Schedule/ScheduleHours';
import ScheduleInfo from '../screens/Schedule/ScheduleInfo';

import Settings from '../screens/Settings/Settings';
import Projects from '../screens/Projects';
import About from '../screens/About';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Screens = ({ navigation, style }) => {
  return (
    <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerTitle: null,
          headerLeft: () => (
            <Button transparent onPress={() => navigation.openDrawer()}>
              <Feather name="menu" size={18} color="black" style={{ paddingHorizontal: 10 }} />
            </Button>
          ),
        }}>
        <Stack.Screen name="Home">{props => <Dashboard {...props} />}</Stack.Screen>
        <Stack.Screen name="Projects">{props => <Projects {...props} />}</Stack.Screen>
        <Stack.Screen name="Schedule">{props => <Schedule {...props} />}</Stack.Screen>
        <Stack.Screen name="About">{props => <About {...props} />}</Stack.Screen>
        <Stack.Screen name="Settings">{props => <Settings {...props} />}</Stack.Screen>
        <Stack.Screen name="ScheduleDays">{props => <ScheduleDays {...props} />}</Stack.Screen>
        <Stack.Screen name="ScheduleHours">{props => <ScheduleHours {...props} />}</Stack.Screen> 
        <Stack.Screen name="ScheduleInfo">{props => <ScheduleInfo {...props} />}</Stack.Screen>
      </Stack.Navigator>
    </Animated.View>
  );
};

const DrawerContent = props => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false} contentContainerStyle={{ flex: 1 }}>
      <Block>
        <Block flex={0.4} margin={20} bottom>
          <Icon name="user"  size ={60} color="#fff"/>
          <Text white title>
            User
          </Text>
          <Text white size={9}>
            user@rgmail.com
          </Text>
        </Block>
        <Block>
          <DrawerItem
            label="Work"
            labelStyle={styles.drawerLabel}
            style={styles.drawerItem}
            onPress={() => props.navigation.navigate('Home')}
            icon={() => <AntDesign name="clockcircle" color="white" size={16} />}
          />
           <DrawerItem
            label="Projects"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Projects')}
            icon={() => <AntDesign name="database" color="white" size={18} />}
          />
          <DrawerItem
            label="Schedule"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Schedule')}
            icon={() => <AntDesign name="calendar" color="white" size={18} />}
          />
           <DrawerItem
            label="About"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('About')}
            icon={() => <AntDesign name="info" color="white" size={18} />}
          />
          <DrawerItem
            label="Settings"
            labelStyle={{ color: 'white', marginLeft: -16 }}
            style={{ alignItems: 'flex-start', marginVertical: 0 }}
            onPress={() => props.navigation.navigate('Settings')}
            icon={() => <AntDesign name="setting" color="white" size={18} />}
          />
        </Block>
      </Block>

      <Block flex={false}>
        <DrawerItem
          label="Logout"
          labelStyle={{ color: 'white' }}
          icon={() => <AntDesign name="logout" color="white" size={16} />}
          onPress={() => alert('Are you sure ???')}
        />
      </Block>
    </DrawerContentScrollView>
  );
};

export default () => {
  const [progress, setProgress] = React.useState(new Animated.Value(0));
  const scale = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
  });
  const borderRadius = Animated.interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const animatedStyle = { borderRadius, transform: [{ scale }] };

  return (
     <LinearGradient style={{ flex: 1 }} colors={['#1e232e', '#1e232e']}>  
      <Drawer.Navigator
        // hideStatusBar
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={styles.drawerStyles}
        contentContainerStyle={{ flex: 1 }}
        drawerContentOptions={{
          activeBackgroundColor: 'transparent',
          activeTintColor: 'white',
          inactiveTintColor: 'white',
        }}
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        drawerContent={props => {
          setProgress(props.progress);
          return <DrawerContent {...props} />;
        }}>
        <Drawer.Screen name="Screens">
          {props => <Screens {...props} style={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    // overflow: 'scroll',
    // borderWidth: 1,
  },
  drawerStyles: { flex: 1, width: '50%', backgroundColor: 'transparent' },
  drawerItem: { alignItems: 'flex-start', marginVertical: 0 },
  drawerLabel: { color: 'white', marginLeft: -16 },
  avatar: {
    borderRadius: 60,
    marginBottom: 16,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
});
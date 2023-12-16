//appnavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './Screens/welcome';
import LoginScreen from './Screens/login';
import SignupScreen from './Screens/signup';
import HomeScreen from './Screens/home';
import NotificationScreen from './Screens/notification';
import submitcomplaint from './Screens/submit';
import Alertscreen from './Screens/alertmap';
import Profilescreen from './Screens/profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Communityscreen from './Screens/communityscreen';
import donatescreen from './Screens/donateform';
import becomeamember from './Screens/becomeamember';
import Faqscreen from './Screens/faqs';
import AboutUsScreen from './Screens/aboutus';
import SuggestionsScreen from './Screens/suggestionsbyuser';
import trackscreen from'./Screens/track';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TabNavigator" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Submit" component={submitcomplaint} />
      <Stack.Screen name="Alert" component={Alertscreen} />
      <Stack.Screen name='Profile' component={Profilescreen} />
      <Stack.Screen name='Track' component={trackscreen} />
      <Stack.Screen name='Member' component={becomeamember} />
      <Stack.Screen name="Donate" component={donatescreen} />
      <Stack.Screen name='Faqs' component={Faqscreen} />
      <Stack.Screen name='About' component={AboutUsScreen}/>
      <Stack.Screen name='Suggestions' component={SuggestionsScreen} />
      <Stack.Screen name='TabNavigator' component={TabNavigator} />
    </Stack.Navigator>
  );
};

export const TabNavigator = ()=>{
    return(
      <Tab.Navigator screenOptions={({route}) => ({
        tabBarLabelStyle: {marginBottom: 5, fontSize: 14, fontWeight: '700'},
        tabBarStyle: {marginBottom: 0},
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Alert') {
            iconName = focused ? 'alert' : 'alert-outline';
          } else if (route.name === 'Community') {
            iconName = focused ? 'apps' : 'apps-outline';
          }
          else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })} initialRouteName='Home'>
        <Tab.Screen options={{
          headerShown:false
        }} name='Home' component={HomeScreen}></Tab.Screen>
        <Tab.Screen name='Alert' component={Alertscreen}></Tab.Screen>
        <Tab.Screen name='Community' component={Communityscreen}></Tab.Screen>
        <Tab.Screen name='Profile' component={Profilescreen}></Tab.Screen>
      </Tab.Navigator>
    )
}


export default AppNavigator;


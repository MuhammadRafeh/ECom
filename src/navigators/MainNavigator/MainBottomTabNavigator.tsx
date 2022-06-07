import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../../screens/Auth/AuthNavigatorScreens/Login/LoginScreen';

const Tab = createBottomTabNavigator();

function MainBottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LoginScreen} />
    </Tab.Navigator>
  );
}

export default MainBottomTabNavigator;
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Report from '../pages/Report';
import UserProfile from '../pages/UserProfile';

const Tab = createBottomTabNavigator();

export default function TabHome() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Report" component={Report} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
}

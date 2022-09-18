import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Report from '../pages/Report';
import UserProfile from '../pages/UserProfile';

const Stack = createNativeStackNavigator();

export default function StackReportForm() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ReportFormScene1" component={Report} />
      <Stack.Screen name="ReportFormScene2" component={Home} />
      <Stack.Screen name="ReportFormScene3" component={UserProfile} />
    </Stack.Navigator>
  );
}

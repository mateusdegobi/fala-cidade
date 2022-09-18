import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReportFormScene1 from '../pages/ReportForms/scenes/ReportFormScene1';
import StackReportForm from './StackReportForm';
import TabHome from './TabHome';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabHome"
            options={{headerShown: false}}
            component={TabHome}
          />

          <Stack.Screen name="ReportFormScene1" component={ReportFormScene1} />
          <Stack.Screen name="ReportFormScene2" component={ReportFormScene1} />
          <Stack.Screen name="ReportFormScene3" component={ReportFormScene1} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigatorParamList} from '../Interface';
import {ListScreen} from '../screen/ListScreen';
import {DetailScreen} from '../screen/DetailScreen';

const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{headerShown:false}} name="list" component={ListScreen} />
      <Stack.Screen name="detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
export default AppNavigator;

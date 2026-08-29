import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Para ejercicio #2
import type { RootStackParamList } from './types';

const Tab = createBottomTabNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>🏠</Text>
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Detalles',
            tabBarIcon: ({ color, size }) => (
              <Text style={{ fontSize: size, color }}>ℹ️</Text>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
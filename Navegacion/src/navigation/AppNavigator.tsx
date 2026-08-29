import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import type { RootStackParamList } from './types';

const Drawer = createDrawerNavigator<RootStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Drawer.Screen name="Details" component={DetailsScreen} options={{ title: 'Detalles' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
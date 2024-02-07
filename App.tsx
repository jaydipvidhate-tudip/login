import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { RealmProvider } from '@realm/react';
import { User } from './src/components/utils/User';
import Dashboard from './src/components/Dashboard/Dashboard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/components/LoginPage/LoginScreen';
import Setting from './src/components/Dashboard/Setting/Setting';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerScreenTwo from './src/components/Dashboard/DrawerScreens/DrawerScreenTwo';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();

  const DashboardDrawerNavigator = () => {
    
    return (
      <Drawer.Navigator >
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="DrawerScreenTwo" component={DrawerScreenTwo} />
      </Drawer.Navigator>
    );
  };

  const DashboardNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: 'black' },
        }}>
        <Tab.Screen
          options={{ headerShown: false }}
          name="DashboardDrawer"
          component={DashboardDrawerNavigator}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Setting"
          component={Setting}
        />
      </Tab.Navigator>
    );
  };

  const AuthNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="DashboardNavigator"
          component={DashboardNavigator}
        />
      </Stack.Navigator>
    );
  };

  return (
    <RealmProvider schema={[User]}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </RealmProvider>
  );
}

const styles = StyleSheet.create({});

export default App;

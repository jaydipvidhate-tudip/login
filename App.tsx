import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import LoginScreen from './src/components/LoginPage/LoginScreen';
import {RealmProvider, useQuery} from '@realm/react';
import {User} from './src/components/utils/User';
import TaskItem from './src/components/test/UserList';
import Dashboard from './src/components/Dashboard/Dashboard';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <RealmProvider schema={[User]}>
      <Dashboard/>
      </RealmProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;

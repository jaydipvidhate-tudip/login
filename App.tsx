import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import LoginScreen from './src/components/LoginPage/LoginScreen';

function App(): React.JSX.Element {

  return (
    <SafeAreaView >
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="white"
      />
      <LoginScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;

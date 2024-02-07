import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import { settingStyles } from './SettingStyle';
import {useDrawerStatus} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

// type RootStackParamList = {
//   Dashboard: any;
//   Setting: any;
// };
// type Props = <RootStackParamList, 'Setting'>;

const Setting: React.FC = () => {
  const navigation = useNavigation(); // Replace YourNavigationType with the appropriate type

  return (
    <View style={settingStyles.settingWrapper}>
      <Text style={settingStyles.heading}>Setting Screen</Text>
      {/* <TouchableOpacity style={settingStyles.openDrawerBtnWrapper}>
      <Text style={settingStyles.subHEading}>Open Drawer</Text>
      </TouchableOpacity> */}
    </View>
  );
};


export default Setting;

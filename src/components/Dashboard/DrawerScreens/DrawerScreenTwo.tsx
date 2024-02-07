import React from "react"
import { Text, View } from "react-native"
import { settingStyles } from "../Setting/SettingStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDrawerStatus } from "@react-navigation/drawer";

const DrawerScreenOne:React.FC = () => {
    const status = useDrawerStatus();

    

    return(
        <View style={settingStyles.settingWrapper}>
        <Text style={settingStyles.heading}>Drawer Screen 2</Text>
        {/* <TouchableOpacity style={settingStyles.openDrawerBtnWrapper}>
        <Text style={settingStyles.subHEading}>Open Drawer</Text>
        </TouchableOpacity> */}
      </View>
    )
}

export default DrawerScreenOne;
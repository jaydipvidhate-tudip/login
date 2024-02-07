import React, { useState } from 'react';
import {ActivityIndicator, Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputBox from '../input/InputBox';
import Realm from 'realm';
import { useRealm } from '@realm/react';
import { styles } from './LoginStyles';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: any;
  DashboardNavigator:any;
};

type Props = NativeStackScreenProps<RootStackParamList, "Login">;



const LoginScreen: React.FC<Props>= ({ navigation } ) => {

    const [formDetails,setFormDetails] = useState({
        name:"Jaydip",
        email:"jaydip@gm.com",
        password:"123123"
    })

    const realm = useRealm();

    const [isLoading,setIsLoading] = useState<Boolean>(false)

    const handelOnChangeText = (value:string,name:string) => {
        setFormDetails({...formDetails,[name]:value})
    }

    const handelOnSubmit =() =>{
      setIsLoading(true)
      if (formDetails.name == "" || formDetails.name =="" || formDetails.password =="") {
        setTimeout(() => {
          Alert.alert("Plz fill all details")
          setIsLoading(false)
        }, 1000);
        return 
      }
 
      realm.write(() => {
        realm.create('User', {
          _id: new Realm.BSON.ObjectId(),
          name: formDetails.name,
          email: formDetails.email,
          password: formDetails.password,
        });
      });
      const currntDate = new Date() 
      setTimeout(() => {
        setIsLoading(false)
        
        navigation.navigate('DashboardNavigator', { loginDate : currntDate.toString()})
      }, 1000);
    }


  return (
    <>
        <StatusBar barStyle={'dark-content'} backgroundColor="white" />
    <ScrollView style={{width: '100%'}}>
      
      <Image
        source={require('../../assets/LoginIllustration.jpg')}
        style={styles.bannerImage}
      />
      <View style={{padding:20}}>

      <Text style={styles.titleText}>Login</Text>
      <InputBox returnKeyType='next' lable='Name' onChange={handelOnChangeText} value={formDetails.name} placeholder='Enter Your Name'/>
      <InputBox returnKeyType='next' lable='Email' onChange={handelOnChangeText} value={formDetails.email} placeholder='Enter Your Email'/>
      <InputBox isSecure returnKeyType='go' lable='Password' onChange={handelOnChangeText} value={formDetails.password} placeholder='Enter Your Password'/>
      <View style={styles.submitBtnWrapper}>

      <TouchableOpacity activeOpacity={0.6} onPress={handelOnSubmit} style={styles.submitBtn}>
        <Text style={styles.baseText}>
            SignUp
        </Text>
      </TouchableOpacity>
      </View>
      </View>
      {
        isLoading && <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:"center",backgroundColor:"#00000080",position:'absolute',top:0,left:0}}>
          <ActivityIndicator size={40} color="#ffffff"/>
        </View>
      }
    </ScrollView>
    </>

  );
};



export default LoginScreen;

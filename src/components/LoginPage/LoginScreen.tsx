import React, { useState } from 'react';
import {ActivityIndicator, Alert, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputBox from '../input/InputBox';
import Realm, { ObjectSchema } from 'realm';
import { useRealm } from '@realm/react';


const LoginScreen: React.FC = () => {

    const [formDetails,setFormDetails] = useState({
        name:"",
        email:"",
        password:""
    })

    const realm = useRealm();

    const [isLoading,setIsLoading] = useState(false)

    const handelOnChangeText = (value:string,name:string) => {
        setFormDetails({...formDetails,[name]:value})
    }

    const handelOnSubmit =() =>{
      setIsLoading(true)
      if (formDetails.name == "" || formDetails.name =="" || formDetails.password =="") {
        setTimeout(() => {
          Alert.alert("Please Fill All Details")
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
  
      Alert.alert('added');
      setIsLoading(false)

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

const styles = StyleSheet.create({
  bannerImage: {
    width: '100%',
    height: 260,
    objectFit: 'cover',
  },
  titleText: {
    fontSize: 40,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
    marginVertical:10
  },
  submitBtnWrapper:{
    marginVertical:40,
    justifyContent:"flex-end",
    alignItems:'flex-end'
  },
  submitBtn:{
    paddingHorizontal:60,
    paddingVertical:14,
    backgroundColor:"#004b79",
    alignItems:"center",
    borderRadius:100,

  },
  baseText: {
    fontSize: 20,
    fontWeight: '400',
    color: 'white',
  },
});

export default LoginScreen;

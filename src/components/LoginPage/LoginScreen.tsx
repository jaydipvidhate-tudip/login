import React, { useState } from 'react';
import {Alert, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputBox from '../input/InputBox';

const LoginScreen: React.FC = () => {

    const [formDetails,setFormDetails] = useState({
        name:"",
        email:"",
        password:""
    })

    const handelOnChangeText = (value:string,name:string) => {
        setFormDetails({...formDetails,[name]:value})
    }

    const handelOnSubmit =() =>{
        Alert.alert("Logged In")
    }
  return (
    <SafeAreaView style={{width: '100%'}}>
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
    </SafeAreaView>
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

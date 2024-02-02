import React, { useState } from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
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

  return (
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

      <TouchableOpacity style={styles.submitBtn}>
        <Text style={styles.baseText}>
            SignUp
        </Text>
      </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
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

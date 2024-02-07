import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
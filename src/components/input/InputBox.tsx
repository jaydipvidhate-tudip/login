import React, {useState} from 'react';
import {
  Image,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface InputBoxProps {
  lable: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  value: string;
  returnKeyType: ReturnKeyTypeOptions;
  onChange(text: string, name: string): void;
  isSecure?: boolean;
}

const InputBox: React.FC<InputBoxProps> = ({
  lable,
  placeholder,
  keyboardType,
  returnKeyType,
  value,
  onChange,
  isSecure,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const [isShow,setIsShow] = useState(isSecure)

  return (
    <>
      <Text style={[styles.baseText, styles.lable]}>{lable}</Text>
      <View style={styles.inputBoxWrapper}>
        <TextInput
          returnKeyType={returnKeyType}
          style={[
            styles.baseText,
            styles.inputBox,
            {borderColor: isFocused ? '#004b79' : '#004b7920'},
          ]}
          placeholder={placeholder}
          placeholderTextColor="#00000040"
          keyboardType={keyboardType ? keyboardType : 'default'}
          secureTextEntry={isShow}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={e => onChange(e, lable.toLocaleLowerCase())}
        />
        <TouchableOpacity activeOpacity={0.5} onPress={()=>setIsShow(!isShow)} style={styles.eyeIconWrapper}>
          {
            isShow ? 
            <Image
              source={require('../../assets/eye-outline.png')}
              style={[styles.eyeIcon,{display:isSecure?"flex":"none"}]}
              /> :
              <Image
              source={require('../../assets/eye-off-outline.png')}
              style={[styles.eyeIcon,{display:isSecure?"flex":"none"}]}
              /> 
          }
          </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'black',
  },
  lable: {
    marginVertical: 10,
    fontWeight: '500',
    letterSpacing: 1,
  },
  inputBoxWrapper: {
    position: 'relative',
  },
  inputBox: {
    borderWidth: 1.8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  eyeIconWrapper:{
    position: 'absolute',
    top:'30%',
    right:20,
  },
  eyeIcon: {
    width:20,
    height:20,
  },
});

export default InputBox;

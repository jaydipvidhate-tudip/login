import React, { useState } from 'react';
import {
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface InputBoxProps {
  lable: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  value: string;
  returnKeyType:ReturnKeyTypeOptions;
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

  return (
    <>
      <Text style={[styles.baseText, styles.lable]}>{lable}</Text>
      <TextInput
        returnKeyType={returnKeyType}
        style={[styles.baseText, styles.inputBox,{borderColor:isFocused?"#004b79":"#004b7920"}]}
        placeholder={placeholder}
        placeholderTextColor='#00000040'
        keyboardType={keyboardType ? keyboardType : 'default'}
        secureTextEntry={isSecure}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={e => onChange(e, lable.toLocaleLowerCase())}
      />
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
    fontWeight:'500',
    letterSpacing:1
  },
  inputBox: {
    borderWidth:1.8,
    paddingHorizontal:20,
    borderRadius:10,
  },
});

export default InputBox;

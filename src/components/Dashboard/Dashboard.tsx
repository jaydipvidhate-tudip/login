import {useObject, useQuery, useRealm} from '@realm/react';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {User} from '../utils/User';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Login: any;
  Dashboard: any;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const Dashboard: React.FC<Props> = ({navigation}) => {
  const realm = useRealm();
  const user = useQuery(User);

  

  const userListLength: number = user?.length - 1;
  const userUpdate = user ? user[userListLength] && useObject(User, user[userListLength]?._id) : '';

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<Boolean>(false);


  const handelSignOut = () => {
    realm.write(() => {
      realm.delete(user);
    });
    navigation.navigate('Login');
  };

  const handelSave = (_id: any) => {
    setIsLoading(true);
    if (userUpdate) {
      realm.write(() => {
        userUpdate.name! = name.length > 0 ? name : user[0].name;
        userUpdate.email! = email.length > 0 ? email : user[0].email;
      });
      setName('');
      setEmail('');
      Alert.alert('Saved Successfully');
      setIsLoading(false);
    }
  };

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          height: '100%',
        }}>
        <StatusBar barStyle={'light-content'} backgroundColor="black" />

        <Text style={[styles.textTitle, {marginBottom: 60}]}>Welcome</Text>
        <View
          style={{width: '100%', alignItems: 'center'}}
          key={user[userListLength]?.email}>
          <View style={styles.textWrapper}>
            <Text style={[styles.plainTextLable, styles.light]}>Name</Text>
            <Text style={[styles.plainText]}>{user[userListLength]?.name}</Text>
            <TextInput
              style={[styles.plainText, styles.InputBox]}
              value={name}
              placeholder="Change User Name"
              onChangeText={e => setName(e)}
              placeholderTextColor="#ffffff30"
            />
          </View>

          <View style={styles.textWrapper}>
            <Text style={[styles.plainTextLable, styles.light]}>Email</Text>
            <Text style={[styles.plainText]}>{user[userListLength]?.email}</Text>
            <TextInput
              style={[styles.plainText, styles.InputBox]}
              value={email}
              placeholder="Change User Email"
              onChangeText={e => setEmail(e)}
              placeholderTextColor="#ffffff30"
            />
          </View>
          <View style={{marginVertical: 20}}>
            {name.length > 0 || email.length > 0 ? (
              <TouchableOpacity
                style={{
                  backgroundColor: 'green',
                  paddingHorizontal: 40,
                  alignItems: 'center',
                  marginBottom: 20,
                  padding: 10,
                  borderRadius: 6,
                }}
                onPress={() => handelSave(user[userListLength]?._id)}>
                <Text style={styles.plainTextLable}>Save</Text>
              </TouchableOpacity>
            ) : (
              ''
            )}

            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                paddingHorizontal: 40,
                alignItems: 'center',
                padding: 10,
                borderRadius: 6,
              }}
              onPress={handelSignOut}>
              <Text style={styles.plainTextLable}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 40,
    color: '#ffffff',
  },
  plainTextLable: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '300',
  },
  light: {
    opacity: 0.5,
  },
  textWrapper: {
    marginVertical: 10,
    alignItems: 'center',
  },
  plainText: {
    color: '#ffffff',
    fontSize: 26,
  },
  InputBox: {
    backgroundColor: '#ffffff20',
    color: 'white',
    fontSize: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
});

export default Dashboard;

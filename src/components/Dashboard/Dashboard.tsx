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
import LoginScreen from '../LoginPage/LoginScreen';

const Dashboard: React.FC = () => {
  const realm = useRealm();
  const user = useQuery(User);
  
  
  const [name, setName] = useState(user[0] ? user[0].name : '');
  const [email, setEmail] = useState(user[0] ? user[0].email : '');
  
  const handelSignOut = () => {
      realm.write(() => {
          realm.delete(user);
        });
        Alert.alert('Signed Out');
    };
    
    const handelSave =(_id:any) =>{
        
        const userUpdate = useObject(User, _id);
        console.log(userUpdate);

    //   if (userUpdate) {
    //     realm.write(() => {
    //         userUpdate.name! = name;
    //         userUpdate.email! = email
    //     });
    //     Alert.alert("Saved Successfully")
    //   }

  }

  return (
    <View>
      {user?.length > 0 ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            height: '100%',
          }}>
          <StatusBar barStyle={'light-content'} backgroundColor="black" />

          <Text style={[styles.textTitle, {marginBottom: 60}]}>Welcome</Text>
          {user.map(user => (
            <View
              style={{width: '100%', alignItems: 'center'}}
              key={user.email}>
              <View style={styles.textWrapper}>
                <Text style={[styles.plainTextLable, styles.light]}>Name</Text>
                <TextInput
                  style={styles.plainText}
                  value={name}
                  onChangeText={e => setName(e)}
                />
              </View>

              <View style={styles.textWrapper}>
                <Text style={[styles.plainTextLable, styles.light]}>Email</Text>
                <TextInput
                  style={styles.plainText}
                  value={email}
                  onChangeText={e => setEmail(e)}
                />
              </View>
              <View style={{marginVertical: 20}}>
                {name !== user.name && (
                  <TouchableOpacity
                    style={{
                      backgroundColor: 'green',
                      paddingHorizontal: 40,
                      alignItems: 'center',
                      marginBottom: 20,
                      padding: 10,
                      borderRadius: 6,
                    }}
                    onPress={() => handelSave(user._id)}>
                    <Text style={styles.plainTextLable}>Save</Text>
                  </TouchableOpacity>
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
          ))}
        </View>
      ) : (
        <LoginScreen />
      )}
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
});

export default Dashboard;

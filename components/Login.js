import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Login = (props) => {
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={styles.container}>
      <Image
        source={require('../login.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.welcome}>Welcome!</Text>
      <Text style={styles.welcome_text}>
        {' '}
        to<Text style={styles.text}> Buzz</Text>
      </Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Number"
        style={styles.input}
        onChangeText={text => setNumber(text)}
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          style={[styles.input_pw, {flex: 1}]} 
          secureTextEntry={!showPassword}
          onChangeText={text => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon
            name={showPassword ? 'eye-off' : 'eye'}
            size={25}
            color="#7b51fd"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate('MainTabs', {number, password})}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.forgot}>I forgot my password</Text>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', 
    padding: 20
  },
  welcome: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    borderColor: '#7b51fd',
    width: '100%',
    color: '#333',
  },
  input_pw: {
    fontSize: 20,
    color: '#333',
  },

  text: {
    fontSize: 30,
    color: '#7b51fd',
  },
  welcome_text: {
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#7b51fd', 
    borderRadius: 30,
    paddingVertical: 15, 
    paddingHorizontal: 120,
    marginTop: 20, 
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: {width: 0, height: 2}, 
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  forgot:{
    color: '#7b51fd',
    fontSize: 13,
    fontWeight: '600',
    margin: 10
  },

  image: {
    width: 150, 
    height: 150, 
    marginBottom: 20,
    marginTop: 30,
  },


  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 10,
    margin: 10,
    borderColor: '#7b51fd',
    paddingHorizontal: 10,
    width: '100%',
  },
  iconContainer: {
    padding: 5,
  },
});
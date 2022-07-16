import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, Switch, TextInput, Button } from 'react-native';

const App = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted_name, setSubmittedName] = useState('');
  const [submitted_email, setSubmittedEmail] = useState('');
  const [submitted_password, setSubmittedPassword] = useState('');

  function submit(){
    setSubmittedName(name);
    setSubmittedEmail(email);
    setSubmittedPassword(password);
  }
  

  return (
    <View style={{ flex:1, backgroundColor:'#272727' }}>

      <TextInput 
        style={{ color:'white', backgroundColor: '#303030', marginHorizontal: 20, marginTop: 20, paddingLeft:15, borderRadius: 10, elevation: 10, fontSize: 15 }} 
        value={name} 
        onChangeText={(text) => setName(text)}
        placeholder='Full name'
        placeholderTextColor={'#ffffff'}
      />
      <TextInput 
        style={{ color:'white', backgroundColor: '#303030', marginHorizontal: 20, marginTop: 20, paddingLeft:15, borderRadius: 10, elevation: 10, fontSize: 15 }} 
        value={email} 
        onChangeText={(text) => setEmail(text) }
        placeholder='Email'
        placeholderTextColor={'#ffffff'}
      />
      <TextInput 
        style={{ color:'white', backgroundColor: '#303030', marginHorizontal: 20, marginTop: 20, marginBottom: 10, paddingLeft:15, borderRadius: 10, elevation: 10, fontSize: 15 }} 
        value={password} 
        onChangeText={(password) => setPassword(password) }
        placeholder='Password'
        placeholderTextColor={'#ffffff'}
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={{ backgroundColor: 'green', marginHorizontal: 150, alignItems: 'center', marginTop:10, paddingVertical: 10, borderRadius:10, elevation: 10 }}
        onPress={() => submit()}
      >
        <Text style={{ color: 'white' }}>Submit</Text>
      </TouchableOpacity>

      <View style={{ alignItems: 'center', marginTop: 15 }}>
        <View>
          <Text style={{ color: 'white'}}>Name: {submitted_name}</Text>
          <Text style={{ color: 'white'}}>Email: {submitted_email}</Text>
          <Text style={{ color: 'white'}}>Password: {submitted_password}</Text>
          
        </View>
      </View>

    </View>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Header from './src/screens/components/Header';


// let panjang = 20

const App = () => {

  const [lebar, setLebar] = useState(30)
  const [panjang, setPanjang] = useState(10)
  const [luas, setLuas] = useState(0);


  function beli(){
    setLuas(panjang * lebar)
  }

  return (
    <View style={{ flex:1 }}>
      <Header judul="Aplikasi Baru" subJudul="New Ideas"/>
      
      <Text style={{ fontSize: 40 }}>{panjang}</Text>
      <Text style={{ fontSize: 40 }}>{lebar}</Text>
      <Text style={{ fontSize: 40 }}>{luas}</Text>

      <TouchableOpacity style={{ 
        backgroundColor: 'green', 
        marginTop: 20, 
        marginHorizontal: 20, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 6,
        paddingVertical: 15,
       }}
       onPress={() => beli()}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Beli</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;
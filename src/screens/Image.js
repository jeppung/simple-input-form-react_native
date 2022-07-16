import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import Header from './src/screens/components/Header';

const App = () => {

  function beli(){
    console.log('product sudah dibeli')
  }

  return (
    <View style={{ flex:1 }}>
      <Header judul="Aplikasi Baru" subJudul="New Ideas"/>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image 
          source={require('./src/images/mountain.jpg')} 
          style={{ width:400, height:200, borderRadius:6, marginTop:10 }}
          resizeMode="cover"
        />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1546830152-f6cc0b95b7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80' }} 
          style={{ width:400, height:200, borderRadius:6, marginTop:10 }}
          resizeMode="cover"
        />
      </View>
      {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image 
          source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==' }} 
          style={{ width:400, height:200, borderRadius:6, marginTop:10 }}
          resizeMode="cover"
        />
      </View> */}
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
import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text } from 'react-native';
import Header from './src/screens/components/Header';

const App = () => {
  return (
    <View style={{ flex:1 }}>
      <Header judul='Aplikasi Mencari Pekerjaan' subJudul='New Ideas'/>
      <Header judul='Aplikasi Baru' subJudul='New Ideas 2'/>
    </View>
  );
}

export default App;
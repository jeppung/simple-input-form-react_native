import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text } from 'react-native';

const App = () => {
  return (
    <View style={{ flex:1 }}>
      <StatusBar 
        hidden={false} 
        barStyle='light-content' 
        backgroundColor="transparent"
        translucent
      />
      <View style={{ backgroundColor: "red", paddingTop: 40, paddingBottom: 40 }}>
        <Text>Header</Text>
      </View>
    </View>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { View, Text, DrawerLayoutAndroidComponent } from 'react-native';

const App = () => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <Text style={{ color: 'white' }}>Hello World</Text>
      <View style={{ backgroundColor:'red', width: 100, height: 100, borderRadius: 15 }}></View>
      <View 
        style={{
          // flex: 1,
          // justifyContent: 'center',
          backgroundColor: 'white',  
          paddingVertical: 50, 
          paddingHorizontal: 30, 
          borderTopWidth: 10,
          borderBottomWidth: 10,
          borderColor: '#bdbdbd',
          marginHorizontal: 10,
          marginVertical: 10,
          elevation: 10,
        }}
        >
        <Text>
        Sit aliquip aute quis do proident officia irure voluptate consectetur adipisicing irure ut. Pariatur enim incididunt consequat incididunt laboris commodo. Quis id tempor Lorem minim esse dolore id ut dolore pariatur. Ullamco esse pariatur amet deserunt anim non incididunt exercitation. Laboris exercitation veniam minim do est adipisicing aliquip ea. Reprehenderit adipisicing deserunt ad labore nisi cupidatat dolor et magna deserunt ad occaecat commodo. Do elit id minim irure culpa reprehenderit consectetur
        </Text>
      </View>

      <View style={{ backgroundColor: 'red', flexDirection: 'row'}}>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home</Text>
        </View>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Category</Text>
        </View>
        <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>Profile</Text>
        </View>
      </View>
    </View>
  );
}

export default App;

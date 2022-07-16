import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
const App = () => {
  return (
    <View>
      <Text style={{ color: 'blue', fontWeight: 'normal', fontSize: 22, textAlign: 'center', marginTop: 10, textDecorationLine:'line-through' }}>
        Nama Saya
      </Text>
      <Text style={{ marginHorizontal: 10, marginVertical:10, letterSpacing:1, lineHeight:20 }}>
        Elit labore dolore pariatur ullamco aliquip cillum reprehenderit laborum duis consequat et pariatur magna voluptate. Irure proident laboris veniam dolor adipisicing nostrud eu exercitation ullamco sit labore est. Magna sit duis ex sunt. Voluptate id officia exercitation dolore ut est officia nulla. Id in et in non. Exercitation ut aliqua laborum aliquip.
      </Text>
    </View>
  );
}

export default App;
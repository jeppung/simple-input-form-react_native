import React, { useState, useEffect } from 'react';
import { View, StatusBar, Text } from 'react-native';

const Header = (props) => {
    return (
        <View style={{ backgroundColor: '#337bff', paddingHorizontal:20, paddingVertical:15, elevation:10}}>
            <StatusBar backgroundColor="#337bff"/>
            <Text style={{ fontSize: 22, fontWeight: "bold", color: "#ffffff" }}>{props.judul}</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold", color: "#ffffff" }}>{props.subJudul}</Text>
        </View>
    );
}

export default Header;
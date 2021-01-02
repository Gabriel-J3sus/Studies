import React from 'react';
import { View } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';

export default function Camera() {
    return (
        <View style={{ flex: 1 }}>
            <ExpoCamera style={{ flex: 1 }} />
        </View>
    );
}
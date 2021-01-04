import React from 'react';
import { SafeAreaView } from 'react-native';
import Lottie from 'lottie-react-native';

import rocketAnimation from './rocket-animation.json';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
      <Lottie autoSize resizeMode="contain" source={rocketAnimation} autoPlay loop/>
    </SafeAreaView>
  );
}
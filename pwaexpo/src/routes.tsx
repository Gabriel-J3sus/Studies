import React from 'react';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Main from './pages/Main';
import Camera from './pages/Camera';

const { Navigator, Screen } = createBottomTabNavigator(); 

export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen 
                    options={{ 
                        tabBarIcon: ({ color }) => <Feather name="home" size={20} color={color}/>                    
                    }} 
                    name="Main"
                    component={Main} 
                />

                <Screen 
                    options={{
                        tabBarIcon: ({ color }) => <Feather name="camera" size={20} color={color} />
                    }}
                    name="Camera"
                    component={Camera} 
                />
            </Navigator>
        </NavigationContainer>
    );
}
import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import { useAuth } from '../../contexts/auth';

export default function Dashboard() {
    const { user, signOut } = useAuth();
    
    function handleSignOut() {
        signOut();
    }

    return (
        <View style={styles.container}>
            <Text>{user?.name}</Text>
            <Button title="Logout" onPress={handleSignOut} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
})
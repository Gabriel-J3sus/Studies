import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import { useAuth } from '../../contexts/auth';

export default function SignIn() {
    const { signed, user,signIn } = useAuth();

    console.log(signed);
    console.log(user);
    
    
    function handleSignIn() {
        signIn();
    }

    return (
        <View style={styles.container}>
            <Button title="Sign in" onPress={handleSignIn} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
    },
})
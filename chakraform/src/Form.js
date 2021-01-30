import React, { useCallback, useRef, useState } from 'react';
import { 
    Stack,
    Button,
    FormControl,
    FormLabel,
    InputGroup,
    InputRightElement,
    FormHelperText,
} from '@chakra-ui/react';

import InputComponent from './components/Input';

function Form() {
    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        console.log(emailInputRef.current?.value);
        console.log(passwordInputRef.current?.value);
        console.log('I was submitted')
    }, []);

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <Stack 
                maxWidth={600} 
                margin="auto" 
                spacing={5}
                marginTop={5}
            >
                <FormControl>
                    <FormLabel htmlFor="email"> Email Address</FormLabel>

                    <InputComponent 
                        isRequired
                        type="email"
                        id="email"
                        helperText="email-helper-text"
                        ref={emailInputRef}
                    />
                    <FormHelperText id="email-helper-text">
                        Your user account email address.
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password"> Password </FormLabel>
                    <InputGroup>
                        <InputComponent
                            isRequired
                            type={showPassword ? "text" : "password"}
                            id="password"
                            helperText="password-helper-text"
                            ref={passwordInputRef}
                        />
                        <InputRightElement width="4.5rem">
                            <Button
                                height="1.75rem"
                                size="sm"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormHelperText id="password-helper-text">
                        The password you used to sign up with.
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <Button 
                        colorScheme="blue"
                        type="submit"
                    >
                        Sign In
                    </Button>
                </FormControl>
                
            </Stack>
        </form>
    );
}

export default Form;
import React, { forwardRef } from 'react';

import { Input } from '@chakra-ui/react';

function InputComponent({type, id, helperText, ...rest}, ref) {
    return (
        <Input 
            isRequired
            type={type}
            id={id}
            aria-describedby={helperText}
            ref={ref}
            {...rest}
        />
    );
}

export default forwardRef(InputComponent);
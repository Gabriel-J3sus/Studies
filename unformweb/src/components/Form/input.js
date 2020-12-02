import { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

import '../../styles/input.css';

export default function Input({ name, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input ref={inputRef} defaultValue={defaultValue} {...rest} />
        
            { error && <span style={{ marginTop: -9, marginBottom: 10, color: "#F00" }}>{error}</span> }
        </div>
    );
}
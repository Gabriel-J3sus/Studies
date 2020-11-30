import React, { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>

            <input 
                ref={ref}
                type="text"
                {...rest}
            />
        </div>
    );
}

export default forwardRef(Input);
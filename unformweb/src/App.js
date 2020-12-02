import { useRef, useEffect } from 'react';
import { Form } from '@unform/web';
import { Scope } from '@unform/core';

import * as Yup from 'yup';

import './App.css';

import Input from './components/Form/input';

function App() {
  const formRef = useRef(null);

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('O email é obrigatório'),
        address: Yup.object().shape({
          street: Yup.string().required('A rua é obrigatória'),
          neighborhood: Yup.string().required('O bairro é obrigatório'),
          city: Yup.string().required('A cidade é obrigatória'),
          state: Yup.string().required('O estado é obrigatório'),
          number: Yup.string().required('O número é obrigatório'),
        }),
        password: Yup.string().required('A senha é obrigatória'),
      });

      await schema.validate(data, { abortEarly: false, });
  
      console.log(data);

      formRef.current.setErrors({});

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      //setData pegar dados do backend
      formRef.current.setData({
        name: 'Gabriel Jesus',
        email: 'gabr.jesus001@gmail.com',
        address: {
          city: 'São Paulo',
        }
      })
    }, 2000);
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>

      <Form 
        ref={formRef} 
        onSubmit={handleSubmit} 
        style={{ display: 'flex', flexDirection: 'column', maxWidth: 600, width: 400, }}
      >
        <Input name="name"/>
        <Input type="email" name="email"/>

        <Scope path="address">
          <Input name="street"/>
          <Input name="neighborhood"/>
          <Input name="city"/>
          <Input name="state"/>
          <Input name="number"/>
        </Scope>
        
        <Input type="password" name="password"/>
        
        <button type='submit'>Enviar</button>
      </Form>

    </div>
  );
}

export default App;

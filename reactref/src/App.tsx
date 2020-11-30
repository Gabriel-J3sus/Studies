import React, { FormEvent, useCallback, useRef } from 'react';

import Input from './components/Input';
import Modal, { ModalHandles } from './components/Modal';



function App() {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef({ value: false });
  const modalRef = useRef<ModalHandles>(null);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault(); 
    
    console.log(nameInputRef.current?.value);
    console.log(acceptTermsRef.current.value);
  }, []);

  const handleAcceptTerms = useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }, []);
  
  const handleOpenModal = useCallback(() => {
    modalRef.current?.openModal();
  }, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <Input 
          name="name"
          label="Nome Completo"
          ref={nameInputRef}
        />

        <button type="button" onClick={handleAcceptTerms}>
          Aceitar Termos
        </button>

        <button type="submit">Enviar</button>
      </form>

      <button onClick={handleOpenModal}> Abrir modal </button>

      <Modal ref={modalRef} />
      
    </div>
  );
}

export default App;

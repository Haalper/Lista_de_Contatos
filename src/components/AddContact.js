import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../actions/contactActions';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: Math.random().toString(),
      name,
      email,
      phone
    };
    dispatch(addContact(newContact));
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <h2>Adicionar Contato</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Telefone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Adicionar Contato</button>
      </form>
    </div>
  );
};

export default AddContact;

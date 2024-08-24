import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editContact } from '../actions/contactActions';

const EditContact = ({ contact }) => {
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedContact = {
      ...contact,
      name,
      email,
      phone
    };
    dispatch(editContact(editedContact));
  };

  return (
    <div>
      <h2>Editar Contato</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Telefone:</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <button type="submit">Salvar Alterações</button>
      </form>
    </div>
  );
};

export default EditContact;

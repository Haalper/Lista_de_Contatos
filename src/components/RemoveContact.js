import React from 'react';
import { useDispatch } from 'react-redux';
import { removeContact } from '../actions/contactActions';

const RemoveContact = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeContact(id));
  };

  return (
    <button onClick={handleRemove}>Remover Contato</button>
  );
};

export default RemoveContact;

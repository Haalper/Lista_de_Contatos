import React from 'react';
import styled from 'styled-components';

// Estilo para o item da lista de contatos
const ContactItem = styled.div`
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
`;

// Estilo para o nome do contato
const ContactName = styled.h3`
    margin: 0;
    font-size: 18px;
    color: #333;
`;

// Estilo para o e-mail do contato
const ContactEmail = styled.p`
    margin: 5px 0;
    font-size: 14px;
    color: #666;
`;

// Estilo para o telefone do contato
const ContactPhone = styled.p`
    margin: 5px 0;
    font-size: 14px;
    color: #666;
`;

// Componente de Item da Lista de Contatos
const ContactListItem = ({ contact }) => {
    const { name, email, phone } = contact;

    return (
        <ContactItem>
            <ContactName>{name}</ContactName>
            <ContactEmail>{email}</ContactEmail>
            <ContactPhone>{phone}</ContactPhone>
        </ContactItem>
    );
};

export default ContactListItem;

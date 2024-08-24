import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ContactListItem from './components/ContactListItem';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import RemoveContact from './components/RemoveContact';

const App = () => {
    const contacts = useSelector(state => state.contacts);
    const [editContactId, setEditContactId] = useState(null);
    const contactToEdit = contacts.find(contact => contact.id === editContactId);

    return (
        <div>
            <h1>Lista de Contatos</h1>
            <AddContact />
            {editContactId ? (
                <EditContact
                    contact={contactToEdit}
                    onClose={() => setEditContactId(null)} // Passa a função onClose
                />
            ) : (
                <div>
                    {contacts.map(contact => (
                        <div key={contact.id}>
                            <ContactListItem contact={contact} />
                            <RemoveContact id={contact.id} />
                            <button onClick={() => setEditContactId(contact.id)}>
                                Editar
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;

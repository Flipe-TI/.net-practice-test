import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems([...items, { id: Date.now(), text: newItem.trim() }]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setEditedText(text);
  };

  const handleEditItem = (e, id) => {
    e.preventDefault();
    if (editedText.trim()) {
      setItems(items.map(item => 
        item.id === id ? { ...item, text: editedText.trim() } : item
      ));
      setEditingId(null);
      setEditedText('');
    }
  };

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '600px',
      margin: '2rem auto',
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#2c3e50',
        marginBottom: '1.5rem',
        fontSize: '2rem',
        fontWeight: '600'
      }}>
        Minha Lista de Itens
      </h1>

      <form onSubmit={handleAddItem} style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
        marginBottom: '1.5rem'
      }}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Digite um novo item"
          style={{
            flex: 1,
            padding: '0.8rem',
            borderRadius: '8px',
            border: '2px solid #e0e0e0',
            fontSize: '1rem',
            transition: 'border-color 0.3s ease',
            outline: 'none'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#3498db',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.3s ease',
            textTransform: 'uppercase'
          }}
        >
          Adicionar
        </button>
      </form>

      <ul style={{
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              padding: '0.8rem',
              margin: '0.5rem 0',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              animation: 'slideIn 0.3s ease',
              fontSize: '1.1rem',
              color: '#34495e'
            }}
          >
            {editingId === item.id ? (
              <form onSubmit={(e) => handleEditItem(e, item.id)} style={{ flex: 1 }}>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.5rem',
                    border: '2px solid #3498db',
                    borderRadius: '6px',
                    outline: 'none'
                  }}
                  autoFocus
                />
              </form>
            ) : (
              <div style={{ flex: 1 }} onClick={() => startEditing(item.id, item.text)}>
                <span style={{ marginRight: '0.5rem' }}>•</span>
                {item.text}
              </div>
            )}

            <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
              <button
                onClick={() => handleDeleteItem(item.id)}
                style={{
                  padding: '0.4rem 0.8rem',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        button:hover {
          opacity: 0.9;
        }
        
        input:focus {
          border-color: #3498db !important;
        }
      `}</style>
    </div>
  );
};

export default ItemList;
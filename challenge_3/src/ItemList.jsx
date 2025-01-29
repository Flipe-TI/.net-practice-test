import React, { useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim()) {
      setItems([...items, newItem.trim()]);
      setNewItem('');
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
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: '0.8rem',
              margin: '0.5rem 0',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
              display: 'flex',
              alignItems: 'center',
              animation: 'slideIn 0.3s ease',
              fontSize: '1.1rem',
              color: '#34495e'
            }}
          >
            <span style={{ marginRight: '0.5rem' }}>•</span>
            {item}
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
          background-color: #2980b9 !important;
        }
        
        input:focus {
          border-color: #3498db !important;
        }
      `}</style>
    </div>
  );
};

export default ItemList;
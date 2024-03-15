import React from 'react';

function TodoItem({ todo, onDelete }) {
  return (
    <div style={todoItemStyle}>
      <span>{todo}</span>
      <button onClick={onDelete} style={deleteButtonStyle}>Delete</button>
    </div>
  );
}

const todoItemStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#f4f4f4',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '5px',
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
};

const deleteButtonStyle = {
  backgroundColor: '#ff5858',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  borderRadius: '5px',
  cursor: 'pointer',
  marginLeft: '10px',
};

export default TodoItem;
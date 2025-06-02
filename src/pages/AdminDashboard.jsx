import React, { useState, useEffect } from 'react';

const mockUsers = [
  { id: 1, name: 'Jane Doe', email: 'jane@example.com', role: 'user' },
  { id: 2, name: 'John Smith', email: 'john@example.com', role: 'mentor' },
  { id: 3, name: 'Admin User', email: 'admin@example.com', role: 'admin' },
];

function AdminDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Simulate fetching users from an API
    setTimeout(() => setUsers(mockUsers), 500);
  }, []);

  const toggleRole = (id) => {
    setUsers(users.map(user => {
      if (user.id === id) {
        const newRole = user.role === 'user' ? 'mentor' : 'user';
        return { ...user, role: newRole };
      }
      return user;
    }));
  };

  const deleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  return (
    <main className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(({ id, name, email, role }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td>
                  <button onClick={() => toggleRole(id)} className="btn-toggle">
                    {role === 'user' ? 'Make Mentor' : 'Make User'}
                  </button>
                  <button onClick={() => deleteUser(id)} className="btn-delete">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}

export default AdminDashboard;

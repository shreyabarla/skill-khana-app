import React, { useState } from 'react';

function SignIn() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setError('');
    // TODO: Handle authentication logic here
    alert(`Signing in with\nEmail: ${email}\nPassword: ${'*'.repeat(password.length)}`);
  };

  return (
    <main className="auth-page">
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit} className="auth-form">
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn-submit">Sign In</button>
      </form>
    </main>
  );
}

export default SignIn;


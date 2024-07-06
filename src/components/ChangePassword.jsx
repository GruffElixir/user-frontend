import React, { useState } from 'react';
import './ChangePassword.css';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = () => {
    // Add logic to change the password
    if (newPassword === confirmPassword) {
      console.log('Password changed successfully');
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <div className="change-password">
      <h2>Change Password</h2>
      <p>Hints on getting your new password right:</p>
      <p>Your new password must be between 8 and 15 characters in length.</p>
      <form onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm New Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn" onClick={handleChangePassword}>
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;

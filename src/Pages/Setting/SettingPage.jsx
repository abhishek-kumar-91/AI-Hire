import React, { useState } from 'react';

const SettingPage = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    linkedin: 'https://linkedin.com/in/johndoe',
  });
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEmailNotificationsEnabled, setIsEmailNotificationsEnabled] = useState(true);
  const [isSMSNotificationsEnabled, setIsSMSNotificationsEnabled] = useState(false);

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    if (e.target.name === 'newPassword') setNewPassword(e.target.value);
    if (e.target.name === 'confirmPassword') setConfirmPassword(e.target.value);
  };

  const handleNotificationToggle = (e) => {
    const { name, checked } = e.target;
    if (name === 'emailNotifications') setIsEmailNotificationsEnabled(checked);
    if (name === 'smsNotifications') setIsSMSNotificationsEnabled(checked);
  };

  const handleSubmit = () => {
    alert('Profile and settings updated!');
  };

  return (
    <div className="container mx-auto mt-10 p-8 max-w-3xl">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Settings & Profile</h2>
        
        {/* Profile Section */}
        <div className="mb-8 space-y-4">
          <h3 className="text-xl font-semibold">Edit Profile</h3>
          {['name', 'email', 'phone', 'linkedin'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                value={profile[field]}
                onChange={handleProfileChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Password Section */}
        <div className="mb-8 space-y-4">
          <h3 className="text-xl font-semibold">Change Password</h3>
          <input type="password" name="newPassword" value={newPassword} onChange={handlePasswordChange} placeholder="New Password" className="w-full p-2 border border-gray-300 rounded-md" />
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={handlePasswordChange} placeholder="Confirm New Password" className="w-full p-2 border border-gray-300 rounded-md" />
        </div>

        {/* Notification Settings Section */}
        <div className="mb-8 space-y-4">
          <h3 className="text-xl font-semibold">Notification Settings</h3>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="emailNotifications" checked={isEmailNotificationsEnabled} onChange={handleNotificationToggle} />
            <span>Email Notifications</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" name="smsNotifications" checked={isSMSNotificationsEnabled} onChange={handleNotificationToggle} />
            <span>SMS Notifications</span>
          </label>
        </div>

        {/* Subscription Plan Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold">Subscription Plan</h3>
          <p className="text-gray-700">Current Plan: <strong>Premium</strong></p>
          <p className="text-gray-700">Next Billing Date: <strong>March 15, 2025</strong></p>
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">Update Subscription</button>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition" onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;
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
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
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
    // Handle form submission logic here, e.g., API call to save the updated profile and settings.
    alert('Profile and settings updated!');
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Settings & Profile</h2>
        
        {/* Profile Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleProfileChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
              <input
                type="url"
                name="linkedin"
                value={profile.linkedin}
                onChange={handleProfileChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Password Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Change Password</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handlePasswordChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Notification Settings</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={isEmailNotificationsEnabled}
                onChange={handleNotificationToggle}
                className="mr-2"
              />
              <label className="text-sm text-gray-700">Email Notifications</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="smsNotifications"
                checked={isSMSNotificationsEnabled}
                onChange={handleNotificationToggle}
                className="mr-2"
              />
              <label className="text-sm text-gray-700">SMS Notifications</label>
            </div>
          </div>
        </div>

        {/* Subscription Plan Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Subscription Plan</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Current Plan:</span>
              <span className="text-sm text-gray-700">Premium</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">Next Billing Date:</span>
              <span className="text-sm text-gray-700">March 15, 2025</span>
            </div>
            <div>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
                onClick={() => alert('Subscription management logic goes here')}
              >
                Update Subscription
              </button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            className="px-6 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition"
            onClick={handleSubmit}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;

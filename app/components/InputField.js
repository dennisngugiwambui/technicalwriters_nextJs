// components/InputField.js
'use client';

import React from 'react';

const InputField = ({ label, type, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}:</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      required
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </div>
);

export default InputField;

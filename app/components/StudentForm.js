// components/StudentForm.js
'use client';

import React, { useState } from 'react';
import InputField from './InputField';
import { supabase } from '@/lib/supabaseClient';

const StudentForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { error } = await supabase
            .from('students')
            .insert([{ name, email, age: parseInt(age) }]);

        if (error) {
            setMessage(`Error: ${error.message}`);
        } else {
            setMessage('Student information added successfully!');
            setName('');
            setEmail('');
            setAge('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <InputField
                label="Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <InputField
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
                label="Age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Add Student
            </button>
            {message && <p className="mt-4 text-sm text-center text-gray-600">{message}</p>}
        </form>
    );
};

export default StudentForm;

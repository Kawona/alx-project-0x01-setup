import React from 'react';

const UserPage: React.FC = () => {
    const users = [
        { id: 1, name: 'Alice', email: 'alice@example.com' },
        { id: 2, name: 'Bob', email: 'bob@example.com' },

    
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Users</h1>
            <div className="space-y-3">
                {users.map((u) => (
                    <div key={u.id} className="border rounded p-3 bg-white">
                        <div className="font-semibold">{u.name}</div>
                        <div className="text-sm text-gray-600">{u.email}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserPage;
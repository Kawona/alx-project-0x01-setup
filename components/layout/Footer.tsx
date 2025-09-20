import React from 'react';

const Footer: React.FC = () => (
    <footer className="bg-gray-100 text-center text-gray-600 py-4 mt-8">
        {new Date().getFullYear()} my App. All rights reserved.
    </footer>
);

export default Footer;
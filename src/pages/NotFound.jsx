import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const NotFound = () => {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-gray-800">404</h1>
                    <p className="mt-4 text-xl text-gray-600">Page Not Found</p>
                    <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
                    <a
                        href="/"
                        className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Go Back Home
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;

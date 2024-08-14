import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className='flex flex-col items-center justify-center h-[calc(100vh-100px)]'>
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-8">Page Not Found</p>
            <Link href="/" passHref legacyBehavior>
                <a className="text-blue-500 hover:underline text-lg">
                    Go back to Home
                </a>
            </Link>
        </div>
    );
};

export default Custom404;
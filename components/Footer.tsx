
import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="text-center mt-20 py-6 border-t border-slate-800">
            <p className="text-sm text-slate-500">
                Created with React, TypeScript, and Tailwind CSS.
            </p>
            <p className="text-sm text-slate-600">
                Your data is stored locally and never leaves your browser.
            </p>
        </footer>
    );
};

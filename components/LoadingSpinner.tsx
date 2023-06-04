import React from 'react';

interface LoadingSpinnerProps {
    size?: number;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 8 }) => {
    return (
        <div className='relative py-4'>
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <div className={`animate-spin inline-block w-${size} h-${size} border-[5px] border-current border-t-transparent text-primary-neon-green rounded-full`} role="status" aria-label="loading">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
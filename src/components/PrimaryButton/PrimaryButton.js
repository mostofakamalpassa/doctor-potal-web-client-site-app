import React from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button class="bg-gradient-to-r from-primary to-secondary px-3 py-2 hover:bg-sky-700 text-white uppercase font-bold rounded">{children}</button>
    );
};

export default PrimaryButton;
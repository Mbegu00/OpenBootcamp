import React, { useState } from 'react';

const RegisterForms = () => {

    const initialData = [
        {
            user: '',
            name: '',
            email: '',
            password: ''
        }
    ]

    const [data, setCredentialsData] = useState(initialData)

    return (
        <div>
            
        </div>
    );
}

export default RegisterForms;

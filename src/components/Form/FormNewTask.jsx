import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Form, FormTitle, Fields, Submit } from './Form';
import { useState } from 'react';

const FormNewTask = () => {

    const [ value, handleInputChange ] = useForm('');
    const [ error, setError ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if( value === '' ) {
            setError(true);
            return
        }

        setError(false);
    }
    return (
        <Form
            onSubmit={ handleSubmit }
        >
            <FormTitle>Nueva Tarea</FormTitle>
            { error && <p className="error">El nombre no debe estar vacío</p>}
            <Fields>
                <label >Nombre Tarea</label>
                <input 
                    type="text"
                    placeholder="Nombre Tarea"
                    autoComplete="off"
                    value={ value }
                    onChange={ handleInputChange }
                />
            </Fields>

            <Fields>
                <Submit>Agregar</Submit>
            </Fields>
        </Form>
    );
}

export default FormNewTask;
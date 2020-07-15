import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Form, FormTitle, Fields, Submit } from './Form';
import { useState } from 'react';

const FormNewTask = ({ dispatch }) => {

    const [ value, handleInputChange, resetForm ] = useForm('');
    const [ error, setError ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        if( value === '' ) {
            setError(true);
            return
        }
        
        setError(false);

        const newTask = {
            id: new Date().getTime(),
            task: value,
            done: false
        }

        dispatch( {
            type: 'ADD_TASK',
            payload: newTask
        });
        
        resetForm();
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
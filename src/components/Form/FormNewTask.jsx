import React from 'react';
import { useForm } from '../../hooks/useForm';
import { Form, FormTitle, Fields, Submit } from './Form';

const FormNewTask = () => {

    const [ value, handleInputChange ] = useForm('');

    return (
        <Form>
            <FormTitle>Nueva Tarea</FormTitle>
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
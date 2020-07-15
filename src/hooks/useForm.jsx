import { useState } from "react";

export const useForm = (initialState) => {

    const [ value, setValue ] = useState(initialState);

    const handleInputChange = e => {
        
        setValue(e.target.value);
    }

    const resetForm = () => {
        setValue('');
    }

    return [ value, handleInputChange, resetForm ];
}
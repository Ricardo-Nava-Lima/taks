import { useState } from "react";

export const useForm = (initialState) => {

    const [ value, setValue ] = useState(initialState);

    const handleInputChange = e => {
        
        setValue(e.target.value);
    }

    return [ value, handleInputChange ];
}
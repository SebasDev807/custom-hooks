import { useState } from "react";

export const useForm = (initialValue = {}) => {

    const [formState, setFormState] = useState(initialValue);

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        
        setFormState({
            ...formState,
            [name]: value
        });

    }


    const onResetForm = () => {
        setFormState(initialValue);
    }

    
    return {
        
        ...formState,
        onInputChange,
        onResetForm
        
    }
    
    
}

// const onResetForm = () => {

//     const formKeys = Object.keys(formState).map(key => [key, '']);

//     const formReset = Object.fromEntries(formKeys);

//     setFormState(formReset);

// }
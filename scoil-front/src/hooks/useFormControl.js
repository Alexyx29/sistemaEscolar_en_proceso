import React, { useState, useEffect } from 'react'

export const useFormControl = ({formStateInitialValues}) => {

    const [formState, setFormState] = useState(formStateInitialValues);
    const [formErrors, setFormErrors] = useState({});

    useEffect(() => {
        const formErrorsUpdate = Object.keys(formStateInitialValues).reduce((acc, c, i) => {
            
            let stateAcc = acc;

            stateAcc[c] = '';

            return ({...acc, ...stateAcc})
        }, {});

        /* console.log("Form errors:", formErrorsUpdate); */

        setFormErrors(formErrorsUpdate);
    }, []);

    const onChange = (e) => {
        const { target } = e;

        const name = target.name;
        const value = target.value;

        let stateUpdate = formState;

        stateUpdate[name] = value;

        setFormState(state => ({...state, ...stateUpdate}));
    }

    return ({
        onChange,
        
        formState,
        formErrors,
        setFormState,
        setFormErrors
    })
}

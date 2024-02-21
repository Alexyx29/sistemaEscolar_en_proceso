import { useEffect, useState } from "react";
import Check from "./check";
/**
 * 
 * @param {string} label_active Texto que se muestra cuando el switch es activo
 * @param {boolean} status_parent Valor checked del switch
 * @param {string} label_inactive Texto que se muestra cuando el switch es inactivo
 * @param {string} id Id del elemento check, si se ocupa varias veces en el mismo componente este es obligatorio
 * @param {any} value Valor del check
 * @param change Función que se ejecuta al cambiar de estatus, parametros checked y value
 * @param {boolean} showPadding Muestra el relleno superior para alinearlo en la vista formulario
 * @param {boolean} showLeft Si es verdadero muestra primero el texto y después el switch, en caso contrario primero muestra el switch y después el texto
 * @param {string} name Nombre del elemento check, sirve si se envia mediante formulario.
 * @returns 
 */
const Status = ( { label_active, status_parent, label_inactive, id = "status", value = 1, change = () => {}, showPadding = true, showLeft = false, name="" } ) => {
    const [ status, setStatus ] = useState(status_parent);
    const [ label, setLabel ] = useState(status_parent ? label_active : label_inactive)

    useEffect(() => {
        if(status){
            setLabel(label_active)
        } else {
            setLabel(label_inactive);
        }
    }, [ status, label_active, label_inactive ]);

    useEffect(() => {
        setStatus(status_parent);
    }, [ status_parent, value ]);

    useEffect(() => {
        if(status_parent){
            setLabel(label_active);
        } else {
            setLabel(label_inactive);
        }
    }, [label_active, status_parent, label_inactive])

    const changeStatus = (e) => {
        setStatus(e.target.checked)
        change(e.target.checked, value);
    }

    return (
        <Check label={label} status={status_parent} id={id} name={name || id} changeStatus={changeStatus} value={value} showPadding={showPadding} showLeft={showLeft}/>
    )
}

export default Status;
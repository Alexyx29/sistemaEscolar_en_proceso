import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
/**
 * Componente Password
 * Cuenta con un botón para poder visualizar o no la contraseña
 * @param {string} label
 * @param {boolean} hiddenMargin Si es verdadero se asignará un margen de md:mb-7 mb-2
 * @param {string} placeholder
 * @param {string} error Solo se muestra el error si el parámetro es distinto de una cadena vacía
 * @returns 
 */
const Password = ({ label, hiddenMargin, placeholder, error, autoComplete = 'new-password', change = () => {}, focus = () => {}, focusout = () => {} }) => {
    const [typePassword, setTipePassword] = useState('password');
    /**
     * Cambia el tipo de input de password
     */
    const changePassword = () => {
        if(typePassword === 'password'){
            setTipePassword('text');
        } else {
            setTipePassword('password');
        }
    }

    return (
        <>
            <div className="w-full">
                <label className="block opensans text-sm text-gray_alter whitespace-nowrap text-ellipsis overflow-hidden ml-1">{label}</label>
                <div className={(hiddenMargin ? '' : 'mb-7') + ' relative'}>
                    <div className="relative z-1">
                        <div className="absolute top-[6px] right-2.5 w-7 opacity-50 cursor-pointer" onClick={changePassword}>
                            { typePassword === 'password'
                                ? <FontAwesomeIcon icon={faEye} className="text-gray_alter text-base" />
                                : <FontAwesomeIcon icon={faEyeSlash} className="text-gray_alter text-base" />
                            }
                        </div>
                        <input id="password" name="password" type={typePassword} placeholder={placeholder} autoComplete={autoComplete} className="w-full border rounded border-libellum-border focus:outline-none text-gray_alter placeholder:text-sm placeholder:opensans placeholder:gray_alter text-sm px-[10px] py-3 font-open h-9 dark:bg-input-dark dark:text-placeholder-dark dark:placeholder:text-placeholder-dark" onChange={change} onFocus={focus} onBlur={focusout} />
                    </div>
                    { error &&(
                        <div className="text-error-warning text-xs absolute whitespace-nowrap font-open">{error}</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Password;
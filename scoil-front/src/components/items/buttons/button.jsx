/**
 * Componente Button
 * @param {string} type
 * @param {string} colors se puede personalizar el color del fondo y del texto con el parámetro colors mediante clases de tailwind
 * @param {boolean} send
 * @param {string} txt_button
 * @param {function} click (optional)
 * @returns 
 */

const Button = ({type, colors, send, txt_button , click = () => {}}) => {
    return (
        <>
            <div>
                <button type={type} className={`${colors} py-3 flex items-center justify-center h-[56px] m px-12 font-open rounded shadow focus:outline-none text-lg text-input-white w-[280px] btnSend whitespace-nowrap text-ellipsis disabled:opacity-75`} disabled={send} title={txt_button} onClick={click}>
                { send && 
                    <svg className="animate-spin h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                }
                { !send && (
                    <strong>{txt_button}</strong>
                )}
                </button>
            </div>
        </>                
    )
}

export default Button;
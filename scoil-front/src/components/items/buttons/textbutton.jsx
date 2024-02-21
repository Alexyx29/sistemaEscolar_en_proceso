/**
 * Componente TextButton. Devuevle texto como botón
 * @param {string} colors se puede personalizar el color del fondo y del texto con el parámetro colors mediante clases de tailwind
 * @param {string} txt_button
 * @param {string} margin
 * @param {function} click (optional)
 * @returns 
 */

const TextButton = ({colors, send, txt_button, margin = '0px', click = () => {}}) => {    
    return (
        <>
            <div className="flex justify-center" style = {{margin: `${margin}`}}>
                <button className={`${colors} background-color: transparent border: none padding: 0`} disabled={send} title={txt_button} onClick={click}>
                    {txt_button}                
                </button>
            </div>
        </>        
    )
}

export default TextButton;


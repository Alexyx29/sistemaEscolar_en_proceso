/**
 * Componente NormalSize
 * Tamaño normal para los elementos del formulario
 * @param {JSX.Element} children
 * @returns 
 */
const NormalSize = ({ children, align = '', height = '68px', overflow = 'visible' }) => {

    return (
        <>
            <div className={`sm:max-w-[258px] w-full my-1 md:my-0 relative divInput ${align}`} style={{height: height, overflow: overflow}}>
                {children}
            </div>
        </>
    )
}
export default NormalSize;
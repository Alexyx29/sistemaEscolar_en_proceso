/**
 * Componente formulario layout
 * @param {string} id
 * @param {event} submit
 * @returns 
 */
const FormLayout = ({ id, submit = (e) => {e.preventDefault();}, children }) => {
    return (
        <>
            <form id={id} className="relative text-left flex flex-wrap gap-y-1 md:gap-y-7 gap-x-8 w-full pt-1" onSubmit={submit} encType="multipart/form-data">
                {children}
            </form>
        </>
    )
}

export default FormLayout;
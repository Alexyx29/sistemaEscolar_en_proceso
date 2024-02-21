import React from "react";

const SectionTextEditor = ({children, colors, colorsMain='', }) => {    
    return (
        <>
            <aside className={`${colors} fle p-0 rounded-[10px] ` } >                 
                    <main className={`${colorsMain}  w-full flex border   flex-col mt-[0px] mb-[0px]`}>
                        {children}
                    </main>                                   
            </aside>
        </>
    )
}

export default SectionTextEditor;